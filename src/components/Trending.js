import React from 'react'
import axios from "axios"
import GifCard from './GifCard'

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

            <div className="trending">
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={(e) => this.handleRandomButton(e)}>
                        Random Gif</button>
                </div>

                {<div className="random">
                    {console.log("Printing from return")}
                    <GifCard
                        image={this.state.randomGif}
                    />
                </div>}

                <h3 className="text-center p-5">Trending GIFs</h3>
                <div className="trending container d-flex flex-wrap align-items-center">
                    {this.state.trendingUrl.map(index =>
                        <div key={index.id}
                            className="p-2" >
                            <img src={index.images.fixed_height.url}></img>
                        </div>
                    )}
                </div>
            </div>

        )
    }
}

export default Trending