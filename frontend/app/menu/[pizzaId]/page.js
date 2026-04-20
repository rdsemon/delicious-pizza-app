import PizzaDetailsCard from "@/app/components/PizzaDetailsCard";
import { getOnePizza } from "@/lib/apiService";
async function PizzaDetails({ params }) {
  const { pizzaId } = await params;
  const pizzaData = await getOnePizza(pizzaId);

  const {
    data: { data: pizza },
  } = pizzaData;

  return (
    <div>
      <PizzaDetailsCard pizza={pizza} />
    </div>
  );
}

export default PizzaDetails;
