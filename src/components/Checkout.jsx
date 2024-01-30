import { useSelector } from "react-redux";
import DeliveryDetails from "./DeliveryDetails";
import Cart from "./Cart";

const Checkout = () => {
  const cartItemsList = useSelector((store) => store.cart.cartItems);

  return (
    <div className="bg-gray-200 h-[610px]">
      <div className="flex w-10/12 mx-auto pt-8">
        {cartItemsList.length !== 0 && <DeliveryDetails/>}
        <Cart/>
      </div>
    </div>  
  )
}

export default Checkout;