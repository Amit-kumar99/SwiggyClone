import MenuItemsList from "./MenuItemsList";

const RestaurantMenuCategories=({data})=>{

    const handleClick=()=>{
        
    }

    return (
    <div className="my-4">
        {/* head */}
        <div className="flex cursor-pointer bg-gray-100 p-4 justify-between shadow-md" 
        onClick={handleClick}>
            <p className="font-bold">{data.title} ({data.itemCards.length})</p>
            <p className="mr-5">↓</p>
        </div>
        {/* body */}
        {<MenuItemsList menuItems={data.itemCards}/>}
    </div>
    )}

export default RestaurantMenuCategories;