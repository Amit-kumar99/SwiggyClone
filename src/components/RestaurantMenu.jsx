import { useState, useEffect } from "react";
import { MENU_ITEMS_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const MenuItems = () => {
    const { restaurantId } = useParams();
    // console.log(restaurantId);

    const [restaurantInfo, setRestaurantInfo] = useState([]);
    // const [showIndex, setShowIndex] = useState(null);
    
    useEffect(() => {
        fetchMenuItems();
    }, [])

    const fetchMenuItems = async () => {
        // console.log(restaurantId);
        const data = await fetch(MENU_ITEMS_URL+restaurantId);
        const json = await data.json();
        setRestaurantInfo(json);
    }

    if (restaurantInfo === null) {
        return <Shimmer />;
    } 

    console.log(restaurantInfo);
    const restaurantName=restaurantInfo?.data?.cards[0]?.card?.card?.info?.name;
    const restaurantCuisines=restaurantInfo?.data?.cards[0]?.card?.card?.info?.cuisines;
    const restaurantAvgRating=restaurantInfo?.data?.cards[0]?.card?.card?.info?.avgRating;
    const restaurantMenu=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(restaurantName);
    console.log(restaurantCuisines);
    console.log(restaurantAvgRating);
    console.log(restaurantMenu);
    console.log(restaurantMenu[0]?.card?.card?.title);

    return restaurantInfo === null ? <Shimmer /> : (
        <div className="w-6/12 mx-auto">
            {/* <h2 className="my-1 font-bold text-xl">{restaurantName}</h2>
            <h4 className="my-1">{restaurantCuisines}</h4>
            <h4 className="my-1">{restaurantAvgRating}*</h4>
            <h4 className="my-1 font-bold">Menu:</h4> */}
            {/* {restaurantMenu && restaurantMenu.map((x) => (
                <div key={x?.card?.card?.title}>{x?.card?.card?.title}</div>
            ))} */}
        </div>
    )
}

export default MenuItems;
