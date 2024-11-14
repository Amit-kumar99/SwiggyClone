import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS_IMG_API } from "../../../utils/constants";
import { addItems, removeItems } from "../../../utils/cartSlice";
import { useState } from "react";

const MenuItemsList = ({ menuItems }) => {
  const dispatch = useDispatch();
  const cartItemsList = useSelector((store) => store.cart.cartItems);
  const countOfAllCartItems = useSelector(
    (store) => store.cart.countOfAllCartItems
  );

  const handleSubtractItem = ({ item }) => {
    dispatch(removeItems(item));
  };

  const handleAddItem = ({ item }) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {menuItems &&
        menuItems.map((item) => {
          const cartItemIndex = cartItemsList.findIndex(
            (cartItem) => item.card.info.id === cartItem.card.info.id
          );

          return (
            <div
              data-testid="accordionItem"
              className="flex border-b-2 p-4 border-gray-300 justify-between"
              key={item.card.info.id}
            >
              <div className="p-2 w-9/12">
                <p>{item.card.info.name}</p>
                <p>₹{item.card.info.price / 100}</p>
                <p className="font-normal text-gray-500 text-xs">
                  {item.card.info.description}
                </p>
              </div>
              <div>
                <div className="border border-gray-400 absolute bg-white rounded-md shadow-lg py-1 px-2 text-lime-500">
                  <div className="pb-1 font-semibold">
                    {cartItemIndex === -1 ? (
                      <button onClick={() => handleAddItem({ item })}>
                        ADD +
                      </button>
                    ) : (
                      <div>
                        <button
                          className="pr-2"
                          onClick={() => handleSubtractItem({ item })}
                        >
                          -
                        </button>
                        <span className="px-2 cursor-default">
                          {countOfAllCartItems[cartItemIndex]}
                        </span>
                        <button
                          className="pl-2"
                          onClick={() => handleAddItem({ item })}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <img
                  className="w-40 rounded-md"
                  src={MENU_ITEMS_IMG_API + item.card.info.imageId}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuItemsList;
