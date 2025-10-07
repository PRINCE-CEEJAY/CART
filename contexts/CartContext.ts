import { createContext } from "react";
import type { State, Action } from "./../reducer/cartReducer";

export const CartState = createContext<State | undefined>(undefined);
export const CartDispatch = createContext<React.Dispatch<Action> | undefined>(
  undefined
);
