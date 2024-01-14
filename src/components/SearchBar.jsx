import { useRef } from "react";

const SearchBar = ({restaurantsList, setFilteredRestaurantsList}) => {
  const searchRef = useRef(null);
  const handleSearch = () => {
    setFilteredRestaurantsList(restaurantsList.filter(
      (item) => item?.info?.name.toLowerCase().includes(searchRef?.current?.value.toLowerCase())));
  }

  return (
    <div className="flex border pr-2 mt-5 ml-3 mb-4 justify-between rounded-md">
      <div className="w-full pr-2">
        <input 
          ref={searchRef}
          className="w-full p-3" 
          type="text" 
          placeholder="Search"/>
      </div>
      <div className="mt-3 cursor-pointer">
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}/>
      </div>
    </div>
  )
}

export default SearchBar;