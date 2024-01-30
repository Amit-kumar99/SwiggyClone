import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MENU_ITEMS_IMG_API } from "../utils/constants";
import { addItems, removeItems } from "../utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const cartItemsList = useSelector((store) => store.cart.cartItems);
    const countOfAllCartItems = useSelector((store) => store.cart.countOfAllCartItems);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const arr = cartItemsList.map((x, index) => x.card.info.price / 100 * countOfAllCartItems[index]);
        setTotalPrice(arr.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0));
      },[cartItemsList, countOfAllCartItems]);

  return (
    <div className="w-4/12 ml-8 bg-white">
          <div>
            {cartItemsList.length === 0 && 
                (<h1 className="my-2 mx-4">Your cart is empty. Add items to your cart.</h1>)}
                {cartItemsList.map((item, index)=>(
                    <div className="w-full flex p-2 border-gray-300 justify-between" key={item.card.info.id}>
                        <div className="w-full"> 
                            <div className="flex">
                                <img className="w-12 h-10 mr-3"
                                    src={MENU_ITEMS_IMG_API + item.card.info.imageId} />
                                <p className="font-semibold text-lg">{item.card.info.name}</p>
                            </div>
                            <div className="flex w-full my-2 justify-between">
                                <div className="text-sm mt-3">{item.card.info.name}</div>
                                <div className="border inline-block mt-2 py-1 px-2">
                                    <i 
                                    className="fa-solid fa-minus pr-2 cursor-pointer" 
                                    style ={{ color: "#bb0202"}}
                                    onClick={() => {dispatch(removeItems(item))}}
                                    />  
                                        {countOfAllCartItems[index]}  
                                    <i  
                                    className="fa-solid fa-plus pl-2 cursor-pointer" 
                                    style ={{ color: "#59b210"}}
                                    onClick={() => {dispatch(addItems(item))}}/>
                                </div>
                            <div className="mt-3">₹{item.card.info.price / 100 * countOfAllCartItems[index]}</div>
                        </div>
                      </div>
                  </div>
                ))}
                {cartItemsList.length!==0 && (
                    <div className="w-full border-y shadow-md">
                    <h2 className="font-semibold my-4 mx-2 flex justify-between">
                        <div>TO PAY</div><div>₹{totalPrice}</div>
                    </h2>
                    </div>)
                }  
            </div>  
        </div>
    )
}

export default Cart;