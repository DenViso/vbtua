import React, { useState } from 'react'
import { shopData } from '../../data/shopData'
import '../StartPage/startPageStyling.css'
import './shop.css'
import {Filter} from './Filter/Filter'


export const Shop = ({ startPage }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  console.log(startPage);
  const handleMouseEnter = (id) => {
    setActiveItemId(id);
  };

  const handleMouseLeave = () => {
    setActiveItemId(null);
  };
  return (
   <div className="shop">
   {startPage ? null :<Filter/> }
     <div className={!startPage ?"startPage" : "startPageFull" }>
        {shopData.map((item) => (
          <div
            key={item.id}
            className="shopItem"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.image} alt={item.header} />
            {activeItemId === item.id && (
              <>
              <div className="hover-button">
                <button>Add To Cart</button>
              </div>
              <div className="hover-icon">
                <img src="./img/shop/icon/cart.svg" alt="" />
                <img src="./img/shop/icon/eye.svg" alt="" />
                <img src="./img/shop/icon/heart.svg" alt="" />
              </div>
              </>
            )}
            <h3>{item.header}</h3>
            <p>${item.price}</p>
          </div>
        ))}
    </div>
   </div>
  )
}
