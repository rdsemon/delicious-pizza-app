import Link from "next/link";

function TextLink({ children, herf }) {
  return (
    <Link href={herf} className="text-secondary cursor-pointer hover:underline">
      {children}
    </Link>
  );
}

export default TextLink;
