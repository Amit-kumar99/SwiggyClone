import { useState } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import DeliveryAddress from "./DeliveryAddress";
import { Link } from "react-router-dom";

const Checkout = () => {
    const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
    const [deliveryAddressSelected, setDeliveryAddressSelected] = useState(false);
    // const color = !deliveryAddressSelected ? "gray" : "black";

    return (
        <div className="w-8/12">
            {!isLoggedIn && <Account/>}
            
            {/* <DeliveryAddress color={color}  */}
            <DeliveryAddress isLoggedIn={isLoggedIn} deliveryAddressSelected={deliveryAddressSelected} setDeliveryAddressSelected={setDeliveryAddressSelected}/>

            {/* below payments stuff */}
            <div className="border bg-white my-5 py-3 pl-5">
                {/* header */}
                <div>
                    {/* see from portfolio, how to make color dynamic, ternary doesn't work */}
                    <h3 className={"text-lg font-semibold " + (deliveryAddressSelected ? "text-black-400" : "text-gray-400")}>Payment</h3>
                </div>
                {/* body */}
                {(isLoggedIn && deliveryAddressSelected) && 
                (<div>
                    <Link 
                        className="border border-green-600 bg-green-600 text-white font-semibold text-md p-3 w-11/12"
                        to="/payment">
                            Proceed To Pay
                    </Link>
                </div>)}
            </div>

        </div>
    )
}

export default Checkout;
                