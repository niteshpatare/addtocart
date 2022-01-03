import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
const store = configureStore({
  reducer: {
    uiRed: uiSlice.reducer,
    cartRed: cartSlice.reducer,
    productRed: productSlice.reducer,
  },
});

export default store;
