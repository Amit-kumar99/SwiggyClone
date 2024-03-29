import { useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "./AddressForm";

const DeliveryAddress = ({isLoggedIn, deliveryAddressSelected, setDeliveryAddressSelected}) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const activeUser = useSelector((store) => store.user.activeUser);
  const allAddresses = useSelector((store) => store.address.allAddresses);
  const currentUserAddresses = allAddresses.filter(address => address.userId === activeUser.id);
  console.log(currentUserAddresses);
  const color = "gray";

  const handleDeliveryAddress = ({index}) => {
    setDeliveryAddressSelected(true);
    setSelectedAddressIndex(index);
  }

  return (
    <div className="bg-white py-3">
      {/* head */}
      <h3 className={"font-semibold text-lg ml-5 text-" + color +"-400"}>Delivery address</h3>
      {/* body */}
      {isLoggedIn && 
        (<div>
          {deliveryAddressSelected ?
            (<div className="border shadow-lg my-3 ml-3 p-2 w-5/12">     
              {currentUserAddresses[selectedAddressIndex].door}, {currentUserAddresses[selectedAddressIndex].landmark}
            </div>) 
              :
            (<div className="flex flex-wrap">
              {currentUserAddresses.map((a, index) => (
                <div className="border shadow-lg m-3 p-2 w-5/12" key={a.id}>
                  <p>{a.door}, {a.landmark}</p>
                  {!showAddressForm && 
                    (<button 
                      className="bg-lime-600 font-semibold text-white py-2 px-4 my-3" 
                      onClick={() => handleDeliveryAddress({index})}>DELIVER HERE
                    </button>)}
                </div>))
              }
            </div>)
          }   

          {/* show using free maps api */}
          {showAddressForm && (<AddressForm setShowAddressForm={setShowAddressForm}/>)}
          {deliveryAddressSelected ?
            (<button className="text-orange-500 border border-orange-500 font-bold my-2 p-2 ml-3" 
              onClick={() => 
                {setDeliveryAddressSelected(false);
                }}>
                  CHANGE
            </button>)
              :
            (!showAddressForm && 
              (<button className="border border-lime-600 text-lime-600 font-semibold my-2 py-2 px-8 ml-3" 
                onClick={() => {setShowAddressForm(true)}}>
                  ADD NEW
              </button>)) 
          }   
        </div>)}
    </div>
  )
}

export default DeliveryAddress;