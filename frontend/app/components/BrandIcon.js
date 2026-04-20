import brandLogo from "../../public/images/brandLogo.png";
import Image from "next/image";
function BrandIcon() {
  return (
    <div className="flex justify-center px-4 py-2">
      <Image
        src={brandLogo}
        alt="iconImage"
        width={90}
        height={90}
        className="rounded-full"
      />
    </div>
  );
}

export default BrandIcon;
