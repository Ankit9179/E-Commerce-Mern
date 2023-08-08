import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className='nav-container'>
                <div className='content'>
                    <div className='logo'>E-Commerce</div>
                    <div className='cart'> cart <p>0</p></div>
                </div>
            </div>
        </>
    )
}

export default NavBar