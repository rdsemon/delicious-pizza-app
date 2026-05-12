import Image from "next/image";
import Link from "next/link";
import generateMetadata from "@/lib/metadata";

export const metadata = generateMetadata("not-found");
function NotFound() {
  return (
    <div className="flex h-2/3 flex-col items-center justify-center gap-y-8 px-2 py-4">
      <div className="w-full max-w-[800px]">
        <figure>
          <Image
            src={"/images/not-found.png"}
            alt="not-found"
            width={800}
            height={700}
            className="h-auto w-full object-contain"
            quality={100}
          />
        </figure>
      </div>

      <button className="bg-primary text-secondary hover:bg-primary/30 rounded px-4 py-2 font-medium tracking-wider transition-all">
        <Link href={"/"}>Return Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
