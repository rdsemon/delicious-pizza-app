"use client";
import { useState } from "react";

export function useMobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu((open) => !open);
  }

  return { setOpenMenu, openMenu, handleOpenMenu };
}
