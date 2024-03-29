import { useEffect } from "react";
import { MENU_ITEMS_URL } from "../utils/constants";

const useFetchRestaurantMenu = (restaurantId, setRestaurantInfo) => {
  const fetchMenuItems = async () => {
    const data = await fetch(MENU_ITEMS_URL + restaurantId);
    const json = await data.json();
    setRestaurantInfo(json);
  }

  useEffect(() => {
      fetchMenuItems().catch((err) => console.log(err));
  }, []);

}

export default useFetchRestaurantMenu;