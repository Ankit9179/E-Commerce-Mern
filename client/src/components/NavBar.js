import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../feature/cartSlice'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {cart,totalQuantity} = useSelector((state)=>state.cartItem) // cart item objects number from redux
    useEffect(()=>{
     dispatch(getCartTotal()) 
    },[cart])
    return (
        <>
                <div className='content bg-black flex justify-between p-5 fixed top-0 w-full'>
                    <div className='text-white text-2xl'>E-Commerce</div>
                    <div className='text-white text-2xl cursor-pointer ' onClick={()=>navigate("/")}>Products</div>
                    <div onClick={()=>navigate("/product-cart")} className='flex cursor-pointer hover:scale-90'>
                      <div className='text-white text-3xl '> <AiOutlineShoppingCart /> </div>
                      <p className='text-red-500 mt-[-9px]'>{totalQuantity}</p>
                    </div>
                </div>
        </>
    )
}

export default NavBar



/*

import React from 'react'
// import './NavBar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
    const item = useSelector((state)=>state.cartItem) // cart item objects number from redux 
    const navigate = useNavigate()
    return (
        <>
                <div className='content bg-black flex justify-between p-5 fixed top-0 w-full'>
                    <div className='text-white text-2xl '>E-Commerce</div>
                    <div onClick={()=>navigate("/product-cart")} className='flex cursor-pointer hover:scale-90'>
                      <div className='text-white text-2xl '> cart </div>
                      <p className='text-red-500'>{item.length}</p>
                    </div>
                </div>
        </>
    )
}

export default NavBar

*/