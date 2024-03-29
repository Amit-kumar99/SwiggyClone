import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "../utils/constants";

const useFetchRestaurants = () => {
  const [restaurantsList, setRestaurantsList] = useState(null);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState(null);  

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }
  
  useEffect(() => {
    fetchRestaurants().catch((err) => console.log(err));
  }, []);

  return {restaurantsList, filteredRestaurantsList, setFilteredRestaurantsList};
}

export default useFetchRestaurants;