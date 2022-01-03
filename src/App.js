import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendToCart, fetchToCart } from "./store/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { fetchToProduct } from "./store/productAction";
let initialCart = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartRed.cart);
  const totalQuantity = useSelector((state) => state.cartRed.totalQuantity);
  const totalPrice = useSelector((state) => state.cartRed.totalPrice);
  const addOrRemCart = useSelector((state) => state.cartRed.addOrRemCart);
  useEffect(() => {
    dispatch(fetchToCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchToProduct());
  }, [dispatch]);

  useEffect(() => {
    if (initialCart) {
      initialCart = false;
      return;
    }
    if (addOrRemCart) {
      dispatch(sendToCart({ cart, totalQuantity, totalPrice }));
    }
  }, [cart, totalQuantity, totalPrice, dispatch]);
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
