import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./auth"

export const RootReducer =  combineReducers({
    auth: authReducer
});