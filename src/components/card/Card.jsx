import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

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
            
            <Link href="#">
              <button>

              Buy Now
              </button>
              </Link>
        </div>

</div>
  )
}

export default Card