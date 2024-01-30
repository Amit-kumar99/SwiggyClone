import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
    name: "address",
    initialState: {
        allAddresses: [
            {
                userId: 1,
                id: 11,
                door: "78-D",
                landmark: "John Street"
                // state: "Hyderabad",
                // pincode: 570112,
            },
        ],
    },
    reducers: {
        addAddress: (state, action) => {
            state.allAddresses.push(action.payload);
        },
        removeAddress: (state, action) => {
            // below doesn't work properly
            // state.allAddresses = state.allAddresses.filter(item => item.id !== action.payload);
        }
    }
});

export const {addAddress, removeAddress} = addressSlice.actions;
export default addressSlice.reducer;