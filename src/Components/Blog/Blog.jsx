import React from 'react'
import './Blog.css'
import { BlogAssayd } from './BlogAssayd/BlogAssayd'
import { sliderData } from '../../data/sliderData'
export const Blog = () => {
  const newSliderData = sliderData.slice(1)
  return (
    <div className='blog'>
      <span></span>
      <BlogAssayd/>
   <div className="blog-section">
   {newSliderData.map((item) => (
      <div className="blog-info">
        <img src={item.image} alt=""/>
        <p>Fashion - October 8, 2020</p>
        <h1>Top Trends From Spring</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </p>
        <button>Read More</button>

      </div>
    ))
    }
    <div className="blog-slider">
      {/* <button>	&#60;</button> */}
      <button>1</button>
      <button>2</button>
      <button>&#62;</button>
    </div>
    </div>
   </div>
  )
}
