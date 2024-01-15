import { useSelector } from "react-redux";
import MenuItemsList from "./MenuItemsList";

const Cart = () => {
  const cartItemsList = useSelector((store) => store.cart.cartItems);

  return (
    <div>
      <h2 className="font-bold">Cart</h2>
      <MenuItemsList menuItems={cartItemsList}/>
    </div>
  )
}

export default Cart;