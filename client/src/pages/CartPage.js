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
  const checkUser = () =>{
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
      <div className="mt-28 sm:mt-36">
  {cart.map((item, index) => (
    <div className='cart-container' key={index}>
      <div className="flex flex-col sm:flex-row justify-between items-center m-2 sm:m-5 shadow-lg shadow-gray-200/50 p-2 rounded-md">
        <div className="flex items-center mb-2 sm:mb-0">
          <img className='w-16 sm:w-20 h-16 overflow-hidden p-2' src={item.image} alt="img" />
          <div className="ml-2">
            <h4>{item.title}</h4>
            <h6 className='text-base sm:text-2xl font-bold'>$ {item.price}</h6>
          </div>
        </div>
        <div className='flex items-center mt-2 sm:mt-0 space-x-2 text-lg sm:text-2xl'>
          <span className='cursor-pointer' onClick={() => dispatch(increaseItem(item.id))}>+</span>
          <b>{item.quantity}</b>
          <span className='cursor-pointer' onClick={() => handleDcrease(item)}>-</span>
        </div>
        <button type="button" className="bg-orange-500 text-white px-2 py-1 rounded-lg mt-2 sm:mt-0" onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </div>
  ))}

  <div className='mb-5 mt-4 sm:mt-0'>
    <h3 className='text-center sm:text-end mr-2 sm:mr-10 font-bold text-lg sm:text-2xl'>
      Total Quantity - {totalQuantity}
    </h3>
    <h3 className='text-center sm:text-end mr-2 sm:mr-10 font-bold text-lg sm:text-2xl'>
      Total Price: $ {totalPrice}
    </h3>
    <button onClick={checkUser} className='bg-green-600 text-white px-3 py-2 rounded-md mx-auto sm:ml-0 sm:mr-10 mt-2 sm:mt-0'>
      Payment Page
    </button>
  </div>
</div>

    </>
  )
}

export default CartPage

