import React from 'react'
import'./subProduct.css'
export const Three = () => {
  return (
    <div className='three'>
      
<div className="rew">
  <h2>2 Reviews for lira earings</h2>
  <div className="rew-text">
    <h2>Scarlet withch <span>6 May, 2020</span> </h2>
    <span>★ ★ ★ ☆ ☆</span>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
  </div>
  <div className="rew-text">
    <h2>Scarlet withch <span>6 May, 2020</span> </h2>
    <span>★ ★ ★ ☆ ☆</span>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat.</p>
  </div>
  </div>
  <div className="form">
    <h2>Add a review</h2>
    <p>Your email address will not be published. Required fields are marked *</p>
    <input type="text" placeholder="Your Review*" />
    <input type="text" placeholder="Enter your name*" />
    <input type="text" placeholder="Enter your Email*" />
    {/* <textarea placeholder="Message"></textarea> */}
    <label htmlFor="checkbox"><input type="checkbox" name="checkbox" id="checkbox" />Save my name, email, and website in this browser for the next time I comment</label>
    <p>Your Rating*</p><span>☆ ☆ ☆ ☆ ☆</span>
    <button>Submit</button>
  </div>

      </div>
   
  )
}
