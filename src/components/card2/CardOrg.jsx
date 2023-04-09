import React from 'react'
import "../card/card.css"
import { Link } from 'react-router-dom'

function CardOrg(props) {
  return (
    <div className="cardBx animate__animated animate__bounce">
        <div className="imgBx">
            <img src={props.image} alt="" />
        </div>

            <h2>{props.name}</h2>
        <div className="contentBx">
            <Link to='/org/payment'>
                <button>
                Donate Now

                </button>
                </Link>
        </div>

</div>
  )
}

export default CardOrg