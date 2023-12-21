import React from 'react'
import './footerStyling.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <div className="left-links">
          {/* <a href="#">CONTACT</a> */}
          <Link to="/contact">CONTACT</Link>
          <Link to="/error">TERMS OF SERVICES</Link>
          <Link to="/error">SHIPPING AND RETURNS</Link>
        
        </div>
        <div className="left-policy">
        <Link to={"/privacy"}><span>© 2021 Shelly.</span> Terms of use <span>and</span>privacy policy.</Link>
        </div>
      </div>
      <div className="right">
        <div className="right-form">
          <input type="text" placeholder="Give an email, get the newsletter."  /> <span>&rarr;</span>
        </div>
        <div className="right-links">
          <img src="./img/footer/10.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
