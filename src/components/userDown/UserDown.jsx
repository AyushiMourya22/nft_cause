import React from 'react'
import './userDown.css';
import {Link} from 'react-router-dom';

const UserDown = () => {
  return (
    <div className='userDown'>
      <Link to="/add">
        <button className='btn animate__animated animate__fadeIn'> Create a new Organisation</button>
      </Link>
          
        
    </div>
  )
}

export default UserDown