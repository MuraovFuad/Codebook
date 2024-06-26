/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const cartInitialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
  total: 0,
};

export const CartContext = createContext(cartInitialState);
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(state.cartList));
  }, [state.cartList]);

  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.total + product.price;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = state.total - product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
