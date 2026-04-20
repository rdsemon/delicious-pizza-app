import { useIsHome } from "@/lib/hooks/useIsHome";
import Link from "next/link";

function Navigation({ closeMenu }) {
  const isHome = useIsHome();

  return (
    <nav className="basis-1/3 px-2 py-2">
      <ul className="h-screen space-y-25 md:flex md:h-auto md:items-center md:justify-around md:space-y-0 md:space-x-5">
        <li onClick={closeMenu}>
          <Link
            className={`${!isHome ? "text-secondary" : "text-primary"} hover:bg-primary/20 rounded-md px-3 py-1 font-semibold transition-all`}
            href={`/menu`}
          >
            Menu
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link
            className={`${!isHome ? "text-secondary" : "text-primary"} hover:bg-primary/20 rounded-md px-3 py-1 font-semibold transition-all`}
            href={`/cart`}
          >
            Cart
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link
            className={`${!isHome ? "text-secondary" : "text-primary"} hover:bg-primary/20 rounded-md px-3 py-1 font-semibold transition-all`}
            href={"/guest"}
          >
            Guest
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link
            className={`${!isHome ? "text-secondary" : "text-primary"} hover:bg-primary/20 rounded-md px-3 py-1 font-semibold transition-all`}
            href={`/login`}
          >
            Login
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link
            className={`${!isHome ? "text-secondary" : "text-primary"} hover:bg-primary/20 rounded-md px-3 py-1 font-semibold transition-all`}
            href={`/singUp`}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
