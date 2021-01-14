import React from 'react'
import axios from "axios"
import GifCard from './GifCard'
import "./SearchGif.css";
import SearchGif from './SearchGif'

class Trending extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchWord: ' ',
            url: 'https://api.giphy.com/v1/gifs/trending?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P'
        }
    }

    // on mount do an API call to get the trending gifs and load it.
    componentDidMount() {
        axios.get(this.state.url)
            .then(response => {
                let apiResponse = response.data.data
                console.log(apiResponse)
                /* apiResponse = Array.from(apiResponse.data) */
                this.setState({
                    data: apiResponse
                })
            }).catch(err => console.log(err))
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

    handleSearch = (event) => {
        event.preventDefault()
        this.setState(search => ({
            url: `http://api.giphy.com/v1/gifs/search?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P&q=${search.searchWord}`
        })
        )
    }

    handleChange = (event) => {
        this.setState({
            searchWord: event.target.value
        })
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.url !== this.state.url) {
            this.componentDidMount()
        }
    }

    render() {
        return (
            <div className="back">
                <div className="container">

                    <form>
                        Search For Any Gif<br />
                        <input type="text" name="query" onChange={this.handleChange} />
                    </form>
                    <button onClick={this.handleSearch}>Search</button>

                    <div className="d-flex flex-wrap">
                        {this.state.data.map(data =>
                            <div key={data.id} className="gif">
                                <GifCard
                                    image={data.images.fixed_height.url} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Trending