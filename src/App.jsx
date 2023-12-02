import React from 'react'
import { Router, Routes, Route } from 'react-router'
import './App.css'
import { Header } from './Components/Header/Header'
import { StartPage } from './Components/StartPage/StartPage'
function App() {


  return (
    <div className="container">

      <Header />
      <StartPage />
     
    </div>
  )
}

export default App
