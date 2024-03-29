import { useEffect, useRef, useState } from "react";

const SearchBar = ({restaurantsList, setFilteredRestaurantsList}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setFilteredRestaurantsList(restaurantsList.filter(
      (item) => item?.info?.name.toLowerCase().includes(searchText.toLowerCase())));
  }

  useEffect(() => {   
    const timer = setTimeout(() => {
      handleSearch();
    }, 300);
    return () => clearTimeout(timer);
  },[searchText]);

  return (
    <div className="flex border pr-2 mt-5 ml-3 mb-4 justify-between">
      <div className="w-full pr-2">
        <input 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-3" 
          type="text" 
          placeholder="Search"/>
      </div>
      <div className="mt-3">
        <i className="fa-solid fa-magnifying-glass" style={{color: "#7d7d7d"}}/>
      </div>
    </div>
  )
}

export default SearchBar;