import { useSelector, useDispatch } from "react-redux";
import { removeAddress } from "../../../utils/addressSlice";

const Addresses = () => {
    const dispatch = useDispatch();
    const activeUser = useSelector((store) => store.user.activeUser);
    const allAddresses = useSelector((store) => store.address.allAddresses);
    const currentUserAddresses = allAddresses.filter(address => address.userId === activeUser.id);
    // console.log(currentUserAddresses);

    //doesn't work
    const handleDelete = ({item}) => {
        console.log(item.id);
        dispatch(removeAddress(item.id));
    }

    return (
        <div className="my-3 mx-8 text-gray-700">
            <h1 className="font-bold text-xl my-6">Manage Addresses</h1>
            <div className="flex flex-wrap">
                {currentUserAddresses.map(item => (
                    <div className="mr-5 border border-gray-300 p-5" key={item.id}>
                        <p className="text-xs">{item.door}, {item.landmark}</p>
                        <div className="flex mt-2 text-sm text-orange-500 font-semibold ">
                            <button className="mr-3" 
                                onClick={() => {}}>EDIT
                            </button>
                            <button 
                                onClick={handleDelete({item})}>DELETE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Addresses;