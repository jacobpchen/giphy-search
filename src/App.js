import React from "react"
import './App.css'
import SearchGif from "./components/SearchGif"
import Trending from "./components/Trending"


class Giphy extends React.Component {
  render() {
    return (
      <div>
        <h2 className="header py-5 text-center m-0">Gif Search</h2>
        {/* <Trending /> */}
        <SearchGif />
      </div>
    )
  }
}
export default Giphy