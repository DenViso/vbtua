import React from 'react'
import './cart.css'
import {shopData} from '../../../data/shopData'

export const Cart = () => {
  const newData=shopData.slice(0, 3);
  return (
    <div className='cart'>
      <h1>Shop Cart</h1>
    <div className="carts-conteiner">
      <div className="carts-conteiner-left">
        <div className="cart-left-info">
          {newData.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" /></div>
          ))}
        </div>
      </div>
      <div className="carts-conteiner-right"></div>
    
    </div>
    </div>


  )

}
