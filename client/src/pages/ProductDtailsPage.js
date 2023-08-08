import React from 'react'
import './ProductDtailsPage.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductDtailsPage = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const data = location.state.product //receive single product data 

  return (
    <>
      <div className='single-page-container'>
        <div className="single-page-content">
          <div className='single-page-box'>
            <div className="left">
              <img src={data.image} alt="img" />
            </div>
            <div className="right">
              <h4>{data.title}</h4>
              <p>{data.category}</p>
              <p>★ {data.rating.rate}</p>
              <h3>$ {data.price}</h3>
              <div className='btn'>
                <button className='btn btn-primary mt-3 mx-2' onClick={() => navigation('/product-cart',{state:{data:data}})}>Add To Cart</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={() => navigation('/')}>Go Back</button>
              </div>
            </div>
          </div>
          <p className='mt-5'>{data.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDtailsPage