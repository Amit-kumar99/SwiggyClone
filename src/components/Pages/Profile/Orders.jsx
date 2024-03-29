import { useSelector } from "react-redux";

const Orders = () => {
    const activeUserId = useSelector((store) => store.user.activeUser.id);
    const allOrders = useSelector((store) => store.order.allOrders);
    const ordersList1 = allOrders.filter(item => item.userId === activeUserId);
    const matchingItemsList = ordersList1.map((item) => item.items);
    const mergedArray = matchingItemsList.reduce((result, element) => [...result, ...element], []);
    // console.log(mergedArray);
    return (
        <div className="my-3 mx-8 text-gray-700">
            <h1 className="font-semibold text-xl">Orders</h1>
            {mergedArray.map(item => (
                <div className="mt-3 flex" key={item.id}>
                    <div className="mr-5">
                        <img className="w-40" src={item.imageUrl} alt="menuItem-img"/>                  
                    </div>
                    <div>
                        <p className="font-semibold">{item.restaurantName}</p> 
                        <p>{item.name}</p>
                        <p>{item.price}</p> 
                        <p>Quantity: {item.count}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Orders;