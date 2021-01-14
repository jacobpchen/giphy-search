import React from 'react'

function GifCard(props) {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h3>Here is a random Gif!</h3>
            {/* {<img src={props.image.data.image_url}></img>} */}
        </div>
    )

}

export default GifCard