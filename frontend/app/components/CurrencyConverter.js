"use client";

import { currencyConverterFn } from "@/lib/helperFunc";
import { setCurrency } from "@/lib/features/cart/currencySlice";
import { useDispatch, useSelector } from "react-redux";

function CurrencyConverter({ price }) {
  const currency = useSelector((state) => state.currency.currency);

  const dispatch = useDispatch();

  return (
    <div className="flex lg:space-x-3">
      <span className="flex-1 text-sm">
        {currencyConverterFn(price, currency)}
      </span>
      <select
        name=""
        id=""
        className="text-sm"
        value={currency}
        onChange={(e) => dispatch(setCurrency(e.target.value))}
      >
        <option value="BDT">BDT</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default CurrencyConverter;
