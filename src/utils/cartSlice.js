import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        countOfAllCartItems: [],
    },
    reducers: {
        addItems: (state, action) => {
            const index = state.cartItems.indexOf(action.payload);
            if(state.cartItems.includes(action.payload)){
                state.countOfAllCartItems[index]++;
            }
            else{
                state.cartItems.push(action.payload);
                state.countOfAllCartItems[index] = 1;
            }
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