import { createSlice } from "@reduxjs/toolkit";

const initialState= []

const cartSlice = createSlice({
    name : "cart", 
    initialState,
    reducers : {
        addToCart : (state, action)=>{
            state.push(action.payload)
        },
        removeFromCart : (state, action)=>{
            // console.log("df")
           return state = state.filter((st)=> st.id != action.payload)
        }
    }
})

export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions