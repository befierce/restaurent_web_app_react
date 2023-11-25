 import CartContext from "./cart-context";
import { useState } from "react";
//this function is to manage the context data and provide that data to all componnents

const CartProvider = props=>{
    const [items,updateItems] = useState([]);
    const addItemToCartHandler = (item) => {
        const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
    
        if (itemIndex !== -1) {
            updateItems((prevItems) => {
                const updatedItems = [...prevItems];
                const updatedItem = {
                    ...updatedItems[itemIndex],
                    amount: updatedItems[itemIndex].amount + 1 
                };
                updatedItems[itemIndex] = updatedItem;
                return updatedItems;
            });
        } else {
            updateItems((prevItems) => [...prevItems, { ...item, amount: 1 }]);
        }
    };
    const removeItemFromCartHandler = (id)=>{

    }

    const cartContext = {
        items: items || [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    console.log("here is the cart context",cartContext)
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;