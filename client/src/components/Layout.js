import React from 'react'
import ProductsListingPage from '../pages/ProductsListingPage'
import {Route,Routes} from 'react-router-dom'
import ProductDtailsPage from "../pages/ProductDtailsPage"
import CartPage from '../pages/CartPage'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Payment from '../pages/Payment'


const Layout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProductsListingPage />} />
      <Route path='/product-detail' element={<ProductDtailsPage />} />
      <Route path='/product-cart' element={<CartPage />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/payment' element={<Payment />} />
    </Routes>
    </>
  )
}

export default Layout
