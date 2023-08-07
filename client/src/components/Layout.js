import React from 'react'
import ProductsListingPage from '../pages/ProductsListingPage'
import {Route,Routes} from 'react-router-dom'
import ProductDtailsPage from "../pages/ProductDtailsPage"


const Layout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<ProductsListingPage />} />
      <Route path='/product-detail' element={<ProductDtailsPage />} />
    </Routes>
    </>
  )
}

export default Layout