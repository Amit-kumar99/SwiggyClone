import { useSelector } from "react-redux";
// import { orders } from "../utils/orders";

const Orders = () => {
    const activeUserId = useSelector((store) => store.user.activeUser.id);
    const allOrders = useSelector((store) => store.order.allOrders);
    const ordersList = allOrders.filter(item => item.userId === activeUserId)[0].items;
    // console.log(ordersList);
    return (
        <div className="my-3 mx-8 text-gray-700">
            <h1 className="font-semibold text-xl">Orders</h1>
            {ordersList.map(item => (
                <div className="mt-3 flex" key={item.id}>
                    <div className="mr-5">
                        <img className="w-40" src={item.imageUrl} alt="menuItem-img"/>                  
                    </div>
                    <div>
                        <p className="font-semibold">{item.restaurantName}</p> 
                        <p>{item.name}</p>
                        <p>{item.price}</p> 
                        <p>{item.count}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Orders;