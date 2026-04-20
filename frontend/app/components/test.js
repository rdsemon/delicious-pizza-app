const conversionMultipliers = {
  BDT: 100,
  EUR: 5,
  USD: 1,
};
const currencyFormatter = (value, countryCode) => {
  const supportedCountries = Object.keys(conversionMultipliers);

  if (!supportedCountries.includes(countryCode)) {
    throw new Error("Not aviable for this country");
  }
  const multipliyer = conversionMultipliers[countryCode] || 1;

  const convertedValue = value * multipliyer;

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: countryCode,
  }).format(convertedValue);

  return currency;
};

export { currencyFormatter };
