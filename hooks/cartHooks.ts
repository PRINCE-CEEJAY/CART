import React, { useContext } from "react";
import { State, Action } from "../reducer/cartReducer";
import { CartState, CartDispatch } from "../contexts/CartContext";
export const useCartState = (): State => {
  const context = useContext(CartState);
  if (context === undefined) {
    throw new Error(
      "useCartState must be used within the CartProvider context"
    );
  }
  return context;
};
export const useCartDispatch = (): React.Dispatch<Action> => {
  const context = useContext(CartDispatch);
  if (context === undefined) {
    throw new Error(
      "useCartState must be used within the CartProvider context"
    );
  }
  return context;
};
