import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceAction } from '../../store/uiSlice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const badgeCartHandler = () =>{
    dispatch(uiSliceAction.showBadge())
  }
  const totalQuantity = useSelector(state=>state.cartRed.totalQuantity);
  return (
    <button onClick={badgeCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
