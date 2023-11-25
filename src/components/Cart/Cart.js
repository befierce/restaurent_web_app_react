import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";
import Card from "../UI/Card";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);
  return (
    <Modal onClick={props.onHideCart}>
      <Card>
        <CartItems cartCtx={cartCtx} />
        <CartTotal totalPrice={totalPrice} onHideCart={props.onHideCart} />
      </Card>
    </Modal>
  );
};

export default Cart;
