import { useState } from "react";
import { useSelector } from "react-redux";
import Orders from "./Orders";
import Addresses from "./Addresses";

const MyAccount = () => {
  //no. of orders that the user has placed even in the past has to be stored in the backend, check for swiggy, 
  //or it shows only curretn order?
    const activeUser = useSelector((store) => store.user.activeUser);
    const [bgColor1, setBgColor1] = useState("gray");
    const [bgColor2, setBgColor2] = useState("gray");
    const [showOrders, setShowOrders] = useState(false);
    const [showAddresses, setShowAddresses] = useState(false); 

  return (
    <div className="w-full bg-cyan-700">
      <div className="w-10/12 mx-auto text-white">
        <div className="flex pt-20 px-10 justify-between">
          <div> 
              <h2 className="font-bold text-3xl">{activeUser.name}</h2>
              <span>{activeUser.phoneNumber}<span className="mx-1">.</span>{activeUser.email}</span>
          </div>
          <div>
              <button className="border border-white m-2 p-3 font-semibold">EDIT PROFILE</button>
          </div>
        </div>
        <div className="flex bg-white my-5 border border-white">
          <div className="bg-slate-200 w-2/12 m-14 py-5">
            <div className={"ml-5 p-5 font-semibold text-gray-700 bg-" + bgColor1} 
              onClick={() => {
                setBgColor1("white");
                setBgColor2("gray");
                setShowOrders(true);
                setShowAddresses(false);
              }}>
                Orders
            </div>
            <div className={"ml-5 p-5 font-semibold text-gray-700 bg-" + bgColor2}
              onClick={() => {
                setBgColor2("white");
                setBgColor1("gray");
                setShowAddresses(true);
                setShowOrders(false);
              }}>
                Addresses
            </div>
          </div>  
          <div className="border border-gray-300 w-8/12 my-14">
            {showOrders && <Orders/>}
            {showAddresses && <Addresses/>}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default MyAccount;