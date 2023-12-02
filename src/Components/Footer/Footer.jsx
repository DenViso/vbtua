import React from 'react'
import './footerStyling.css'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <div className="left-links">
          <a href="#">CONTACT</a>
          <a href="#">TERMS OF SERVICES</a>
          <a href="#">SHIPPING AND RETURNS</a>
        </div>
        <div className="left-policy">
          <p><span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy policy.</p>
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
