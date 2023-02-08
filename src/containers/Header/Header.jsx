import React from 'react'
import './Header.css'
import logo from '../../assets/Logo.png'
import vector from '../../assets/Red Vector.png'
const Header = () => {
  return (
    <div className='food-blog__header'>
      <div className="food-blog__header-content">
        <div className="food-blog__header-content-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="food-blog__header-content-heading">

        <h1>Discover the <span>Best</span> Food and Drinks</h1>
        <p>Naturally made Healthcare Products for the better care &amp; support of your body.</p>
        <button>Explore Now!</button>
        </div>
      </div>
      <div className="food-blog__header-imgs">
        <button>Get In Touch</button>
        <img src={vector} alt="vector" />
      </div>
    </div>
  )
}

export default Header
