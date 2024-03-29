import { useEffect, useState } from "react";
import FastDeliveryFilter from "./FastDeliveryFilter";
import TopRatingsFilters from "./TopRatingsFilters";
import PureVegFilter from "./PureVegFilter";
import HighPriceFilter from "./HighPriceFilter";
import LowPriceFilter from "./LowPriceFilter";
// import SortByFilter from "./SortByFilter";

const Filters = ({restaurantsList, setFilteredRestaurantsList}) => {
  const [activeFilters, setActiveFilters] = useState({
    fastDelivery: false,
    topRatings: false,
    pureVeg: false,
    highPrice: false,
    lowPrice: false,
    // activeSortFilter: false,
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
    if(activeFilters.pureVeg){
      filteredList=filteredList.filter((item) => item.info.veg === true);
    }
    if(activeFilters.highPrice && activeFilters.lowPrice){
      filteredList=filteredList.filter((item) => {
        const costString=item.info.costForTwo;
        let matches = costString.match(/\d+/);
        return (matches[0] <= 300 || (matches[0] >= 300 && matches[0] <= 600));
      });
    }
    else if(activeFilters.highPrice){
      filteredList=filteredList.filter((item) => {
        const costString=item.info.costForTwo;
        let matches = costString.match(/\d+/);
        return (matches[0] >= 300 && matches[0] <= 600);
      });
    }
    else if(activeFilters.lowPrice){
      filteredList=filteredList.filter((item) => {
        const costString=item.info.costForTwo;
        let matches = costString.match(/\d+/);
        return (matches[0] <= 300);
      });
    // if(activeFilters.activeSortFilter){
    //   filteredList=filteredList.sort;
    // }
    }
    setFilteredRestaurantsList(filteredList);
  }

  useEffect(() => {
    applyFilters();
  }, [activeFilters])

  return (
    <div className="filters flex mt-5 ml-3 mb-4">
      {/* <SortByFilter
        onToggle={() => toggleFilter('')}/> */}
      <FastDeliveryFilter 
        isActive={activeFilters.fastDelivery}
        onToggle={() => toggleFilter('fastDelivery')}/>
      <TopRatingsFilters
        isActive={activeFilters.topRatings} 
        onToggle={() => toggleFilter('topRatings')}/>
      <PureVegFilter
        isActive={activeFilters.pureVeg} 
        onToggle={() => toggleFilter('pureVeg')}/>
      <HighPriceFilter
        isActive={activeFilters.highPrice} 
        onToggle={() => toggleFilter('highPrice')}/>
      <LowPriceFilter
        isActive={activeFilters.lowPrice} 
        onToggle={() => toggleFilter('lowPrice')}/>
    </div>
  )
}

export default Filters;