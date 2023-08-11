import React from 'react'
import './CartPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../feature/cartSlice'  // remove action  from redux state



const CartPage = () => {
  const carts = useSelector((state) => state.cartItem) //get all items from your global state 
  const dispatch = useDispatch()
  //hsndle remove items frome your cart
  const handleRemove = (id) => {
    dispatch(removeItem(id)) //send item id for redux state
  }
  return (
    <>
      <div className="main-div">
        <h1 className='text-center'>Your Items</h1>
        {
          carts.map((item, index) => (
            <div className='cart-container' key={index}>
              <div className="cart-item">
                <img src={item.image} alt="img" />
                <h4>{item.title}</h4>
                <h2>$ {item.price}</h2>
                <button type="button" className="btn btn-danger" onClick={() => handleRemove(item.id)}>Rmove</button>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default CartPage