import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../feature/cartSlice'
import { removeItem } from '../feature/cartSlice'  // remove action  from redux state
import { increaseItem, decreaseItem } from '../feature/cartSlice'

const CartPage = () => {
  //get all items from your global state  => your cart
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cartItem)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])

  //hsndle remove items frome your cart
  const handleRemove = (id) => {
    dispatch(removeItem(id)) //send item id for redux state
  }
  return (
    <>
      <div className="mt-36">
        {
          cart.map((item, index) => (
            <div className='cart-container' key={index}>
              <div className="flex justify-between items-center h-28 m-5 shadow-lg shadow-gray-200/50 p-2 rounded-md ">
                <img className='w-20 overflow-hidden' src={item.image} alt="img" />
                <h4>{item.title}</h4>
                <h6 className='mb-2 text-2xl font-bold'>$ {item.price}</h6>
                <div className='space-x-2 text-2xl'>
                  <span className='cursor-pointer' onClick={() => dispatch(increaseItem(item.id))}>+</span>
                  <b>{item.quantity}</b>
                  <span className='cursor-pointer' onClick={() => dispatch(decreaseItem(item.id))}>-</span>
                </div>
                <button type="button" className="bg-orange-500 text-white px-3 py-2 rounded-lg" onClick={() => handleRemove(item.id)}>Rmove</button>
              </div>
            </div>
          ))
        }

        <div className='mb-5'>
          <h3 className='text-end mr-10 font-bold text-2xl '>TotelQuantity - {totalQuantity}</h3>
          <h3 className='text-end mr-10 font-bold text-2xl '>TotelPrice : $ {totalPrice}</h3>
        </div>
      </div>
    </>
  )
}

export default CartPage

