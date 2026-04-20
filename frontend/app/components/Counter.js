"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addToCart,
} from "../../lib/features/cart/cartSlice";
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  const product = {
    name: "pizza",
    price: 130,
  };

  console.log(cart);

  return (
    <div>
      <div className="flex space-x-3">
        <button className="border" onClick={() => dispatch(increment())}>
          +
        </button>
        <p>{count}</p>
        <button className="border" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Counter;
