"use client";

import Form from "./Form";
import BrandIcon from "./BrandIcon";
import FormInput from "./FormInput";
import Button from "./Button";

function SingUpForm() {
  return (
    <div className="flex flex-col">
      <BrandIcon />
      <Form
        formHeading="sing up for your account"
        className="grid w-full grid-rows-5 px-6 py-3 md:grid-cols-2 md:grid-rows-4 lg:w-2/3"
      >
        <FormInput label="Name" name="name" type="text" />
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />

        <FormInput label="Confirm Password" name="password" type="password" />

        <Button
          type="submit"
          className="h-10 w-2/3 self-end justify-self-end tracking-wider md:col-start-2 md:-row-end-2"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SingUpForm;
