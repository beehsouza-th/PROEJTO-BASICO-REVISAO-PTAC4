import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Reservas from './Components/Reservas'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return(
    <>
    <Header/>
    <Footer/>
    <Home/>
    <Reservas/>
    </>

  )
}
export default App
