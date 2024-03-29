import React, { useState } from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'
export const Hero = () => {
    const [collection,setCollection] = useState("NewCollection");
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div onClick={() =>{setCollection("NewCollection")}}><Link style={{ textDecoration: 'none'}}to='/NewCollections' className="hero-latest-btn">
                <div>New Collections</div>
                <img src={arrow_icon} alt="" />
                </Link>{collection==="NewCollection"?'':<></>}</div>
        </div>
        <div className="hero-right">
            <img src={hero_imae} alt="" />
        </div>
    </div>
  )
}   
