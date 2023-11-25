import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";


const MealItemForm = (props) => {
  const cardCtx = useContext(CartContext);

  
  // console.log("",amount)
  const addItemToCart = (event)=>{
    event.preventDefault();
    const amount = document.getElementById('amount_' + props.id).value
    cardCtx.addItem({...props.item,amount:amount});
    
  }
  return(
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
            id: 'amount_' + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
