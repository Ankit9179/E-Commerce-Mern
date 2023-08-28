import React from 'react'
import axios from 'axios'

import {useSelector} from 'react-redux'

const Payment = () => {
  const {totalPrice} = useSelector((state)=>state.cartItem)//get totalprice
  const price = Math.floor( totalPrice)//
  //handle payment
  const handlePayment = async (price) => {

    //firs get id  from backend
    const {data:{key}} = await axios.get("http://localhost:8000/api/v1/e-commerce/key-id")
      //generate order
      const {data:{order}} = await axios.post("http://localhost:8000/api/v1/e-commerce/order/check",{price})

      //razorpay checkout handlerfun
       const options = {
        key:key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Ankit Rahi",
        description: "Test Transaction By Ankit",
        image: "https://avatars.githubusercontent.com/u/120669540?v=4",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:8000/api/v1/e-commerce/order/payment-verification", // if transaction successful. its go to backend with (rp id ,ro id, r signature) key and value
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#087BF7"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
   
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