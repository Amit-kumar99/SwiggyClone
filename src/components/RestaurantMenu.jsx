import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
import useFetchRestaurantMenu from "../customHooks/useFetchRestaurantMenu";

const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useFetchRestaurantMenu(restaurantId, setRestaurantInfo);

    if (restaurantInfo === null) {
        return <Shimmer />;
    } 
    
    const restaurantName=restaurantInfo?.data?.cards[2]?.card?.card?.info?.name;
    const restaurantCuisines=restaurantInfo?.data?.cards[2]?.card?.card?.info?.cuisines;
    const restaurantAvgRating=restaurantInfo?.data?.cards[2]?.card?.card?.info?.avgRating;
    // cards[2] or cards[4]
    const restaurantMenu=restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
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
