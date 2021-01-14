import React from 'react'
import axios from "axios"
import GifCard from './GifCard'
import "./SearchGif.css";

class Trending extends React.Component {
    constructor() {
        super()
        this.state = {
            trendingUrl: [],
            key: '',
            randomGif: [],
            url: 'https://api.giphy.com/v1/gifs/trending?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P'
        }
    }

    // on mount do an API call to get the trending gifs and load it.
    componentDidMount() {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P&limit=25&rating=g')
            .then(response => {
                let apiResponse = response.data
                apiResponse = Array.from(apiResponse.data)
                this.setState({
                    trendingUrl: apiResponse
                })
            })
    }

    handleRandomButton = (e) => {
        console.log("button worked")
        console.log("Before")

        axios.get('https://api.giphy.com/v1/gifs/random?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P&tag=&rating=g')
            .then(response => {
                let apiResponse = response.data
                this.setState({
                    randomGif: apiResponse,
                })
                console.log("After")
                console.log(this.state.randomGif)
            })
    }

    componentDidUpdate(prevProp, prevState) {
        console.log("Printing from update")
    }

    render() {
        return (
            <div className="back">
                <div className="trending mb-3 mx-3">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button type="button"
                            className="btn btn-dark m-3"
                            onClick={(e) => this.handleRandomButton(e)}>
                            Random Gif</button>
                        {/* I want to hide this component unless it refreshes} */}
                        <GifCard
                            image={this.state.randomGif}
                        />
                    </div>

                    {/* I want to show this on first load but if a 
                user hits random or if they search then I want to hide the trending gifs*/}
                    <h3 className="text-center p-5">Trending GIFs</h3>
                    <div className="trending container d-flex flex-wrap justify-content-around">
                        {this.state.trendingUrl.map(index =>
                            <div key={index.id}
                                className="p-2" >
                                <img src={index.images.fixed_height.url}></img>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}

export default Trending