import React from 'react'

function GifCard(props) {
    return (
        <div className="container d-flex justify-content-around m-1">
            {<img src={props.image} ></img>}
        </div>
    )
}

export default GifCard