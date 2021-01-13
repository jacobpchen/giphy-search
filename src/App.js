import React from "react"
import axios from "axios"
class Giphy extends React.Component {
  constructor() {
    super()
    this.state = {
      trendingUrl: []
    }
  }



  // on mount do an API call to get the trending gifs and load it.
  componentDidMount(event) {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=rdUagZZZB6SBGDtOIGrzFOVBiDLCc94P&limit=25&rating=g')
      .then(response => {
        let apiResponse = response.data
        console.log(apiResponse.data)
        console.log(Array.isArray(apiResponse.data))

        console.log(apiResponse.data[0].url)
        this.setState({
          trendingUrl: apiResponse.data
        })
      })
  }

  render() {
    return (
      <div>
        hello
        {/* <p>{this.state.trending}</p> */}
      </div>
    )
  }
}

export default Giphy