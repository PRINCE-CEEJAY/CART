import React, { useEffect, useReducer } from "react";
import { initialState, cartReducer } from "../reducer/cartReducer";
import { CartState, CartDispatch } from "../contexts/CartContext";
import axios from "axios";

type CartProviderProps = {
  children: React.ReactNode;
};
const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://dummyjson.com/products");
      const onlineData = res.data.products;
      dispatch({ type: "ADD", payload: onlineData });
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("Updated state:", state.items);
  // }, [state]);
  return (
    <CartState.Provider value={state}>
      <CartDispatch.Provider value={dispatch}>{children}</CartDispatch.Provider>
    </CartState.Provider>
  );
};

export default CartProvider;
