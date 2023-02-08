import React from 'react'
import './About.css'
import aboutUs from '../../assets/AboutUs.png'
const About = () => {
  return (
    <div className='food-blog__about'>
      <div className="food-blog__about-img">
        <img src={aboutUs} alt="About Us" />
      </div>
      <div className="food-blog__about-content">
        <h2>About Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default About
