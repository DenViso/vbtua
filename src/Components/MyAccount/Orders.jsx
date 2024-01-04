import React from 'react'
import { Link } from 'react-router-dom'

export const Orders = () => {
  return (
    <div className='orders'>
      <div className="orders-mesage">
        <p>No order has been made yet.</p>
        <Link to='/shop'>BROWSE PRODUCT</Link>
      </div>
    </div>
  )
}
