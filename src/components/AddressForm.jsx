import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../utils/addressSlice";
import { useRef } from "react";

// const AddressForm = ({setShowAddressForm}) => {
    const AddressForm = () => {
    const userId = useSelector((store) => store.user.activeUser.id);
    const doorRef = useRef(null);
    const landmarkRef = useRef(null);
    const dispatch = useDispatch();

    const handleAddressClick = () => {
        // validate address form here or in reducer
        const id = 11;
        const door = doorRef.current.value;
        const landmark = landmarkRef.current.value;
        console.log(door, landmark);
        dispatch(addAddress({userId, id, door, landmark}));
    }

    return (
        <div className="border ml-3 px-5 pt-3 py-6 w-10/12 mx-auto">
            <div className="flex justify-between mx-2 fa-lg">
                <h1 className="font-bold text-lg">Save delivery Address</h1>
                <i className="fa-solid fa-xmark pt-1"
                    // onClick={setShowAddressForm(false)}
                    />
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input 
                        ref = {doorRef}
                        className="border p-5 mt-2 w-full"
                        type="text" 
                        placeholder="Door / Flat No."/>
                </div>
                <div>
                    <input 
                        ref = {landmarkRef}
                        className="border p-5 w-full" 
                        type="text" 
                        placeholder="Landmark"/>
                </div>
                <div>
                    <button className="bg-orange-500 text-white font-semibold p-3 mt-3 w-full" 
                        onClick={handleAddressClick}>SAVE ADDRESS</button>
                </div>
            </form>
        </div>
    )
}
    
export default AddressForm;
    
    