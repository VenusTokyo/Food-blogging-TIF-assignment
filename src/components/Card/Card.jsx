import React from 'react'
import './Card.css'
// import card1 from '../../assets/card1.png'
const Card = (props) => {
  return (
    <div className='food-blog__card'>
      <div className="food-blog__card-img">
        <img src={props.img} alt="" />
      </div>
      <div className="food-blog__card-content">
        <h3 className='food-blog__card-heading'>{props.title}</h3>
        <p className='food-blog__card-description'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Card
