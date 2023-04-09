
import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../assets/logo.png'
import './collection.css'
import { collections } from '../constants/organisations';

import Card from '../components/card/Card';
import StarsCanvas from '../components/canvas/Stars';


function Collections() {
  return (
    <div className='coll_top'>
      <StarsCanvas/>
      <Link to="/">
        <img src={logo} className='coll_logo animate__animated animate__fadeIn' alt="" />
      </Link>
      <div className='coll_main'>
        <div className="coll_left animate__animated animate__flipInY">
          <div className="coll_container">
            <div className="coll_cover-photo">
              <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" className="coll_profile" alt='' />
            </div>
            <div className="coll_profile-name">Beni Smith</div>
            <p className="coll_about">User Interface Designer and front-end developer</p>
            <button className="coll_msg-btn">Message</button>
            <button className="coll_follow-btn">Following</button>

          </div>
        </div>
        <div className="coll_right">
          {collections.map(item=>{
            return(
              <Card name={item.name} estYear={item.estYear} founder={item.founder}/>
            )
          })}
          
        </div></div>
    </div>
  )

}



export default Collections