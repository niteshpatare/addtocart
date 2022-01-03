import { cartAction } from "./cartSlice";
import axios from "axios";

export const fetchToCart = () => {
  return async (dispatch) => {
    const fetchDataFun = async () => {
      //show notification sending
      const url = "https://k2kitchen-default-rtdb.firebaseio.com/cart.json";
      const res = await axios.get(url);

      if (res.status === 200) {
        return res.data;
      } else throw new Error("Fetch response error");
    };
    try {
      const cartData = await fetchDataFun();
      if(!cartData) return;
      const cart = cartData.cart || [];
      const { totalQuantity, totalPrice } = cartData;
      dispatch(cartAction.fetchToCart({ cart, totalQuantity, totalPrice }));
      //show notification sent
    } catch (error) {
      //show notification error
      throw new Error("Fetching error");
      
    }
  };
};

export const sendToCart = ({ cart, totalQuantity, totalPrice }) => {
  return async () => {
    if (!cart.length) return;

    const sendDataFun = async () => {
      const url = "https://k2kitchen-default-rtdb.firebaseio.com/cart.json";
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.put(
        url,
        { cart, totalQuantity, totalPrice },
        config
      );
      if (res.status === 200) {
        //show notification sent
      }
    };
    try {
      await sendDataFun();
    } catch (error) {
      //show notification error
      throw new Error("Send error");
    }
  };
};

