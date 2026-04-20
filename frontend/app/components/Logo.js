"use client";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../public/images/brandLogo.png";
import { useIsHome } from "@/lib/hooks/useIsHome";
import LinkButton from "./LinkButton";

function Logo({ setOpenMenu }) {
  const isHome = useIsHome();
  const closeMenu = () => setOpenMenu(false);
  return (
    <div className="flex items-center space-x-3 px-2 py-2">
      <div>
        <figure>
          <Link href={`/`} onClick={closeMenu}>
            <Image
              src={LogoImg}
              height={50}
              width={50}
              alt="brangLogo"
              className="rounded-full"
            />
          </Link>
        </figure>
      </div>

      <div>
        <LinkButton btnLink={`/`} onClick={closeMenu}>
          <h3
            className={`${!isHome ? "text-secondary" : "text-primary"} font-semibold hover:underline`}
          >
            Delicious Pizza Co
          </h3>
        </LinkButton>
      </div>
    </div>
  );
}

export default Logo;
