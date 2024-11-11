import { useState } from "react";
import useSearchApi from "../../../customHooks/useSearchApi";
import { SUGGESTIONS_IMG_CDN_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useSearchApi(searchText, setSuggestions);

  return (
    <div>
      <div className="flex border pr-2 mt-5 ml-3 mb-4 justify-between">
        <div className="w-full pr-2">
          <input
            value={searchText}
            className="w-full p-3 outline-none"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#7d7d7d" }}
          />
        </div>
      </div>
      <div>
        {suggestions.length !== 0 &&
          suggestions.map((suggestion) => (
            <Link
              key={suggestion.cloudinaryId}
              className="hover:bg-gray-200 flex py-5 w-[80vw] mx-auto items-center cursor-pointer"
              to={
                "/restaurants/" +
                JSON.parse(suggestion.metadata).data.primaryRestaurantId
              }
            >
              <div>
                <img
                  src={SUGGESTIONS_IMG_CDN_URL + suggestion.cloudinaryId}
                  alt="img"
                />
              </div>
              <div className="pl-5">
                <div>{suggestion.text}</div>
                <div>{suggestion.type}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
