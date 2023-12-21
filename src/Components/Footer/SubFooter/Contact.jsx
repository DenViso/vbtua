import React from 'react'
import './SubFooter.css'

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Say Hello send us your thoughts about our products or share
your ideas with our Team!</p>
<div className="contact-form">
<div className="contact-form-input">
  <input type="text" placeholder="Name"/>
  <input type="text" placeholder="Name"/>
  <input type="email" placeholder="Email"/>
  <select name="Subject" id="Subject" placeholder='Subject'>
    <option value="Subject">Subject</option>
    <option value="Subject">Select</option>
    <option value="Subject">Select</option>
  </select>
</div>
<input type="text" name="" id="" placeholder='Message'/>
</div>
<button>SEND</button>
    </div>
  )
}
