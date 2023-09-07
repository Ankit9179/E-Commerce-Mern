import React from 'react'
import axios from 'axios'

import {useSelector} from 'react-redux'

const Payment = () => {
  const {totalPrice} = useSelector((state)=>state.cartItem)//get totalprice
  const price = Math.floor( totalPrice)//
  //handle payment
  const handlePayment = async (price) => {

    //firs get id  from backend
    const {data:{key}} = await axios.get("https://e-commerce-mern-server.onrender.com/api/v1/e-commerce/key-id")
      //generate order
      const {data:{order}} = await axios.post("https://e-commerce-mern-server.onrender.com/api/v1/e-commerce/order/check",{price})

      //razorpay checkout handlerfun
       const options = {
        key:key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Ankit Rahi",
        description: "Test Transaction By Ankit",
        image: "https://avatars.githubusercontent.com/u/120669540?v=4",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://e-commerce-mern-server.onrender.com/api/v1/e-commerce/order/payment-verification", // if transaction successful. its go to backend with (rp id ,ro id, r signature) key and value
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
    <div className='bg-green-700 text-white min-h-screen flex flex-col justify-center items-center'>

<div className='bg-red-400 p-3 gap-3 mb-5'>
  <p className='text-white text-center my-2'>Payment Page</p>
  <h1 className='text-black text-center mb-2'>Amount: {price}</h1>
  <button onClick={() => handlePayment(price)} className='bg-red-600 p-2 rounded-md text-white w-full'>Pay Now</button>
</div>

</div>

    </>
  )
}

export default Payment