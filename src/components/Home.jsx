import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "../utils/constants";
import Filters from "./Filters";
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();

    setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return (
    <div>
      <div className="body w-10/12 m-auto">
        <div className="flex mb-4">        
          <Filters restaurantsList={restaurantsList} setFilteredRestaurantsList={setFilteredRestaurantsList}/>
        </div>  
        <h1 className="font-bold mx-4 text-3xl">
          Restaurants with online food delivery in Hyderabad
        </h1>
        <div className="flex flex-wrap">
          {filteredRestaurantsList.map((item) => (
            <Link key={item.info.id} to="/menu">
              <RestaurantCard restaurantData={item.info} />
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home