import { useState } from 'react'
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom"

//Global Components

import HeaderComponent from './Components/Globals/HeaderComponent'
import FooterComponent from './Components/Globals/FooterComponent'

//Public Pages

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegirsterPage from './Pages/RegisterPage'
import CartPage from './Pages/CartPage'
import ProductListingPage from './Pages/ProductListingPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import ErrorPage from './Pages/ErrorPage'

//protected users pages

import UserProfilePage from "./Pages/Users/UserProfilePage"
import UserCartPage from "./Pages/Users/UserCartPage"
import UserOrderPage from "./Pages/Users/UserOrderPage"
import UserOrderDetailPage from "./Pages/Users/UserOrderDetailPage"

//protected admin pages

import AdminUsersPage from "./Pages/admin/AdminUsersPage"
import AdminAnalyticsPage from "./Pages/admin/AdminAnalyticsPage"
import AdminChatPage from "./Pages/admin/AdminChatPage"
import AdminCreateProductPage from "./Pages/admin/AdminCreateProductPage"
import AdminEditProductPage from "./Pages/admin/AdminEditProductPage"
import AdminEditUserPage from "./Pages/admin/AdminEditUserPage"
import AdminOrdersPage from "./Pages/admin/AdminOrdersPage"
import AdminProductsPage from "./Pages/admin/AdminProductsPage"

import ProtectedRoutesComponent from './Components/ProtectedRoutesComponent'
import RoutesWithUserChatComponent from "./Components/user/RoutesWithUserChatComponent"

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* <Route element={<RoutesWithUserChatComponent />}> */}

        {/* Public routes */}
      <Route element={<ProtectedRoutesComponent admin={false}/>} >

        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListingPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegirsterPage />} />

        {/* Protected User Routes */}

          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/cart-details" element={<UserCartPage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailPage />} />
        </Route>

      {/* </Route> */}

      {/* Protected Admin Routes */}

      <Route element={<ProtectedRoutesComponent admin={true}/>} >
        <Route path="/admin/user" element={<AdminUsersPage />} />
        <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/edit-products" element={<AdminEditProductPage />} />
        <Route path="/admin/chat" element={<AdminChatPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        <Route path="/admin/create-product" element={<AdminCreateProductPage />} />
      </Route>
      
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <FooterComponent />
    </BrowserRouter>
  )
}

export default App
