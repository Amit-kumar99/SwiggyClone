import { useSelector } from "react-redux";
import { addresses } from "../utils/addresses";

const Addresses = () => {
    const activeUserId = useSelector((store) => store.user.activeUser.id);
    const currentUserAddresses = addresses.filter(item => item.userId === activeUserId);
    console.log(currentUserAddresses);
    return (
        <div className="my-3 mx-8 text-gray-700">
            <h1 className="font-bold text-xl my-6">Manage Addresses</h1>
            {currentUserAddresses.map(item => (
                <div className="mt-3 flex flex-wrap" key={item.id}>
                    <p className="border p-5 text-xs">{item.plotNumber}, {item.street}, {item.state}, {item.pincode}</p>
                </div>
            ))}
        </div>
    )
}

export default Addresses;