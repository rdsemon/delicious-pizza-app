"use client";
import Image from "next/image";
import LinkButton from "./LinkButton";
import AddToCart from "./AddToCart";

import CurrencyConverter from "./CurrencyConverter";
function PizzaDetailsCard({ pizza }) {
  const url = "http://127.0.0.1:3000/static";

  const {
    name,
    price,
    description,
    ingredients,
    imageUrl,
    isVegetarain,
    isSpicy,
    ratingsAverage,
    ratingQuantity,
    category,
  } = pizza;

  return (
    <div className="flex min-h-screen flex-col px-8 py-4 md:gap-y-12">
      <div className="ite borde flex flex-col gap-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:gap-5 md:px-4 md:py-2">
          <div className="relative mx-auto h-[300px] w-full md:h-[400px] md:max-w-[300px] lg:max-w-[500px]">
            <Image
              src={`${url}${imageUrl}`}
              alt="Pizza"
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="bg-primary/55 text-secondary flex flex-col gap-y-3 px-3 py-2 md:h-[400px] md:w-1/2">
            <span className="font-semibold">{name}</span>
            <span className="capitalize">
              Made with {ingredients.join(" , ")}
            </span>
            <span className="tracking-wider capitalize">{description}</span>
            <span>{ratingsAverage}</span>
            <span>{ratingQuantity}</span>
            <span>{isSpicy ? "Spaicy" : "Not-Sapicy"}</span>
            <span>{isVegetarain ? "Vagetarian" : "NoVagetarain"}</span>
            <CurrencyConverter price={price} />
            <span>{category}</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 px-4 py-2 md:w-2/4 md:flex-row md:justify-end md:gap-x-4 md:self-end lg:w-2/3 lg:justify-end lg:gap-x-6">
          <LinkButton
            btnSize="tertiary"
            className="lg:h-[36px] lg:w-40"
            btnLink="/menu"
          >
            Back to menu
          </LinkButton>

          <AddToCart pizza={pizza} />
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-1 md:px-8 md:py-4">
        <h1 className="border-b-primary self-center border-b uppercase md:text-5xl md:tracking-tight">
          Reviews
        </h1>
        <div className="flex items-center md:gap-x-4">
          <Image
            src={"/images/bbq-chicken.jpg"}
            alt="pizza"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span>This is nice</span>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetailsCard;
