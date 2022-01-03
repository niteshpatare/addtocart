import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, description, quantity } = props;
  const dispatch = useDispatch();
  const onAddToCartHandler = () => {
    const item = {
      id,
      title,
      price,
      description,
      quantity,
    };
    dispatch(cartAction.addToCart(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
