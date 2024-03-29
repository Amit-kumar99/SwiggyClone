import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS_IMG_API } from "../../../utils/constants";
import { addOrder } from "../../../utils/orderSlice";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
    const dispatch = useDispatch();
    const activeUserId = useSelector((store) => store.user.activeUser.id);
    const cartItemsList = useSelector((store) => store.cart.cartItems);
    const cartItemsCount = useSelector((store) => store.cart.countOfAllCartItems);
    const navigate = useNavigate();

    // multiple cart items can be inside one order.
    const order = {};
    let items = [];
    order.userId = activeUserId;
    order.items = items;
    let totalPrice = 0;
    for(let i=0; i<cartItemsList.length; i++) {
        items[i] = {};
        items[i].id = cartItemsList[i].card.info.id;
        items[i].imageUrl = MENU_ITEMS_IMG_API + cartItemsList[i].card.info.imageId;
        // items.restaurantName = enter restaurant name
        items[i].name = cartItemsList[i].card.info.name;
        items[i].price = cartItemsList[i].card.info.price/100 * cartItemsCount[i];
        totalPrice += items[i].price;
        items[i].count = cartItemsCount[i];
    }

    const handlePayment = () => {
        // if (payment success){
            // console.log(cartItems);
            dispatch(addOrder(order));
            navigate("/my-account");
        // }
    }

    return (
        <div className="bg-gray-100">
            <div className="border pt-5 w-6/12 mx-auto">
                <header className="pl-4 pb-4 border-b border-gray-200">
                    <h1 className="font-semibold text-lg">Payment Options</h1>
                    <div>
                        <span className="text-sm text-gray-900 font-thin">
                            <span>{cartItemsCount} item</span>
                            <span className="px-1">.</span>
                            <span>Total: ₹{totalPrice}</span>
                        </span>
                    </div>
                </header>
                <div className="bg-gray-200 h-[450px] overflow-y-scroll px-5 py-10">
                    <div className="my-5">
                        <h1 className="font-semibold mb-3">Pay by any UPI App</h1>
                        <div className="bg-white rounded-2xl py-5 px-5">
                            <div className="flex">
                                <i className="fa-solid fa-plus fa-sm border border-gray-200 rounded-md px-3 pt-3 mr-2" style={{color: "#e0400b"}}/>
                                <h2 className="font-bold text-orange-600">Add New UPI ID</h2>
                            </div>
                            <p className="text-sm text-gray-500">You need to have a registered UPI ID</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="font-semibold mb-3">Credit & Debit Cards</h1>
                        <div className="bg-white rounded-2xl py-5 px-5">
                            <div className="flex">
                                <i className="fa-solid fa-plus fa-sm border border-gray-200 rounded-md px-3 pt-3 mr-2" style={{color: "#e0400b"}}/>
                                <h2 className="font-bold text-orange-600">Add New Card</h2>
                            </div>
                            <p className="text-sm text-gray-500">Save and Pay via Cards</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mt-5 mb-3">More Payment Options</h1>
                        <div className="bg-white rounded-2xl py-5 px-5">
                            <div className="border-b mb-3">
                                <div className="flex mb-3">
                                <i className="fa-solid fa-wallet fa-xl border border-gray-200 rounded-md px-2 pt-5 mr-2" style={{color: "#9e9e9e"}}/>
                                    <div>
                                        <h2>Wallets</h2>
                                        <p className="text-sm text-gray-500">Paytm, Phonepe, Amazon Pay & more</p>      
                                    </div>                        
                                </div>
                            </div>     
                            <div>
                                <div className="flex">
                                    <i className="fa-solid fa-money-bill fa-xl border border-gray-200 rounded-md px-2 pt-5 mr-2" style={{color: "#9e9e9e"}}/>
                                    <div>
                                        <h2>Pay On Delivery</h2>
                                        <p className="text-sm text-gray-500">Pay in cash or pay online</p>      
                                    </div>                        
                                </div>
                            </div>                             
                        </div>
                    </div>
                </div>
                <button 
                    className="bg-lime-600 text-white py-1 px-2 w-1/12"
                    onClick={handlePayment}>PAY
                </button>
            </div>
        </div>
    )
}

export default PaymentMethods;