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
        // addressId : 11,
    },
    reducers: {
        addAddress: (state, action) => {
            state.allAddresses.push(action.payload);
            // const idObject = {id: state.addressId};
            // state.allAddresses.push(action.payload.userId, {...idObject}, action.payload.door, action.payload.landmark);
            // state.addressId += 1;
        },
        removeAddress: (state, action) => {
            // below doesn't work properly
            // state.allAddresses = state.allAddresses.filter(item => item.id !== action.payload);
        }
    }
});

export const {addAddress, removeAddress} = addressSlice.actions;
export default addressSlice.reducer;