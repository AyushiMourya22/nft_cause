import React from 'react'
import './login.css'
import logo from '../assets/logo.png'
import { Link, Navigate } from 'react-router-dom'
import StarsCanvas from '../components/canvas/Stars'
import { useState } from 'react'
import axios from 'axios'
function Login() {
    const [username, setUsername] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function handleLoginSubmit(ev) {
        ev.preventDefault()
        try {
            const userName = await axios.post('/login', { username })
            alert('Login successful')
            setRedirect(true)

        } catch (e) {
            alert('Login failed')
        }
    }
    if (redirect) {
        return <Navigate to={'/user'} />
    }
    return (
        <div>
            <StarsCanvas />
            <Link to="/">
                <img src={logo} className='login_logo animate__animated animate__fadeIn' alt="" />
            </Link>
            <div className='login_form'>
                <div className="login_container animate__animated animate__fadeIn">
                    <div className="login_box">
                        <div className="login_content">
                            <h2>Login</h2>
                            <form action="" className='loginform' onSubmit={handleLoginSubmit}>
                                <input
                                    type="text"
                                    placeholder={'your username'}
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                                <Link to="/user">

                                    <button className='login_login'>LOGIN</button>
                                </Link>
                                <div className='login_bottom'>
                                    <div>
                                        Don't have an account yet?
                                    </div>
                                    <div className='login_register'>
                                        <Link to={'/register'} className='login_link'>
                                            Register Now
                                        </Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Login