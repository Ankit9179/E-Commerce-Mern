import React from 'react'

import {useSelector} from 'react-redux'

const Payment = () => {
  const {totalPrice} = useSelector((state)=>state.cartItem)//get totalprice
  const price = Math.floor( totalPrice)//
  //handle payment
  const handlePayment = (data) => {
    console.log(data)
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