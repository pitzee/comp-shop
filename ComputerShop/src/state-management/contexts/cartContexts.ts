import React, { Dispatch } from "react";
import { Action, Item } from "../reducers/cartReducer";

interface CartContextType {
  items: Item[];
  dispatch: Dispatch<Action>;
}

const CartContext = React.createContext<CartContextType>({} as CartContextType);

export default CartContext;
