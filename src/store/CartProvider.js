import CartContext from "./cart-context";

//this function is to manage the context data and provide that data to all componnents

const CartProvider = props=>{
    const addItemToCartHandler = (item)=>{

    }
    const removeItemFromCartHandler = (id)=>{

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;