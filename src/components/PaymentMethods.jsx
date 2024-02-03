import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS_IMG_API } from "../utils/constants";
import { addOrder } from "../utils/orderSlice";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
    const dispatch = useDispatch();
    const activeUserId = useSelector((store) => store.user.activeUser.id);
    const cartItemsList = useSelector((store) => store.cart.cartItems);
    const cartItemsCount = useSelector((store) => store.cart.countOfAllCartItems);
    const navigate = useNavigate();

    const orders = useSelector((store) => store.order.allOrders).filter(item => item.userId === activeUserId)[0].items;

    // multiple cart items can be inside one order.
    const order = {};
    let items = [];
    order.userId = activeUserId;
    order.items = items;

    for(let i=0; i<cartItemsList.length; i++) {
        items[i] = {};
        items[i].id = cartItemsList[i].card.info.id;
        items[i].imageUrl = MENU_ITEMS_IMG_API + cartItemsList[i].card.info.imageId;
        // items.restaurantName = enter restaurant name
        items[i].name = cartItemsList[i].card.info.name;
        items[i].price = cartItemsList[i].card.info.price/100 * cartItemsCount[i];
        items[i].count = cartItemsCount[i];
    }
    console.log(order); 

    const handlePayment = () => {
        // if (payment success){
            // console.log(cartItems);
            dispatch(addOrder(order));
            console.log(orders);
            navigate("/my-account");
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