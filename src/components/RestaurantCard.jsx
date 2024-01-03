import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({restaurantData}) => {
  return (
    <div className="m-4 p-1 w-[220px] bg-gray-100 rounded-md hover:bg-gray-300">
      <img
        className="rounded-md w-[210] h-[190]"
        src={CDN_URL + restaurantData.cloudinaryImageId}
        alt="veg biryani"
      />
      <h3 className="font-bold pt-2 text-lg">{restaurantData.name.length > 20 ? 
        restaurantData.name.substring(0,20) + "..." : 
        restaurantData.name}
      </h3>
      <h4>{restaurantData.cuisines.join(", ").length>22 ? 
        restaurantData.cuisines.join(", ").substring(0,22) + "..." : 
        restaurantData.cuisines.join(", ")}
      </h4>
      <p>Cost: {restaurantData.costForTwo}</p>
      <h4> {restaurantData.avgRating} *</h4>
      <h4>{restaurantData.sla.deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCard;