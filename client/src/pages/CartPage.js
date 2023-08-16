import React from 'react'
// import './CartPage.css'
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
      <div className="mt-36">
        <h1 className='text-center font-bold text-2xl'>Your Items</h1>
        {
          cartIAllItems.map((item, index) => (
            <div className='cart-container' key={index}>
              <div className="flex justify-between items-center h-28 m-5 shadow-lg shadow-gray-200/50 p-2 rounded-md ">
                <img className='w-20 overflow-hidden' src={item.image} alt="img" />
                <h4>{item.title}</h4>
                <h6 className='mb-2 text-2xl font-bold'>$ {item.price}</h6>
                <button type="button" className="bg-orange-500 text-white px-3 py-2 rounded-lg" onClick={() => handleRemove(item.id)}>Rmove</button>
              </div>
            </div>
          ))
        }
        <h3 className='text-end mr-10 font-bold text-2xl '>Totel Price : $ {total}</h3>
      </div>
    </>
  )
}

export default CartPage