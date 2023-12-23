import React from 'react'
import './BlogAssayd.css'
import { Fashion } from './Fashion'
import { Style } from './Style'
import { Accessories } from './Accessories'
import { Season } from './Season'
export const BlogAssayd = () => {
  

  return  (
    <div className='blogAssayd'>
      <h1>Blog</h1>
      <div className="blog-search">
      <input type="search" name="" id="" placeholder='Search...'/>
      <img src="./img/header/icon/find.svg" alt="searchIcon" />
      </div>
      <div className="blog-category">
        <a to ={<Fashion/>}>Fashion</a>
        <a to={<Style/>}>Style</a>
        <a to={<Accessories/>}>Accessories</a>
        <a to ={<Season/>}>Season</a>
        
      </div>

      
    </div>
  )

}
