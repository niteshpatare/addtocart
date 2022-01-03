import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartVisible = useSelector((state) => state.uiRed.showBadgeCart);
  const cart = useSelector((state) => state.cartRed.cart);
  const totalAmount = useSelector((state) => state.cartRed.totalPrice);
  const totalQuantity = useSelector((state) => state.cartRed.totalQuantity);
  return (
    <>
      {cartVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cart.length > 0 &&
              cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
          </ul>
          <div>
            Total Amount:{totalAmount} : Total Quantity:{totalQuantity}
          </div>
        </Card>
      )}
    </>
  );
};

export default Cart;
