import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./slices";



export const store = configureStore({
    reducer: RootReducer
})