import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS_IMG_API } from "../utils/constants";

const PaymentMethods = () => {
    const dispatch = useDispatch();
    const userId = useSelector((store) => store.user.activeUser.id);
    const cartItemsList = useSelector((store) => store.cart.cartItems);
    const cartItemsCount = useSelector((store) => store.cart.countOfAllCartItems);
    console.log(cartItemsList[0]);
    // multiple cart items are inside one order, or multiple items are each assigned a separate order Id ???
    const order = [];
    let cartItem = {};
    for(let i=0; i<cartItemsList.length; i++) {
        cartItem.count = cartItemsCount[i];
        cartItem.price = cartItemsList[i].card.info.price/100 * cartItemsCount[i];
        cartItem.name = cartItemsList[i].card.info.name;
        // cartItem.restaurantName = enter restaurant name
        cartItem.imageUrl = MENU_ITEMS_IMG_API + cartItemsList[i].card.info.imageId;
        cartItem.id = cartItemsList[i].card.info.id;
        cartItem.userId = userId;
        order.push(cartItem);
        cartItem = {};
    }
    console.log("order:", order); 

    const handlePayment = () => {
        // if (payment success){
            // console.log(cartItems);
            dispatch(addOrder(order));
        // }
    }

    return (
        <div className="mt-5 ml-10 w-8/12">
            <h1 className="font-semibold text-lg mb-4">Payment Methods</h1>
            <button 
                className="bg-lime-600 text-white py-1 px-2 w-1/12"
                onClick={handlePayment}>PAY
            </button>
        </div>
    )
}

export default PaymentMethods;