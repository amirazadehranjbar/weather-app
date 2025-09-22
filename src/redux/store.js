import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "./weatherReducer.js";


const store = configureStore({
    reducer:{
        weatherReducer
    }
});

export default store;