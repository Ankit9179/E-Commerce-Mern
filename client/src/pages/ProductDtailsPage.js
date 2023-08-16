import React from 'react'
// import './ProductDtailsPage.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { addItem } from '../feature/cartSlice'
import {useDispatch} from 'react-redux'

const ProductDtailsPage = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const data = location.state.product //receive single product data 
  const dispatch = useDispatch() //create variable with useDispatch functionality

  //Add item to cart
  const handleAddItem = (item) =>{
    dispatch(addItem(item))
    navigation('/product-cart')
  }

  return (
    <>
      <div className='w-full h-screen mb-28 '>
        <div className="pt-28 w-[70%] m-auto  ">
          <div className='flex justify-between align-middle p-10 rounded-lg mt-7 shadow-md shadow-indigo-500/40'>
            <div className="left">
              <img className='w-[150px]' src={data.image} alt="img" />
            </div>
            <div className="space-y-4 text-1xl">
              <h4 >{data.title}</h4>
              <p>{data.category}</p>
              <p>★ {data.rating.rate}</p>
              <h3 className='text-2xl'>$ {data.price}</h3>
              <div className='mt-32 flex justify-between'>
                <button className='bg-green-500 text-white px-3 py-2 rounded-lg' onClick={()=>handleAddItem(data)}>Add To Cart</button>
                <button className='bg-red-500 text-white px-3 py-2 rounded-lg' onClick={() => navigation('/')}>Go Back</button>
              </div>
            </div>
          </div>
          <p className='mt-10'>{data.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDtailsPage