import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import addressReducer from "./addressSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        address: addressReducer,
        order: orderReducer,
    }
});

export default store;