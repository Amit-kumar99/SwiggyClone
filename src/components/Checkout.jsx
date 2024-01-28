// import { useState } from "react";
import { useSelector } from "react-redux";
// import Account from "./Account";
import DeliveryAddress from "./DeliveryAddress";
// import { Link } from "react-router-dom";
// import DeliveryAddress from "./DeliveryAddress";

const Checkout = () => {
    const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
    return (
        <div className="w-8/12 border">
            {/* below works, only signup / login logic not applied */}
            {/* {!isLoggedIn && <Account/>} */}
            
            {/* <DeliveryAddress isLoggedIn={isLoggedIn} color={color} address={address} setShowPaymentInfo={setShowPaymentInfo}/> */}
            <DeliveryAddress isLoggedIn={isLoggedIn}/>

        </div>
    )
}

export default Checkout;

    // const { address} = useContext(UserContext);  
    // const [showPaymentInfo, setShowPaymentInfo] = useState(false);
    // const [color, setColor] = useState("gray");

    // return (
        //         <div className="bg-white ml-5 py-2">
        //             {/* header */}
        //             <div>
        //                 {/* how to do setColor to black if not logged in. */}
        //                 <h3 className={"font-bold ml-5 text-" + color +"-400"}>Payment</h3>
        //             </div>
        //             {/* body */}
        //             {(isLoggedIn && showPaymentInfo) && 
        //             (<div className="">
        //                 <Link className="border border-green-600 bg-green-600 text-white font-semibold text-md m-2 p-1 ml-5 w-11/12"
        //                 to="/payment">
        //                     Proceed To Pay
        //                 </Link>
        //             </div>)}
        //         </div>