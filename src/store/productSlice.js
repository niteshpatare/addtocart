import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "productRed",
  initialState: initialProductState,
  reducers: {
    fetchProducts(state, action) {
      for (let i=0;i<action.payload.products.length;i++) {
        state.products.push(action.payload.products[i]);
      }
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice;
