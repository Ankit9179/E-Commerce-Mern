import React from 'react'
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
      <div className='w-full h-full mb-10 sm:mb-0'>
  <div className="pt-10 sm:pt-28 w-full sm:w-[70%] m-auto">
    <div className='flex flex-col sm:flex-row justify-between align-middle p-4 sm:p-10 rounded-lg mt-4 sm:mt-7 shadow-md shadow-indigo-500/40'>
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <img className='w-[150px] sm:w-auto' src={data.image} alt="img" />
      </div>
      <div className="space-y-4 text-1xl">
        <h4>{data.title}</h4>
        <p>{data.category}</p>
        <p>★ {data.rating.rate}</p>
        <h3 className='text-2xl'>$ {data.price}</h3>
        <div className='mt-4 sm:mt-32 flex flex-col sm:flex-row justify-between'>
          <button className='bg-green-500 text-white px-3 py-2 rounded-lg mb-2 sm:mb-0' onClick={() => handleAddItem(data)}>Add To Cart</button>
          <button className='bg-red-500 text-white px-3 py-2 rounded-lg' onClick={() => navigation('/')}>Go Back</button>
        </div>
      </div>
    </div>
    <p className='mt-4 sm:mt-10 mb-6'>{data.description}</p>
  </div>
</div>

    </>
  )
}

export default ProductDtailsPage
