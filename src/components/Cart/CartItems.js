// import Card from '../UI/Card';
import classes from "./Cart.module.css";
import Items from "./Items";

const CartItems = (props) => {
  return (
    <>
      {props.cartCtx.items.map((item) => (
        <>
          <div>
            <Items item = {item}/>
          </div>
          <div>
            <button className={classes.Button}>+</button>
            <button className={classes.Button}>-</button>
          </div>
        </>
      ))}
    </>
  );
};

export default CartItems;
