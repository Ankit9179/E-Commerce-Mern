import {createSlice} from '@reduxjs/toolkit'
import data from '../ItemData'
//get data from localstorage
const getdata = () =>{
    let localStorageData = localStorage.getItem("cart")
    if(localStorageData == []){
        return []
    }else{
        return JSON.parse(localStorageData)
    }
}
const initialState = {
    cart:getdata(),
    allData:data,
    totalQuantity:0,
    totalPrice:0
}
const cartSlice = createSlice({
    name:"cartItem",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            let find = state.cart.findIndex((item)=>item.id === action.payload.id) //return index to find variable
            if(find >= 0){
                state.cart[find].quantity += 1 // increase quantity 
            }else{
                state.cart.push(action.payload) //add item in cart
            }
        },
        getCartTotal:(state)=>{
            let {totalQuantity,totalPrice} = state.cart.reduce(
                (cartTotal,cItem)=>{
                    const{price,quantity} = cItem // get p , q in a item like 0th position 
                    const itemTotal = price*quantity //new variable => like $29*3
                    cartTotal.totalPrice += itemTotal //price
                    cartTotal.totalQuantity += quantity //quantity
                    return cartTotal
                },
                {
                    totalPrice:0,
                    totalQuantity:0
                }
            )
            state.totalPrice = totalPrice.toFixed(2) //push 
            state.totalQuantity = totalQuantity //push
        },
        removeItem:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload) //remove item in cart
        },
        increaseItem:(state,action)=>{
            state.cart =state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item,quantity:item.quantity +1}
                }
                return item
            })
        },
        decreaseItem:(state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item,quantity:item.quantity -1}
                }
                return item
            })
        },
        // add data in localstorage
        addItemLocalStotage:(state)=>{
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
    }
})
export const {addItem,getCartTotal,removeItem,increaseItem,decreaseItem,addItemLocalStotage} = cartSlice.actions
export default cartSlice.reducer

