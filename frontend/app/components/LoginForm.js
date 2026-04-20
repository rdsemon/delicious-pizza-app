import BrandIcon from "./BrandIcon";
import Form from "./Form";
import FormInput from "./FormInput";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import TextDivider from "./TextDivider";

import TextLink from "./TextLink";

function LoginForm() {
  return (
    <div>
      <BrandIcon />
      <Form
        formHeading="login to you account"
        className="grid w-full grid-cols-1 grid-rows-3 lg:w-1/2"
      >
        <FormInput label="Email" name="email" type="email" />

        <FormInput label="Password" name="password" type="password" />

        <Button
          type={"submit"}
          className="h-10 w-1/3 self-end justify-self-end tracking-wider"
        >
          Login
        </Button>
        <TextDivider text="or" />

        <div className="flex flex-col justify-center gap-y-7">
          <div className="mx-auto">
            <h6 className="text-secondary font-semibold">Login With...</h6>
          </div>
          <div className="flex justify-center">
            <button
              aria-label="Login with Google"
              className="bg-primary hover:bg-primary/75 group flex w-full cursor-pointer items-center justify-center rounded-md transition-all"
            >
              <FcGoogle className="h-10 w-10 transition-all group-hover:-translate-x-10" />
              <span className="text-secondary max-w-0 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:h-auto group-hover:max-w-[200px] group-hover:opacity-100">
                Login With Google
              </span>
            </button>
          </div>
          <div className="text-secondary flex justify-between gap-x-4">
            <TextLink herf={""}>Forgot Password</TextLink>

            <TextLink herf={"/signup"}>Create New Account</TextLink>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
