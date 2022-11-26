import { NextPage } from "next";
import tw from "twin.macro";
import Link from "next/link";
import { signup } from "@/service";
import { Form } from "@/components/Form";

const SignUp: NextPage = () => {
  const onSubmit = async (data: object) => {
    await signup(data);
  };

  const inputData = [
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "john@doe.com",
      validation: { required: "Please fill the email" },
    },
    {
      label: "Name",
      id: "name",
      type: "text",
      placeholder: "John Doe",
      validation: { required: "Please fill the name" },
    },
    {
      label: "Username",
      id: "username",
      type: "text",
      placeholder: "johndoe",
      validation: { required: "Please fill the username" },
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "secret password",
      validation: { required: "Please fill the password" },
    },
  ];

  return (
    <div tw="w-full gap-5 h-full flex flex-col justify-center items-center">
      <h1 css={[tw`text-center text-white font-bold text-5xl`]}>
        Sign Up
      </h1>
      <Form inputs={inputData} onSubmit={onSubmit} submitText={"Sign Up"} />
      <p tw="mt-5">
        {"Already have an account?"} <Link href={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
