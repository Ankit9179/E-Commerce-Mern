import React from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    const item = useSelector((state)=>state.cartItem) // cart item objects number from redux 
    const navigate = useNavigate()
    return (
        <>
            <div className='nav-container'>
                <div className='content'>
                    <div className='logo'>E-Commerce</div>
                    <div className='cart' onClick={()=>navigate("/product-cart")}> cart <p>{item.length}</p></div>
                </div>
            </div>
        </>
    )
}

export default NavBar