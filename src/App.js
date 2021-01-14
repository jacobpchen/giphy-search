import React from "react"
import './App.css'
import Trending from "./components/Trending"


class Giphy extends React.Component {
  render() {
    return (
      <div>
        <h2 className="header py-5 text-center">Gif Search</h2>
        <Trending />
      </div>
    )
  }
}
export default Giphy