import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'currentUser',
    initialState : { currentUser : null },
    reducers : {
        setCurrentUser(state , action ){
            state.currentUser = action.payload
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;