export const currencyConverterFn = (number, currencyType) => {
  let price = number;

  const rates = {
    USD: 1,
    BDT: 121.33,
  };

  if (currencyType === "BDT") {
    price = number * rates.BDT;
  } else {
    price = number * rates.USD;
  }

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: currencyType,
  }).format(Math.round(price));

  return currency;
};
