import React from 'react'
import './Articles.css'
import Card from '../../components/Card/Card'
import img1 from '../../assets/card1.png'
import img2 from '../../assets/card2.png'
import img3 from '../../assets/card3.png'
const Articles = () => {
  return (
    <div className='food-blog__articles'>
      <div className="food-blog__articles-heading">
        <h2>Latest Articles</h2>
      </div>
      <div className="food-blog__articles-card-container">
      <Card img={img1} title={"Grilled  Tomatoes at Home"}/>
      <Card img={img2} title={"Snacks for Travel"}/>
      <Card img={img3} title={"Post-workout Recipes"}/>
      </div>
    </div>
  )
}

export default Articles
