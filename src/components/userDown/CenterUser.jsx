import React from 'react' 
import './CenterUser.css'
import 'animate.css'
import { Link } from 'react-router-dom'
// import Link from 'react-router-dom'
const CenterUser = () => {
  return (
    <div className='userCenter'>
       
            <Link to='/user/nft/:uid'>
            <div className='collection animate__animated animate__backInDown' >
            <h1>Your Collections</h1>
            <p>See all your collections</p>
            </div>
        
            </Link>
         
            <Link to='/org/active'>

            <div className="browse animate__animated animate__backInDown">
            <h1>Browse Organisations</h1>
            <p>Browse over the organations you want to donate the fund</p>
            </div>
            </Link>
         
            
    </div>
  )
}

export default CenterUser