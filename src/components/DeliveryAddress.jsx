import { useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "./AddressForm";

const DeliveryAddress = ({isLoggedIn}) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [deliveryAddressSelected, setDeliveryAddressSelected] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const activeUser = useSelector((store) => store.user.activeUser);
  const allAddresses = useSelector((store) => store.address.allAddresses);
  const currentUserAddresses = allAddresses.filter(address => address.userId === activeUser.id);
  const color = "gray";

  const handleDeliveryAddress = ({index}) => {
    setDeliveryAddressSelected(true);
    setSelectedAddressIndex(index);
  }

  return (
    <div>
      {/* header */}
      <h3 className={"font-bold ml-5 text-" + color +"-400"}>Select delivery address</h3>
      {/* body */}
      {isLoggedIn && 
        (<div>
          {deliveryAddressSelected ?
            (<div>     
              {currentUserAddresses[selectedAddressIndex].door}, {currentUserAddresses[selectedAddressIndex].landmark},
              {/* {currentUserAddresses[selectedAddressIndex].state},{currentUserAddresses[selectedAddressIndex].pincode} */}
            </div>) 
              :
            (<div className="flex flex-wrap">
              {currentUserAddresses.map((a, index) => (
                <div className="border shadow-lg m-3 p-2 w-5/12" key={a.id}>
                  <p>{a.door}, {a.landmark} 
                  {/* {a.state}, {a.pincode} */}
                  </p>
                  <button className="bg-lime-600 font-semibold text-white py-2 px-4 my-3" 
                    onClick={() => handleDeliveryAddress({index})}>DELIVER HERE</button>
                </div>))
              }
            </div>
          )}   
          {/* setShowAddressForm being passed to addressForm shows error */}
          {showAddressForm && (<AddressForm setShowAddressForm={setShowAddressForm}/>)}
          {deliveryAddressSelected ?
            <button className="text-orange-500 font-bold my-2 p-2 ml-3" 
              onClick={() => 
                {setDeliveryAddressSelected(false);
                  // setShowPaymentInfo(false);
                }}>
                  CHANGE
            </button>
              :
            <button className="border border-lime-600 text-lime-600 font-semibold my-2 py-2 px-8 ml-3" 
              onClick={() => {setShowAddressForm(true)}}>
                ADD NEW
            </button> 
          }   
        </div>)}
    </div>
  )
}

export default DeliveryAddress;