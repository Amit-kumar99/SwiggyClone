import { useState, useEffect } from "react";
import { MENU_ITEMS_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCategories from "./RestaurantMenuCategories";

const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(() => {
        fetchMenuItems();
    }, []);
    
    const fetchMenuItems = async () => {
        const data = await fetch(MENU_ITEMS_URL + restaurantId);
        const json = await data.json();
        setRestaurantInfo(json);
    }

    if (restaurantInfo === null) {
        return <Shimmer />;
    } 

    const restaurantName=restaurantInfo?.data?.cards[0]?.card?.card?.info?.name;
    const restaurantCuisines=restaurantInfo?.data?.cards[0]?.card?.card?.info?.cuisines;
    const restaurantAvgRating=restaurantInfo?.data?.cards[0]?.card?.card?.info?.avgRating;
    const restaurantMenu=restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(restaurantMenu);

    return restaurantInfo === null ? <Shimmer /> : (
        <div className="w-6/12 mx-auto">
            <h2 className="my-1 font-bold text-xl">{restaurantName}</h2>
            <h4 className="my-1">{restaurantCuisines.join(", ")}</h4>
            <h4 className="my-1">{restaurantAvgRating}*</h4>
            <h4 className="my-1 font-bold">Menu:</h4>
            {/* accordian */}
            {restaurantMenu.map((item) => (
                <RestaurantMenuCategories
                    key={item?.card?.card?.title} 
                    data={item?.card?.card}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;
