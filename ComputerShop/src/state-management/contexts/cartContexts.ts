import React from "react"

interface CartContextType {
    item: items
    onAddtocart: 


}


const CartContext = React.createContext<CartContextType>({} as CartContextType);

export default CartContext;