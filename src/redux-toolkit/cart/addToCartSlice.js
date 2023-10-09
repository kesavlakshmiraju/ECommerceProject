import { createSlice } from "@reduxjs/toolkit";
import { AddItemsToCart, ReduceQantity } from "./CartUtils";

const addToCartSlice = createSlice({
    name : 'cartItems',
    initialState : { cartItems : [] },
    reducers : {
        addToCart(state , action){
            state.cartItems = AddItemsToCart(state.cartItems , action.payload)
        },
        reduceQuantity(state , action){
            state.cartItems = ReduceQantity(state.cartItems , action.payload)
        },
        removeFromCart(state , action) {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id)
        },  
    }
})

export const addToCartAction = addToCartSlice.actions 

export default addToCartSlice;