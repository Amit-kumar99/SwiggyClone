import { useState } from "react";
import MenuItemsList from "./MenuItemsList";

const RestaurantMenuCategories=({data})=>{
    const [showMenuItems, setShowMenuItems] = useState(false);

    const handleClick=()=>{
        setShowMenuItems(!showMenuItems);
    }

    return (
    <div className="my-4">
        {/* head */}
        <div className="flex cursor-pointer bg-gray-100 p-4 justify-between shadow-md" 
        onClick={handleClick}>
            <p className="font-bold">{data.title} ({data.itemCards.length})</p>
            <p><i className="fa-solid fa-angle-down"/></p>
        </div>
        {/* body */}
        {showMenuItems && <MenuItemsList menuItems={data.itemCards}/>}
    </div>
    )}

export default RestaurantMenuCategories;