import {configureStore} from '@reduxjs/toolkit'


import authReducer from "./AuthSlice"
import postReducer from "./PostSlice"

 export const store = configureStore({
    reducer : {
        Auth : authReducer,
        Post : postReducer,
    }
})