import { createSlice } from "@reduxjs/toolkit";

const cartToggleSlice = createSlice({
    name : 'hidden',
    initialState : { hidden : false },
    reducers : {
        toggleCart(state,action){
                 state.hidden = !state.hidden
        }
    }
})

export const cartToggleAction = cartToggleSlice.actions;

export default cartToggleSlice;