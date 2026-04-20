"use client";
import pizzaImage from "../../public/images/bbq-chicken.jpg";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import CurrencyConverter from "./CurrencyConverter";

import {
  increaseItem,
  decreaseItem,
  deleteItem,
  getItemTotal,
} from "@/lib/features/cart/cartSlice";

function CartIem({ pizza }) {
  const dispatch = useDispatch();

  const price = getItemTotal(pizza);

  return (
    <div className="text-secondary hover:bg-primary/50 grid grid-cols-[100px_1fr_1fr_1fr_1fr] items-center px-3 py-2 text-center text-lg shadow-md transition text-shadow-md hover:translate-y-2 md:grid-cols-5">
      <div className="mx-auto">
        <Image
          src={pizzaImage}
          alt="pizzA1"
          className="h-20 w-20 object-cover"
        />
      </div>
      <span className="text-base">{pizza.name}</span>
      <div className="flex items-center justify-between space-x-3 px-3 py-2">
        <button
          className="bg-primary text-secondary hover:bg-primary/75 inline-block h-8 w-12 cursor-pointer rounded-md"
          onClick={() => dispatch(increaseItem(pizza._id))}
        >
          +
        </button>
        <span>{pizza.quantity}</span>
        <button
          className="bg-primary text-secondary hover:bg-primary/75 inline-block h-8 w-12 cursor-pointer rounded-md text-center"
          onClick={() => dispatch(decreaseItem(pizza._id))}
        >
          -
        </button>
      </div>

      <CurrencyConverter price={price} />

      <span className="flex items-center justify-center">
        <MdDelete
          className="fill-secondary hover:fill-red block h-10 w-6 transition-all"
          onClick={() => dispatch(deleteItem(pizza._id))}
        />
      </span>
    </div>
  );
}

export default CartIem;
