import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((item) => {
          return <CartItem item={item} key={item.id}/>;
        })}
        {/* <CartItem item={cartItem} /> */}
      </ul>
    </Card>
  );
};

export default Cart;
