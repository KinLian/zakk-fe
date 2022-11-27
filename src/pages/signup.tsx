import { NextPage } from "next";
import tw from "twin.macro";
import Link from "next/link";
import { signup } from "@/service";
import { Form } from "@/components/Form";
import { Container, H1 } from "@/styles/base";

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
    <Container>
      <H1>Sign Up</H1>
      <Form inputs={inputData} onSubmit={onSubmit} submitText={"Sign Up"} />
      <p tw="mt-5">
        {"Already have an account?"} <Link href={"/login"}>Login</Link>
      </p>
    </Container>
  );
};

export default SignUp;
