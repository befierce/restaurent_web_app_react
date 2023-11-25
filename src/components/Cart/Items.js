import classes from './Items.module.css';

const Items = (props) => {
  return (
    <>
      <div className={classes.itemName}>{props.item.name}</div>
      <div className={classes.priceAmountContainer}>
        <span className={classes.itemPrice}>${props.item.price}</span>
        <span className={classes.itemAmount}>x{props.item.amount}</span>
      </div>
    </>
  );
};

export default Items;
