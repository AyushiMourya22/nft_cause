import React from 'react'
import "./Home.css"
import logo from "../assets/logo.png"
import video from '../assets/giphyy.gif'
import { Link } from 'react-router-dom'
import StarsCanvas from '../components/canvas/Stars'

function Home() {
    return (
        <div className='home_gradient_bg'>
            <StarsCanvas/>
            <Link to='/'>
                <img src={logo} className="home_logo animate__animated animate__fadeIn" alt="" />
            </Link>
            <div className='home_main'>
                <div className='home_left animate__animated animate__backInLeft'>
                    <img src={video} />
                </div>
                <div className='home_right animate__animated animate__backInRight' >
                    <div>
                        <p className="home_" id='heading' >NFT Cause</p>
                        <p>Our NFT fundraising app provides a new way for organizations to raise funds for social causes through the power of NFTs. With our easy-to-use platform, organizations can create and sell their own NFTs, showcase their cause to a global audience, and generate revenue without intermediaries. Our app also offers a diverse marketplace where NFT collectors can support emerging artists while also contributing to social causes. We prioritize the security and safety of our users' assets, providing a secure environment for fundraising. Join our community and start making a difference today!</p>
                        <div className='home_buttons '>
                            <Link to='/login' className='home_link'>
                                <button className='home_btn '>Get Started</button>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home