import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import addressReducer from "./addressSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        address: addressReducer,
    }
});

export default store;