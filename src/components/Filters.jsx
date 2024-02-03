import { useEffect, useState } from "react";
import FastDeliveryFilter from "./FastDeliveryFilter";
import TopRatingsFilters from "./TopRatingsFilters";

const Filters = ({restaurantsList, setFilteredRestaurantsList}) => {
  const [activeFilters, setActiveFilters] = useState({
    fastDelivery: false,
    topRatings: false,
  });

  const toggleFilter = (filter) => {
    setActiveFilters(prevFilters => ({
      ...prevFilters, 
      [filter] : !prevFilters[filter],
    }));
  }

  const applyFilters = () => {
    let filteredList = restaurantsList;
    if(activeFilters.fastDelivery){
      filteredList=filteredList.filter((item) => item.info.sla.deliveryTime <= 30);     
    }
    if(activeFilters.topRatings){
      filteredList=filteredList.filter((item) => item.info.avgRating >= 4);
    }
    setFilteredRestaurantsList(filteredList);
  }

  useEffect(() => {
    applyFilters();
  }, [activeFilters])

  return (
    <div className="filters flex mt-5 ml-3 mb-4">
      <FastDeliveryFilter 
        isActive={activeFilters.fastDelivery}
        onToggle={() => toggleFilter('fastDelivery')}/>
      <TopRatingsFilters
        isActive={activeFilters.topRatings} 
        onToggle={() => toggleFilter('topRatings')}/>
    </div>
  )
}

export default Filters;