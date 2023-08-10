import {createSlice} from '@reduxjs/toolkit'

const initialState = {value:[{name:"ankit"}]}

const cartSlice = createSlice({
    name:"cartItem",
    initialState,
    reducers:{
        showCart:(state)=>{
            state.value = state.value
        }
    }
})

export const {showCart} = cartSlice.actions
export default cartSlice.reducer