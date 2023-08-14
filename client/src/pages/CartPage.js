import React from 'react'
import './CartPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../feature/cartSlice'  // remove action  from redux state



const CartPage = () => {
  const cartIAllItems = useSelector((state) => state.cartItem) //get all items from your global state  => your cart
  const dispatch = useDispatch()


  //hsndle remove items frome your cart
  const handleRemove = (id) => {
    dispatch(removeItem(id)) //send item id for redux state
  }

  // totle item in your cart
  let total = cartIAllItems.reduce((total, item) => total + item.price, 0)
  return (
    <>
      <div className="main-div">
        <h1 className='text-center'>Your Items</h1>
        {
          cartIAllItems.map((item, index) => (
            <div className='cart-container' key={index}>
              <div className="cart-item">
                <img src={item.image} alt="img" />
                <h4>{item.title}</h4>
                <h6 className='mb-2'>$ {item.price}</h6>
                <button type="button" className="btn btn-danger" onClick={() => handleRemove(item.id)}>Rmove</button>
              </div>
            </div>
          ))
        }
        <h3 className='text-end m-2'>Totel Price : $ {total}</h3>
      </div>

    </>
  )
}

export default CartPage