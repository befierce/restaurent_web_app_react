import classes from "./Cart.module.css";

const CartTotal = (props) => {
  return (
    <>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{props.totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </>
  );
};

export default CartTotal;
