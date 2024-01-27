import { useSelector } from "react-redux";
import { activeOrders } from "../utils/activeOrders";

const Orders = () => {
    const activeUserId = useSelector((store) => store.user.activeUser.id);
    const orders = activeOrders.filter(item => item.userId === activeUserId);
    console.log(orders);
    return (
        <div className="my-3 mx-8 text-gray-700">
            <h1 className="font-semibold text-xl">Orders</h1>
            {orders.map(item => (
                <div className="mt-3 flex" key={item.orderId}>
                    <div className="mr-5">
                        <img className="w-40" src={item.imageUrl} alt="menuItem-img"/>                  
                    </div>
                    <div>
                        <p className="font-semibold">{item.restaurantName}</p>
                        <p>{item.itemName}</p>
                        <p>{item.price}</p> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Orders;