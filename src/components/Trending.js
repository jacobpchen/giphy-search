import React from 'react'
import axios from "axios"
class Trending extends React.Component {
    constructor() {
        super()
        this.state = {
            trendingUrl: [],
            key: ''
        }
    }

    // on mount do an API call to get the trending gifs and load it.
    componentDidMount() {
        axios.get('https://api.giphy.com/v1/gifs/trending?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P&limit=25&rating=g')
            .then(response => {
                let apiResponse = response.data
                console.log(apiResponse)
                apiResponse = Array.from(apiResponse.data)
                this.setState({
                    trendingUrl: apiResponse
                })
            })
    }

    render() {
        return (
            <div>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    {console.log(this.state.trendingUrl)}
                    {console.log(Array.isArray(this.state.trendingUrl))}
                    {this.state.trendingUrl.map(data =>
                        <div key={data.id} >
                            <img src={data.images.downsized_medium.url}></img>
                        </div>
                    )}
                </div>
            </div>

        )
    }
}

export default Trending