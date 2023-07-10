import { useState } from 'react'
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom"

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegirsterPage from './Pages/RegisterPage'
import CartPage from './Pages/CartPage'
import ProductListingPage from './Pages/ProductListingPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-list" element={<ProductListingPage />} />
      <Route path="/product-details/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegirsterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
