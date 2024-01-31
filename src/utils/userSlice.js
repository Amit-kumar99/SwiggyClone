import { createSlice } from "@reduxjs/toolkit";
// import { usersList } from "./usersList";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        usersList: [
            {
                id: 1,
                phoneNumber: "9950513488",
                name: "Tom Cruise",
                email: "tom@gmail.com",
                otp: "1234",
            },
            {
                id: 2,
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
            if(state.usersList.findIndex(item => action.payload.otpRef.current.value === item.otp) !== -1){
                state.isLoggedIn = true;
                const activeIndex = state.usersList.findIndex(item => item.phoneNumber === action.payload.phoneNumberRef.current.value);
                state.activeUser = state.usersList[activeIndex];
                //navigate
            }
            else{
                alert("Invalid OTP. Please try again");
            }
        },
        // make a logout btn on hover in navbar
        removeActiveUser: (state) => {
            state.activeUser = {};
            state.isLoggedIn = false;
        },
    }
});

export const {addUser, otpLogged, removeActiveUser} = userSlice.actions;
export default userSlice.reducer;

