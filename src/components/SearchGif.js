import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import "./SearchGif.css";

class SearchGif extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      searchInput: "",
      gifLink: "http://api.giphy.com/v1/gifs/search?q=",
    };

  }

  setGif = () => {
    axios.get(this.state.gifLink + this.state.searchInput + "&api_key=rsSnDcswkLYJFsP5WFB0AMVxOcpVaDD7")
      .then(
        response => {
          let dataRes = response.data.data
          console.log(dataRes)
          this.setState({ gifs: dataRes }, this.printSearchGifs)
      })
      .catch((err) => console.log(err)) 
  }

  printSearchGifs = () => {
    let output = []
    output = this.state.gifs.map(gvalue =>
      <div className="gif-border" >
        <img className = "gif-size" src={gvalue.images.original.url} />
      </div>)

    let print = document.getElementsByClassName("results-output")[0]
    ReactDOM.render(output, print)
  }

  render() {
    return (
      <>
      <div className = "back"> 
        <div>
          <label >Search: </label>
          <input className="search-prompt-line" type = "text" 
          onChange={(event) => this.setState({ searchInput: event.target.value },)}
          placeholder={this.state.searchInput}/>

          <button className="button-search"
          onClick={() => {this.setGif()}}>
            Go
          </button>

        </div>

        <div>Search Results: </div>

        <div className="results-output"></div>
      </div>
      </>
    );
  }
}

export default SearchGif