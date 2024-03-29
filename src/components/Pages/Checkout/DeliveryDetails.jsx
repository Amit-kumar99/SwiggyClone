import { useState } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import DeliveryAddress from "./DeliveryAddress";
import { Link } from "react-router-dom";

const DeliveryDetails = () => {
    const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
    const [deliveryAddressSelected, setDeliveryAddressSelected] = useState(false);
    // const color = !deliveryAddressSelected ? "gray" : "black";

    return (
        <div className="w-7/12 ml-13">
            {!isLoggedIn && <Account/>}
            
            {/* <DeliveryAddress color={color}  */}
            <DeliveryAddress 
                isLoggedIn={isLoggedIn} 
                deliveryAddressSelected={deliveryAddressSelected} 
                setDeliveryAddressSelected={setDeliveryAddressSelected}/>

            {/* below payments stuff */}
            <div className="w-full border bg-white my-5 py-3 pl-5">
                {/* header */}
                <div>
                    {/* see from portfolio, how to make color dynamic, ternary doesn't work */}
                    <h3 className={"text-lg font-semibold " + (deliveryAddressSelected ? "text-black-400" : "text-gray-400")}>
                        Payment
                    </h3>
                </div>
                {/* body */}
                {(isLoggedIn && deliveryAddressSelected) && 
                (<div className="w-11/12 bg-green-600 text-white font-semibold text-md p-3 mt-5">
                    <Link to="/payment">
                        <div className="w-full border">PROCEED TO PAY</div>                            
                    </Link>
                </div>)}
            </div>
        </div>
    )
}

export default DeliveryDetails;
                