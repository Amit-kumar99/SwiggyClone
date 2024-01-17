import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "../utils/constants";
import Filters from "./Filters";
import RestaurantCard, { ExclusiveRestaurantCard } from "./RestaurantCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";

const Home = () => {
  const [restaurantsList, setRestaurantsList] = useState(null);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();

    setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    console.log(filteredRestaurantsList[0].info.totalRatingsString);
    // console.log(json?.data?.cards);
  }

  return filteredRestaurantsList===null ? <Shimmer/> : (
    <div>
      <div className="body w-10/12 m-auto">
        <SearchBar restaurantsList={restaurantsList} setFilteredRestaurantsList={setFilteredRestaurantsList}/>
        <Filters restaurantsList={restaurantsList} setFilteredRestaurantsList={setFilteredRestaurantsList}/>
        <h1 className="font-bold mx-4 text-3xl">
          Restaurants with online food delivery in Hyderabad
        </h1>
        <div className="flex flex-wrap">
          {filteredRestaurantsList.map((item) => (
            <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
              {item.info.totalRatingsString.includes("K+") && parseInt(item.info.totalRatingsString) >= 10 ?
                <ExclusiveRestaurantCard restaurantData={item.info} /> :
                <RestaurantCard restaurantData={item.info} />}
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home