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
        //2 ways : if the user adds in my-account section, or if the user updates in the checkout section
        addAddress: (state, action) => {
            state.allAddresses.push(action.payload);
        },
        // removeAddress: (state, action) => {
        //     //match the address id & remove that.
        //     // state.allAddresses.filter(item => item.id !== action.payload);
        // }
    }
});

export const {addAddress} = addressSlice.actions;
export default addressSlice.reducer;