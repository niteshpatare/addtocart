import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  addOrRemCart: false,
};
const cartSlice = createSlice({
  name: "cartRed",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      state.addOrRemCart = true;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        newItem.total = newItem.price;
        state.totalPrice += newItem.price;
        state.cart.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.total = newItem.price * existingItem.quantity;
        state.totalPrice += existingItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const removeItemprice = action.payload.price;
      const existingItem = state.cart.find((item) => item.id === id);
      state.totalQuantity--;
      state.addOrRemCart = true;
      debugger;
      if (existingItem.quantity === 1) {
        state.totalPrice -= removeItemprice;
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
        state.totalPrice -= existingItem.price;
      }
    },
    fetchToCart(state, action) {
      state.cart = action.payload.cart;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
