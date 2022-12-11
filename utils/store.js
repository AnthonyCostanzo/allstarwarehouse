import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
import cart from "../pages/cart";
export const Store = createContext();

const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const newItem = action.payload;

      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      let cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case "REMOVE_CART_ITEM":
      const itemToRemove = state.cart.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (itemToRemove) {
        let updatedCartItems = state.cart.cartItems.filter(
          (item) => item._id !== itemToRemove._id
        );
        Cookies.set("cartItems", JSON.stringify(updatedCartItems));
        return { ...state, cart: { ...cart, cartItems: updatedCartItems } };
      }
      return { ...state };
    case "USER_LOGIN": {
      return { ...state, userInfo: action.payload };
    }
    case "USER_LOGOUT": {
      return { ...state, userInfo: null, cart: { cartItems: [] } };
    }
    default:
      return { ...state };
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
