import React from 'react'
import logo from '../../assets/logo.png'
import './userNavbar.css'
import userLogo from '../../assets/user.png'
import { Link } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'

const User_navbar = () => {
  return (
        <div className='userNavbar'>
            <div>
              <Link to="/">
                <img src={logo} alt="" className='logo'/>

              </Link>
            </div>
            <div className='Userprofile'>
                <AiOutlineUser size={25}/>
                <h2>qwerty</h2>
            </div>
            
        </div>
    // </div>
  )
}

export default User_navbar