import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthInitialState, IAuthResponse } from "./types";

let initialState: IAuthInitialState = {
    value: {
        userid:null,
        fullname:null,
        email:null,
        role:null,
        tokens:{
            access_token:null,
            refresh_token:null
        }
    }
}

export const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
        authAction:(state, action: PayloadAction<IAuthResponse>)=>{
            state.value = action.payload
        }
    }
})


export const {authAction} = AuthSlice.actions;
export default AuthSlice.reducer;