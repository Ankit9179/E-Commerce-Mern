import React from 'react'
import axios from 'axios'

import {useSelector} from 'react-redux'

const Payment = () => {
  const {totalPrice} = useSelector((state)=>state.cartItem)//get totalprice
  const price = Math.floor( totalPrice)//
  //handle payment
  const handlePayment = async (price) => {
    try {
      const {data} = await axios.post("http://localhost:8000/api/check",{price})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className='bg-green-700 text-white h-screen flex justify-center'>
      <div className='bg-red-400 h-36 p-3 gap-5 my-auto'>
        <p  className='text-white mb-2 my-auto'>payment page</p>
        <h1 className='text-black mb-3'>Amount : {price}</h1>
        <button onClick={()=>handlePayment(price)} className='bg-red-600 p-2 block rounded-md  text-white'>Pay Now</button>
      </div>
    </div>
    </>
  )
}

export default Payment