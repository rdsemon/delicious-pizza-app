import generateMetadata from "@/lib/metadata";
import Cart from "../components/Cart";

export const metadata = generateMetadata("Cart");

function CartPage() {
  return (
    <div className="">
      <Cart />
    </div>
  );
}

export default CartPage;
