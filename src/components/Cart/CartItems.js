// import Card from '../UI/Card';
import classes from "./Cart.module.css";
import Items from "./Items";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);
  const increaseAmountHandler = (item) => {
    cartCtx.addItem(item)
  };
  const decreaseAmountHandler = (item) => {
    cartCtx.removeItem(item)
  };
  return (
    <>
      {props.cartCtx.items.map((item) => (
        <>
          <div>
            <Items item={item} />
          </div>
          <div>
            <button
              className={classes.Button}
              onClick={()=>increaseAmountHandler(item)}
            >
              +
            </button>
            <button
              className={classes.Button}
              onClick={()=>decreaseAmountHandler(item)}
            >
              -
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default CartItems;
