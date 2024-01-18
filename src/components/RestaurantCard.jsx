import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({restaurantData}) => {
  return (
    <div className="m-4 w-[220px] bg-gray-100 rounded-md hover:bg-gray-300 text-gray-700">
      <img
        className="rounded-md w-[220px] h-[140px]"
        src={CDN_URL + restaurantData.cloudinaryImageId}
        alt="veg biryani"
      />
      <h3 className="font-semibold pt-2 text-lg">{restaurantData.name.length > 20 ? 
        restaurantData.name.substring(0,20) + "..." : 
        restaurantData.name}
      </h3>
      <h4 className="font-semibold"> 
        <i className="fa-solid fa-star border rounded-full px-1 py-1 mr-1 bg-green-700" style={{color: "#ffffff"}}>
        </i>{restaurantData.avgRating} . {restaurantData.sla.deliveryTime} mins
      </h4>
      <h4>{restaurantData.cuisines.join(", ").length>22 ? 
        restaurantData.cuisines.join(", ").substring(0,22) + "..." : 
        restaurantData.cuisines.join(", ")}
      </h4>
      <p>Cost: {restaurantData.costForTwo}</p>
    </div>
  )
}

//Higher Order Component
export const ExclusiveRestaurantCard = ({restaurantData}) => {
  return (
    <div>
      <div className="absolute p-1 mt-1 ml-3 bg-black text-white">
        10K+ Ratings
      </div>
      <RestaurantCard restaurantData={restaurantData}/>
    </div>
  )
}

export default RestaurantCard;