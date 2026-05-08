import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const item = action.payload;

      const existingItem = state.cart.find((pizza) => pizza._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    increaseItem(state, action) {
      const item = state.cart.find((pizza) => pizza._id === action.payload);

      item.quantity++;
    },

    decreaseItem(state, action) {
      const item = state.cart.find((pizza) => pizza._id === action.payload);

      if (!item) {
        return;
      }

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        toast.warn("Minimum limit reach");
        item.quantity === 1;
      }
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((pizza) => pizza._id !== action.payload);

      toast.warning("Item removed from the cart");
    },
  },
});

export const { addItem, increaseItem, decreaseItem, deleteItem } =
  cartSlice.actions;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce(
    (acc, pizza) => acc + Math.ceil(pizza.price * pizza.quantity),
    0,
  );

export const getItemTotal = (pizza) => Math.ceil(pizza.price * pizza.quantity);

export default cartSlice.reducer;
