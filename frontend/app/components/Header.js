"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
import { useIsHome } from "@/lib/hooks/useIsHome";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((open) => !open);
  }

  function closeMenu() {
    return setOpenMenu(false);
  }

  const isHome = useIsHome();

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [openMenu]);

  return (
    <header
      className={`relative z-100 overflow-hidden ${openMenu ? "h-screen" : ""} md:h-auto ${!isHome ? "md:bg-primary" : ""}`}
    >
      {!openMenu && (
        <div className="flex justify-between px-3 py-2 md:hidden">
          <button onClick={handleOpenMenu}>
            <RxHamburgerMenu className="text-primary bg-primary/25 h-15 w-15 font-bold" />
          </button>
        </div>
      )}

      <div
        className={`${openMenu ? "-translate-x-0" : "-translate-x-full"} bg-primary/25 mx-auto flex w-full flex-col space-y-10 px-8 py-4 backdrop-blur-sm transition-transform duration-300 ease-in-out md:max-w-7xl md:translate-0 md:flex-row md:items-center md:justify-between md:space-y-0 md:bg-transparent md:px-4 md:py-2 md:backdrop-blur-none`}
      >
        <div className="flex items-center justify-between">
          <Logo closeMenu={closeMenu} />
          <button onClick={handleOpenMenu} className="md:hidden">
            <RxCross1 className="text-primary h-10 w-10" />
          </button>
        </div>
        <Navigation closeMenu={closeMenu} />
      </div>
    </header>
  );
}

export default Header;
