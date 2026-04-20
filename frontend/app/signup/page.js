import generateMetadata from "@/lib/metadata";

import SingUpForm from "../components/SignUpForm";

export const metadata = generateMetadata("SinUp");

function SingUp() {
  return (
    <div>
      <SingUpForm />
    </div>
  );
}

export default SingUp;
