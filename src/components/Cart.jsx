import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
    <div className="w-3/12 ml-8 bg-white">
        <div className="p-7">
            {cartItemsList.length === 0 && 
                (<h1 className="my-2 mx-4">Your cart is empty. Add items to your cart.</h1>)}
                {/* below should be restaurant img */}
                                {/* <img className="w-12 h-10 mr-3"
                                    src={MENU_ITEMS_IMG_API + item.card.info.imageId} /> */}
                                {/* restaurant name */}
                                {/* <p className="font-semibold text-lg">{item.card.info.name}</p> */}
                {cartItemsList.map((item, index)=>(
                    <div className="w-full flex border-gray-300 justify-between" key={item.card.info.id}>
                        <div className="w-full"> 
                            <div className="flex w-full my-2 justify-between">
                                <div className="text-sm mt-3 w-2/12">{item.card.info.name}</div>
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
                {cartItemsList.length !== 0 && (
                    <div className="pb-4 text-xs border-b-2 border-black">
                        <h2 className="font-semibold mb-1">Bill Details</h2>
                        <div className="text-slate-500">
                            <div className="mb-1 flex justify-between">
                                Item Total <div>₹{totalPrice}</div>
                            </div>
                            <div className="mb-1 pb-4 border-b  flex justify-between">
                                Delivery Fee | 1.6 kms <div>₹37</div>
                            </div>
                            <div className="mb-1 pt-3  flex justify-between">
                                Delivery Tip <div className="text-red-400">Add tip</div>
                            </div>
                            <div className="mb-1 flex justify-between">
                                Platform fee <div>₹3</div>
                            </div>
                            <div className="pb-1 flex justify-between">
                                GST and Restaurant Charges <div>₹15.54</div>
                            </div>        
                        </div>        
                    </div>)
                }
            </div>  
            {cartItemsList.length !== 0 && (
                <div className="w-full border-y shadow-md">
                    <div className="font-semibold py-4 mx-2 flex justify-between">
                        <div>TO PAY</div><div>₹{totalPrice}</div>
                    </div>
                </div>)
            } 
        </div>
    )
}

export default Cart;