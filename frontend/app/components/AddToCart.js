"use client";

import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cart/cartSlice";
import LinkButton from "./LinkButton";
import { toast } from "react-toastify";
function AddToCart({ pizza }) {
  const dispatch = useDispatch();

  const { name, imageUrl, price, _id, quantity, regularPrice } = pizza;

  function addToCart() {
    dispatch(addItem({ name, imageUrl, price, _id, quantity, regularPrice }));

    toast.success("Pizza added to the cart");
  }

  return (
    <LinkButton
      btnSize="secondary"
      className="lg:h-[36px] lg:w-40"
      btnLink="/cart"
      onclick={addToCart}
    >
      Add to cart
    </LinkButton>
  );
}

export default AddToCart;
