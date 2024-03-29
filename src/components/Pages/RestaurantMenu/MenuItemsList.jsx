import { useDispatch } from "react-redux";
import { MENU_ITEMS_IMG_API } from "../../../utils/constants";
import { addItems } from "../../../utils/cartSlice";

const MenuItemsList = ({menuItems}) => {
    console.log(menuItems[0]);
    const dispatch = useDispatch();

    const handleAddItems = ({item}) => {
        dispatch(addItems(item));
    }

    return (
        <div>
            {menuItems && menuItems.map((item)=>(
                <div className="flex border-b-2 p-4 border-gray-300 justify-between" key={item.card.info.id}>
                    <div className="p-2 w-9/12"> 
                    <p>{item.card.info.name}</p>
                    <p>₹{item.card.info.price / 100}</p>
                    <p className="font-normal text-gray-500 text-xs">{item.card.info.description}</p>
                    </div>
                    <div>
                        <div className="border border-gray-400 absolute bg-white rounded-md shadow-lg py-1 px-2 text-lime-500">
                            <button 
                                className="pb-1 font-semibold"
                                onClick={() => handleAddItems({item})}>    
                                    ADD +
                            </button>
                        </div>
                        <img className="w-40 rounded-md"
                        src={MENU_ITEMS_IMG_API + item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuItemsList;