import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import StarsCanvas from '../components/canvas/Stars'
import { useState } from 'react'
import axios from 'axios'


function Register() {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')

    async function handleRegister(ev){
        ev.preventDefault()
        try{
            await axios.post('/register',{firstname,lastname,username,email})
            alert('Registration successful.')
        }catch(e){
            alert('Registration failed')
        }
    }
    return (
        <div >
            <StarsCanvas/>
            <Link to="/">
                <img src={logo} className='register_logo animate__animated animate__fadeIn' alt="" />
            </Link>
            <div className="register_container animate__animated animate__fadeIn">
                <div className="register_box">
                    <div className="register_content">
                        <h2>Register</h2>
                        <form action="" className='registerform' onSubmit={handleRegister}>
                            <input
                                type="text"
                                placeholder={'your first name'}
                                value={firstname}
                                onChange={(e)=>setFirstname(e.target.value)}
                                />
                            <input
                                type="text"
                                value={lastname}
                                placeholder={'your last name'}
                                onChange={(e)=>setLastname(e.target.value)}
                                />
                            <input
                                type="email"
                                value={email}
                                placeholder={'youremail.com'}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            <input
                                type="text"
                                value={username}
                                placeholder={'your username'}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                            <Link to='/user'>
                            <button className='register_login '>Register Now</button>
                            </Link>
                            
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register