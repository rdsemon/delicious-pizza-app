import Image from "next/image";

import LinkButton from "./LinkButton";
import CurrencyConverter from "./CurrencyConverter";
import AddToCart from "./AddToCart";

function PizzaCard({ pizza }) {
  const url = "http://127.0.0.1:3000/static";

  const { name, price, ingredients, imageUrl, _id } = pizza;
  return (
    <div className="flex flex-col px-4 py-2 sm:items-center sm:justify-center md:py-8">
      <div className="border-primary flex flex-col gap-x-8 border px-4 py-4 shadow-md sm:w-3/4 md:w-full md:flex-row xl:w-5/6">
        <div className="">
          <Image
            src={`${url}${imageUrl}`}
            alt="pizzaimage"
            width={100}
            height={100}
            className="w-full rounded-md object-cover md:h-28 md:w-48"
          />
        </div>

        <div className="mt-3 mb-4 md:relative md:mt-0 md:w-4/5">
          <div className="flex flex-col space-y-2 md:space-y-4">
            <div className="space-y-3 md:space-y-4">
              <p className="font-semibold uppercase">{name}</p>
              <p className="text-sm uppercase md:text-base">
                {ingredients.join(" , ")}
              </p>
            </div>

            <div className="md:absolute md:top-24 md:w-full lg:top-20">
              <div className="flex justify-between">
                <CurrencyConverter price={price} />
                <span>Review</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 md:w-1/2 md:justify-end md:gap-x-3 md:self-end lg:flex-row">
          <LinkButton
            btnLink={`menu/${_id}`}
            btnSize="tertiary"
            className="lg:h-[36px] lg:w-40"
          >
            View Details
          </LinkButton>
          <AddToCart pizza={pizza} />
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
