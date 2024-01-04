import { useState, useEffect } from "react";
import { MENU_ITEMS_URL } from "../utils/constants";

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        fetchMenuItems();
    }, [])

    const fetchMenuItems = async () => {
        const data = await fetch(MENU_ITEMS_URL + "471748");
        const json = await data.json();
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x) => x?.card?.card?.["@type"].includes("ItemCategory")));
        setMenuItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x) => x?.card?.card?.["@type"].includes("ItemCategory")));
    }

    return (
        <div>
            {menuItems.map((item) => (
                <div className="border border-black m-2" key={item?.card?.card?.title}>
                    <div className="font-semibold text-lg">{item?.card?.card?.title}</div>
                    {item?.card?.card?.itemCards?.map((subItem) => (
                            <div className="border border-black m-1" key={subItem?.card?.info?.id}>
                                <div>{subItem?.card?.info?.category}</div>
                                <div>{subItem?.card?.info?.name}</div>
                                <div>{subItem?.card?.info?.price/100}</div>
                                <div>{subItem?.card?.info?.description}</div>
                            </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MenuItems