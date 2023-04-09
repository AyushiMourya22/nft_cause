import React, { useContext } from 'react'
// import logo from '../assets/logo'
import User_navbar from '../components/userDown/user_navbar'
import './User.css'
import CenterUser from '../components/userDown/CenterUser'
import UserDown from '../components/userDown/UserDown'
import StarsCanvas from '../components/canvas/Stars'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { UserContext } from '../Usercontext'

const User = () => {
  const {user,setuser}=useContext(UserContext)
  

  return (
    <div className='user' >
      <StarsCanvas />
      <Link to="/">
        <img src={logo} className='user_logo animate__animated animate__fadeIn' alt="" />
      </Link>

      <CenterUser />

      <UserDown />

    </div>
  )
}



export default User