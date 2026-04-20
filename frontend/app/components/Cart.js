"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import CartIem from "./CartIem";
import Checkout from "./Checkout";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);

  return cartItems.length > 0 ? (
    <div className="flex flex-col gap-9 border md:flex-row md:px-4 md:py-2">
      <div className="basis-full md:basis-4/6 md:px-4 md:py-2">
        <div className="bg-primary text-secondary grid grid-cols-5 grid-rows-1 rounded-md px-3 py-2 text-center shadow-sm">
          <span>Image</span>
          <span>Name</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        {cartItems.map((pizza) => (
          <CartIem pizza={pizza} key={pizza._id} />
        ))}
      </div>
      <div className="md:w-1/4">
        <Checkout />
        <div>
          <Link href="/menu" className="text-blue-400 underline">
            Back To Menu
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>this page is empty</p>
    </div>
  );
}

export default Cart;
