import React from 'react' 
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const params = searchParams.get("reference")
    const products = localStorage.getItem("cart")
    const user = localStorage.getItem("user")

    console.log(params)
    console.log(JSON.parse(user))
    console.log(JSON.parse(products))
    
    return (
    <>
    <div className='main h-screen w-full flex justify-center align-middle'>
        <div className='my-auto  flex-col text-center align-middle'>
            <h1 className='text-4xl uppercase font-mono font-bold'>Order Successfull</h1>
            <p className='mx-auto'>reference no : {params} </p>
        </div>
    </div>
    </>
  )
}

export default PaymentSuccess