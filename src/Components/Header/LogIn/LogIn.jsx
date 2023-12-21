import React, {useState} from 'react'
import './LogIn.css'
import { SingIn } from './singIn'
import { Register } from './Register'


export const Login = () => {
  const [login, setLogin] = useState(true)
  const changeLogIn = () => {
    setLogin(true)
  }
  const changeRegister = () => {
    setLogin(false)
  }
  return (
    <div className='login'>
    {
      login ? <h1>My account</h1> : <h1>Register</h1>
    }
      <div className="login-but">
        <button onClick={changeLogIn} className={login?'active-login':''}>Sign in</button>
        <button onClick={changeRegister} className={!login?'active-login':''}>Register</button>
      </div>
   {login ? <SingIn /> : <Register />}
    </div>
  )
}
