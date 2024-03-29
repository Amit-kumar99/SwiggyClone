import { useEffect } from "react";
import { SWIGGY_SEARCH_API } from "../utils/constants";

const useSearchApi = (searchText, setSuggestions) => {

  const fetchSearchSuggestions = async () => {
    const data = await fetch(SWIGGY_SEARCH_API + searchText);
    const json = await data.json();
    // console.log(json.data.suggestions);
    const restaurantSuggestions = json.data.suggestions.filter(suggestion => suggestion.type === "RESTAURANT");
    if(json.statusCode === 0){
      setSuggestions(restaurantSuggestions);
    }
    else {
      setSuggestions([]);
    }
  }
  useEffect(() => {   
    const timer = setTimeout(() => {
      fetchSearchSuggestions();
    }, 100);
    return () => clearTimeout(timer);
  },[searchText]);
}

export default useSearchApi