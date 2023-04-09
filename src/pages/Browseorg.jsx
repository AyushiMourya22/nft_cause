import React from 'react'
import StarsCanvas from '../components/canvas/Stars'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './browseorg.css'
import { collections } from '../constants/organisations';
import CardOrg from '../components/card2/CardOrg'



function Browseorg() {
    return (
        <div>
            <StarsCanvas />
            <Link to='/'>
                <img src={logo} className="home_logo animate__animated animate__fadeIn" alt="" />
            </Link>
            <h2 id='bro_heading'> Active Organistaions</h2>
            <div className='bro_org'>
                <div><div className="bro_main">
                    {collections.map(item => {
                        return (
                            <CardOrg name={item.name} image={item.image} />
                        )
                    })}

                </div>

                </div>

            </div>

        </div>
    )
}

export default Browseorg