import React, { Dispatch } from "react";

interface CartContextType {
  items: Item[];
  dispatch: Dispatch<Action>;
}

const CartContext = React.createContext<CartContextType>({} as CartContextType);

export default CartContext;
