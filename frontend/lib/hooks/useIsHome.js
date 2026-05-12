"use client";
import { usePathname } from "next/navigation";
export function useIsHome() {
  const pathName = usePathname();
  return pathName === "/";
}
