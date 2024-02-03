import React from 'react'

const TopRatingsFilters = ({isActive, onToggle}) => {
  return (
    <div className="m-1">
        <button
          className={"border border-gray-" + (isActive ? "400" : "200") + " bg-gray-" + (isActive ? "200" : "0") + " shadow-md px-2 py-2 rounded-full text-sm font-semibold"}
          onClick={() => onToggle("topRatings")}>      
            Ratings : 4+
        </button>
    </div>
  )
}

export default TopRatingsFilters