import React from 'react'
import './Articles.css'
import Card from '../../components/Card/Card'
const Articles = () => {
  return (
    <div className='food-blog__articles'>
      <div className="food-blog__articles-heading">
        <h2>Latest Articles</h2>
      </div>
      <div className="food-blog__articles-card-container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Articles
