import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../utils/addressSlice";
import { useEffect, useRef, useState } from "react";
import { checkAddressValid } from "../utils/validations";

const AddressForm = ({setShowAddressForm}) => {
    const userId = useSelector((store) => store.user.activeUser.id);
    const doorRef = useRef(null);
    const landmarkRef = useRef(null);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState(null);
    const [id, setId] = useState(10);

    //why does id not change
    // useEffect(() => {
    //     console.log(id);
    // }, [id]);

    const handleAddressClick = () => {
        // validate address form here or in reducer
        const msg = checkAddressValid(doorRef.current.value, landmarkRef.current.value);
        setErrorMessage(msg);
        if (msg == null) {
            const door = doorRef.current.value;
            const landmark = landmarkRef.current.value;
            // setId((prevId) => prevId + 1);
            dispatch(addAddress({userId, id, door, landmark}));
            console.log(id);
            setShowAddressForm(false);
        }
    }

    return (
        <div className="border ml-3 px-5 pt-3 py-6 w-10/12 mx-auto">
            <div className="flex justify-between mx-2 fa-lg">
                <h1 className="font-bold text-lg">Save delivery Address</h1>
                <button onClick={() => setShowAddressForm(false)}>
                    <i className="fa-solid fa-xmark pt-1" />
                </button>
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
                <p className="text-red-500 mt-2">{errorMessage}</p>
                <div>
                    <button className="bg-orange-500 text-white font-semibold p-3 mt-3 w-full" 
                        onClick={handleAddressClick}>SAVE ADDRESS</button>
                </div>
            </form>
        </div>
    )
}
    
export default AddressForm;
    
    