import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";


//meal item recieves a single prop at a time
//this single props will be passed down to meal item form
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  // console.log("props passed to meal items",props)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default MealItem;
