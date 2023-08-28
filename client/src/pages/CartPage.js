import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal,removeItem ,increaseItem, decreaseItem,addItemLocalStotage} from '../feature/cartSlice'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate() // for navigation
  //get all items from your global state  => your cart
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cartItem)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
    dispatch(addItemLocalStotage())
    
  }, [cart])


  //hsndle remove items frome your cart
  const handleRemove = (id) => {
    dispatch(removeItem(id)) //send item id for redux state
  }

  //check user for payment
  const chackUser = () =>{
   const user = JSON.parse(localStorage.getItem("user")) //get user from localstorage
   if(user){
    navigate("/payment")
   }else{
    navigate("/sign-in")
   }
  }
  const handleDcrease =(item) =>{
    if(item.quantity == 1){
      dispatch(removeItem(item.id))
    }else{
      dispatch(decreaseItem(item.id))
    }
  }
  return (
    <>
      <div className="mt-36">
        {
          cart.map((item, index) => (
            <div className='cart-container' key={index}>
              <div className="flex justify-between items-center h-28 m-5 shadow-lg shadow-gray-200/50 p-2 rounded-md ">
                <img className='w-20 overflow-hidden p-2' src={item.image} alt="img" />
                <h4>{item.title}</h4>
                <h6 className='mb-2 text-2xl font-bold'>$ {item.price}</h6>
                <div className='space-x-2 text-2xl'>
                  <span className='cursor-pointer' onClick={() => dispatch(increaseItem(item.id))}>+</span>
                  <b>{item.quantity}</b>
                  <span className='cursor-pointer' onClick={()=>handleDcrease(item)}>-</span>
                </div>
                <button type="button" className="bg-orange-500 text-white px-3 py-2 rounded-lg" onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        }

        <div className='mb-5'>
          <h3 className='text-end mr-10 font-bold text-2xl '>TotalQuantity - {totalQuantity}</h3>
          <h3 className='text-end mr-10 font-bold text-2xl '>TotalPrice : $ {totalPrice}</h3>
          <button onClick={chackUser} className='bg-green-600 text-white p-2 rounded-md ml-96 '>Payment Page</button>
        </div>
      </div>
    </>
  )
}

export default CartPage

