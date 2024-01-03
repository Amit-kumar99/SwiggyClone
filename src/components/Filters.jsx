const Filters = ({restaurantsList, setRestaurantsList}) => {

  return (
    <div className="filters flex mt-5">
      <div className="m-1">
        <button 
          className={"border border-gray-200 shadow-md px-2 py-2 rounded-full text-sm font-semibold bg-white-200"}>
           Filters
        </button>
      </div>    

      <div className="m-1">
        <button
          className={"border border-gray-200 shadow-md px-2 py-2 rounded-full text-sm font-semibold bg-white-200"}
          onClick={() => {
            setRestaurantsList(restaurantsList.filter((item) => item.info.sla.deliveryTime <= 30));
          }}>
            Fast Delivery
        </button>
      </div>

      <div className="m-1">
        <button
          className={"border border-gray-200 shadow-md px-2 py-2 rounded-full text-sm font-semibold bg-white-200"}
          onClick={() => {
            setRestaurantsList(restaurantsList.filter((item) => item.info.avgRating >= 4));
          }}>
            Ratings : 4+
        </button>
      </div>

    </div>
  )
}

export default Filters