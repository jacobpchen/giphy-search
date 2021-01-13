import React from "react"
import axios from "axios"
import Trending from "./components/Trending"

class Giphy extends React.Component {
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
      <div className="container">
        hello - from App.js

        <div>
          {this.state.trendingUrl.map(data =>
            <div key={data.id} >
              <Trending
                trending={data.images.original.url}
              />
            </div>
          )}

        </div>
      </div>
    )
  }
}
export default Giphy