import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import NavBar from './Components/NavBar'
import Products from './Components/Pages/Products'
import CartItems from './Components/Pages/CartItems'
import AddProducts from './Components/Pages/AddProducts'

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="app">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Products/>} path='/products'/>
        <Route element={<CartItems/>} path='/cartitems'/>
        <Route element={<AddProducts/>} path='/addproducts'/>
      </Routes>
    </div>
    </>
  )
}

export default App
