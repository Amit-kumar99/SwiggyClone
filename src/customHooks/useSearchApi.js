import { useEffect } from "react";
import { SWIGGY_SEARCH_API } from "../utils/constants";

const useSearchApi = (searchText, setSuggestions) => {
  useEffect(() => {
    // Create a new AbortController for each request
    const controller = new AbortController();
    // Get the signal to attach to the fetch
    const signal = controller.signal;

    if (searchText === "") {
      setSuggestions([]);
      return;
    }

    const fetchSearchSuggestions = async () => {
      const data = await fetch(SWIGGY_SEARCH_API + searchText, { signal });
      const json = await data.json();

      const restaurantSuggestions = json.data.suggestions.filter(
        (suggestion) => suggestion.type === "RESTAURANT"
      );
      if (json.statusCode === 0) {
        setSuggestions(restaurantSuggestions);
      }
    };

    const timer = setTimeout(() => {
      fetchSearchSuggestions();
    }, 100);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchText]);
};

export default useSearchApi;
