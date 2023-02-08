import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
const Footer = () => {
  return (
    <div className='food-blog__footer'>


      <div className="food-blog__footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className='food-blog__footer-contact-ul'>
        <p className='footer__headings'>Contact Us</p>
        <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
        <li>example2020@gmail.com</li>
        <li>(904) 443-0343</li>
      </ul>
      <ul className='food-blog__footer-more-ul'>
        <p className='footer__headings'>More</p>
        <li>About Us</li>
        <li>Products</li>
        <li>Career</li>
        <li>Contact Us</li>
      </ul>
      <div className='food-blog__footer-social-copyright'>
        <div className="food-blog__footer-social">

          <p className='footer__headings'>Social Links</p>
          <div className="food-blog__footer-social-links">

            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
          </div>
          <div className="food-blog__footer-copyright">

            <p>&#169; 2022 Food Truck Example</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer
