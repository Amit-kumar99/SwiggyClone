import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        countOfAllCartItems: [],
    },
    reducers: {
        addItems: (state, action) => {
            const index = state.cartItems.findIndex(item => item.card.info.id === action.payload.card.info.id);
            if(index !== -1){
                state.countOfAllCartItems[index]++;
            }
            else{
                state.cartItems.push(action.payload);
                state.countOfAllCartItems.push(1);
            }
        },
        removeItems: (state, action) => {
            const index = state.cartItems.findIndex(item => item.card.info.id === action.payload.card.info.id);
            if (index !== -1) {
                if (state.countOfAllCartItems[index] > 1) {
                    state.countOfAllCartItems[index]--;
                } 
                else {
                    state.cartItems.splice(index, 1);
                    state.countOfAllCartItems.splice(index, 1);
                }
            }    
        },
    }
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;