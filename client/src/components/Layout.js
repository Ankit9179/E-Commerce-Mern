import React from 'react'
import ProductsListingPage from '../pages/ProductsListingPage'
import {Route,Routes} from 'react-router-dom'
import ProductDtailsPage from "../pages/ProductDtailsPage"
import CartPage from '../pages/CartPage'


const Layout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProductsListingPage />} />
      <Route path='/product-detail' element={<ProductDtailsPage />} />
      <Route path='/product-cart' element={<CartPage />} />
    </Routes>
    </>
  )
}

export default Layout