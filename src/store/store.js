import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice.js"
import modalReducer from "../features/Modal/ModalSlice.js";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
