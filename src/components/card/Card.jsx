import React from 'react'
import "./card.css"

function Card(props) {
  return (
    <div className="cardBx animate__animated animate__bounce">
        <div className="imgBx">
            <img src="" alt="" />
        </div>

        <div className="contentBx">

            <h2>{props.name}</h2>
            <p>{props.founder}</p>
            <h3>{props.estYear}</h3>
            
            <a href="#">Buy Now</a>
        </div>

</div>
  )
}

export default Card