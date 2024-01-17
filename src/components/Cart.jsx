import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems, clearCart } from "../utils/cartSlice";
import { MENU_ITEMS_IMG_API } from "../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemsList = useSelector((store) => store.cart.cartItems);
  const countOfAllCartItems = useSelector((store) => store.cart.countOfAllCartItems);
  console.log(countOfAllCartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="w-10/12 mx-auto mt-5">
      <h2 className="font-bold text-2xl">Cart</h2>
      {cartItemsList.length!==0 ? (
        <button 
          className="bg-black text-white p-2 rounded-md mt-3"
          //not working
          onClick={handleClearCart}
          >Clear Cart
        </button>)
      :
        (cartItemsList.length === 0 && <h1>Your cart is empty. Add items to your cart.</h1>)
      }
      {cartItemsList.map((item, index)=>(
            <div className="mt-8 flex border-b-2 p-4 border-gray-300 justify-between" key={item.card.info.id}>
                <div className="p-2 w-9/12"> 
                  <p className="font-bold">{item.card.info.name}</p>
                  <p>₹{item.card.info.price / 100}</p>
                  <p className="font-normal text-gray-500 text-xs">{item.card.info.description}</p>
                  <p className="border inline-block mt-2 py-1 px-2">
                   <i 
                    className="fa-solid fa-minus pr-3 cursor-pointer" 
                    style ={{ color: "#bb0202"}}
                    onClick={() => {dispatch(removeItems(item))}}
                    />  
                      {countOfAllCartItems[index]}  
                  <i  
                    className="fa-solid fa-plus pl-3 cursor-pointer" 
                    style ={{ color: "#59b210"}}
                    onClick={() => {dispatch(addItems(item))}}/>
                  </p>
                </div>
                <div>
                  <img className="w-40 rounded-md"
                    src={MENU_ITEMS_IMG_API + item.card.info.imageId} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cart;