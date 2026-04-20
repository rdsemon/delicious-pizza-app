"use clinet";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getTotalPrice } from "@/lib/features/cart/cartSlice";
import CurrencyConverter from "./CurrencyConverter";

function Checkout() {
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="flex flex-col space-y-4 divide-y-2 divide-amber-300 rounded-md px-3 py-2 shadow-md">
      <div className="bg-primary px-2 py-1">
        <span className="font-semibold">Total</span>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <span>Total</span>
          <span>
            <CurrencyConverter price={totalPrice} />
          </span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>0</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{totalPrice}</span>
        </div>
      </div>

      <div>
        <Button className="h-10 w-full tracking-widest">checkout</Button>
      </div>
    </div>
  );
}

export default Checkout;
