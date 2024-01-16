import { useDispatch, useSelector } from "react-redux";
import MenuItemsList from "./MenuItemsList";

const Cart = () => {
  // const dispatch = useDispatch();
  const cartItemsList = useSelector((store) => store.cart.cartItems);

  return (
    <div className="ml-2 mt-5">
      <h2 className="ml-6 font-bold text-2xl">Cart</h2>
      <button 
        className="bg-black text-white p-2 rounded-md mt-3 ml-6"
        //not working
        // onClick={() => dispatch(clearCart())}
        >Clear Cart
      </button>
      <MenuItemsList menuItems={cartItemsList}/>
    </div>
  )
}

export default Cart;