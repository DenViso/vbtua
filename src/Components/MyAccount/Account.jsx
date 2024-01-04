import React from 'react'

export const Account = () => {
  return (
    <div className='account'>
      <h1>Account details</h1> 
      <input type="text" placeholder='First name*'/>
      <input type="text" placeholder='Last name*'/>
      <input type="text" placeholder='Display name*'/>
      <label htmlFor="">This will be how your name will be displayed in the account section and in reviews.</label>
      <input type="email" placeholder='Email address*'/>
      <h2>Password change</h2>
      <input type="text" placeholder='Current password (leave blank to leave unchanged)'/>
      <input type="text" placeholder='New password (leave blank to leave unchanged)'/>
      <input type="text" placeholder='Confirm new password'/>
      <button>SAVE CHANGES</button>
    </div>
  )
}
