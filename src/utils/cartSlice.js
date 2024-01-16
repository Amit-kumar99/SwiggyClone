import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItems: (state) => {
            state.cartItems.pop();
        },
        clearCart: (state) => {
            state.cartItems.length  = 0;
        },
    }
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;