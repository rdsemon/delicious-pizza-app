import generateMetadata from "@/lib/metadata";
import PizzaCard from "../components/PizzaCard";
import { getAllpizza } from "@/lib/apiService";

export const metadata = generateMetadata("Menu");

const pizzaData = await getAllpizza();

const {
  data: { data: pizzas },
} = pizzaData;

function MenuPage() {
  return (
    <div className="px-2 py-3 md:px-8">
      {pizzas.map((pizza) => (
        <PizzaCard pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}

export default MenuPage;
