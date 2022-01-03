import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { showBadgeCart: false }
const uiSlice = createSlice({
  name: "uiRed",
  initialState: initialUiState,
  reducers: {
    showBadge: (state) => {
      state.showBadgeCart = !state.showBadgeCart;
    },
  },
});
export const uiSliceAction = uiSlice.actions;
export default uiSlice;
