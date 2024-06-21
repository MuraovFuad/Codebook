import { useContext } from "react";

import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";
import { CartContext } from "../../context/CartContext";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const { cartList } = useContext(CartContext);
  useTitle(`Cart (${cartList.length}) `);
  return <main>{cartList.length > 0 ? <CartList /> : <CartEmpty />}</main>;
};
