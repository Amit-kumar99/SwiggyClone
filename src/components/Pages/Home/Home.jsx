import Filters from "./Filters";
import RestaurantCard, { ExclusiveRestaurantCard } from "./RestaurantCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Shimmer from "../../common/Shimmer";
import SearchBar from "./SearchBar";
import useFetchRestaurants from "../../../customHooks/useFetchRestaurants";

const Home = () => {
  const { restaurantsList, filteredRestaurantsList, setFilteredRestaurantsList } = useFetchRestaurants();

  if (filteredRestaurantsList === null) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="w-10/12 m-auto">
        <SearchBar restaurantsList={restaurantsList} setFilteredRestaurantsList={setFilteredRestaurantsList}/>
        <Filters restaurantsList={restaurantsList} setFilteredRestaurantsList={setFilteredRestaurantsList}/>
        <h1 className="font-bold mx-4 text-3xl">
          Restaurants with online food delivery in Hyderabad
        </h1>
        <div className="flex flex-wrap min-h-[333px] min-w-1">
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

export default Home;