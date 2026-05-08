import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/lib/features/cart/cartSlice";
import currencySlice from "./features/cart/currencySlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    currency: currencySlice,
  },
});

export default store;
