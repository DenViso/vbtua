import React from 'react'
import { Router, Routes, Route } from 'react-router'
import './App.css'
import { Header } from './Components/Header/Header'
import { StartPage } from './Components/StartPage/StartPage'
import { Footer } from './Components/Footer/Footer'
function App() {


  return (
    <div className="container">

      <Header />
      <StartPage />
      <Footer/>
     
    </div>
  )
}

export default App
