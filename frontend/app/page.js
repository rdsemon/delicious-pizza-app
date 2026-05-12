import Image from "next/image";

import bg from "../public/images/banner2.jpg";
import LinkButton from "./components/LinkButton";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={bg}
        alt="Banner"
        fill
        className="contrast-less object-cover object-center brightness-75"
        placeholder="blur"
        quality={80}
      />

      <div className="-trnaslate-y-1/2 absolute top-1/3 left-1/2 z-10 flex h-1/2 w-full -translate-x-1/2 flex-col items-center justify-center space-y-4 px-4 py-2 shadow-xl md:space-y-6">
        <h1 className="text-primary px-2 py-3 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Welcome To Delicious Pizza
        </h1>

        <LinkButton
          btnLink={"/menu"}
          btnSize="primary"
          className="w-1/2 px-3 py-2 md:w-1/3 md:font-bold lg:w-72 lg:px-3 lg:py-2 lg:text-2xl"
        >
          Explore Pizzas
        </LinkButton>
      </div>
    </div>
  );
}

export default Home;
