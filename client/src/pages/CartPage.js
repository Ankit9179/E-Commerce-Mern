import React from 'react'
import './CartPage.css'
import {useLocation} from 'react-router-dom'

const CartPage = () => {
  const location = useLocation()
  const itemInfo = location.state.data
  console.log(itemInfo)
  return (
    <div className='tb'>CartPage</div>
  )
}

export default CartPage