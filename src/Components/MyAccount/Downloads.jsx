import React from 'react'
import { Link } from 'react-router-dom'

export const Downloads = () => {
  return (
    <div className='orders'>
    <div className="orders-mesage">
      <p>No downloads available yet.</p>
      <Link to='/shop'>BROWSE PRODUCT</Link>
    </div>
  </div>
  )
}
