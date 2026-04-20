import Link from "next/link";

const btnVarient = {
  primary:
    "md:px-4 md:py-3  md:tracking-widest  md:font-semibold bg-primary hover:bg-primary/75",
  secondary:
    "md:px-2 md:py-1 px-3 py-2  bg-primary hover:bg-primary/50 md:font-semibold",
  tertiary:
    "md:px-3 md:py-1 px-3 py-2 rounded-md border border-primary hover:bg-primary/50 md:tracking-wider md:font-semibold",
};
function LinkButton({ children, btnLink, btnSize, className, onclick }) {
  return (
    <Link
      href={`${btnLink}`}
      className={`${btnVarient[btnSize]} block ${className} text-secondary rounded-md text-center uppercase transition-all`}
      onClick={onclick}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
