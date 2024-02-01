import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        allOrders: [
            [
                {
                    userId: 1,
                    id: 101,
                    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/89fccaa76f2f760e2742b9e53d32bb69",
                    restaurantName: "Behrouz Biryani",
                    itemName: "Zaikedaar Paneer Biryani",
                    price: "365",
                    count: 1,
                    // status: "pending / on the way",
                },
            ],
            [
                {
                    userId: 1,
                    id: 102,
                    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/89fccaa76f2f760e2742b9e53d32bb69",
                    restaurantName: "Behrouz Biryani",
                    itemName: "Zaikedaar Paneer Biryani",
                    price: "365",
                    count: 1,
                    // status: "delivered",
                },
            ],
            [
                {
                    userId: 2,
                    id: 102,
                    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/89fccaa76f2f760e2742b9e53d32bb69",
                    restaurantName: "Bakeria",
                    itemName: "Cake",
                    price: "150",
                    // status: "pending / on the way",
                }
            ],           
        ],
        // orderId: ,
    },
    reducers: {
        //as soon as the user pays, & the status of the order status is delivered, iuf order status is different, 
        //then show that status specifically in the Orders section
        addOrder: (state, action) => {
            state.allOrders.push(action.payload);
        },
    }
});

export const {addOrder} = orderSlice.actions;
export default orderSlice.reducer;