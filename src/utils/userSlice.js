import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        usersList: [
            {
                phoneNumber: "9950513488",
                name: "Tom Cruise",
                email: "tom@gmail.com",
                otp: "1234",
            },
            {
                phoneNumber: "9850576499",
                name: "John Cena",
                email: "john@gmail.com",
                otp: "2345",
            }
        ],
        activeUser: {},
        isLoggedIn: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.usersList.push(action.payload);
        },
        otpLogged: (state, action) => {
            // console.log(typeof action.payload);
            if(state.usersList.findIndex(item => action.payload === item.otp) !== -1){
                state.isLoggedIn = true;
            }
            else{
                alert("Invalid OTP. Please try again");
            }
        },
        addActiveUser: (state, action) => {
            state.activeUser = action.payload;
        },
        removeActiveUser: (state) => {
            state.activeUser = {};
            // make a logout btn on hover in navbar
            state.isLoggedIn = false;
        },
    }
});

export const {usersList, otpLogged} = userSlice.actions;
export default userSlice.reducer;

