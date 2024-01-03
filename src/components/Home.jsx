import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "../utils/constants";
import Filters from "./Filters";
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";

const Home = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();

    setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return (
    <div>
      <div className="body w-10/12 m-auto">
        <div className="flex mb-4">        
          <Filters restaurantsList={restaurantsList} setRestaurantsList={setRestaurantsList}/>
        </div>  
        <h1 className="font-bold mx-4 text-3xl">
          Restaurants with online food delivery in Hyderabad
        </h1>
        <div className="flex flex-wrap">
          {restaurantsList.map((item) => (
            <RestaurantCard key={item.info.id} restaurantData={item.info} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home