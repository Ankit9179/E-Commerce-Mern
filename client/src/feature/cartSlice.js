import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name:"cartItem",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload ) //its return a new array  (recive item id )
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer