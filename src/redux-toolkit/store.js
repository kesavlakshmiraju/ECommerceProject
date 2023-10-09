import { configureStore } from "@reduxjs/toolkit";
import { logger } from 'redux-logger'
import userSlice from "./user/userSlice";
import cartToggleSlice from "./cart/cartToggleSlice";
import addToCartSlice from "./cart/addToCartSlice";
import productSlice from "./products/productSlice";

const store = configureStore({
    reducer : {
        currentUser : userSlice.reducer,
        hidden : cartToggleSlice.reducer,
        addToCart : addToCartSlice.reducer,
        products : productSlice.reducer,
    },
    middleware : [logger]
})

export default store;