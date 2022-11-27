import { Form } from "@/components/Form";
import { login } from "@/service";
import { Container, H1 } from "@/styles/base";
import Link from "next/link";
import { useRouter } from "next/router";
import tw from "twin.macro";

const Login = () => {
  const router = useRouter();

  const onSubmit = async (data: object) => {
    const isLoggedIn = await login(data);
    isLoggedIn ? router.replace("/") : null;
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
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "secret password",
      validation: { required: "Please fill the password" },
    },
  ];

  return (
    <Container>
      <H1>Login</H1>
      <Form inputs={inputData} onSubmit={onSubmit} submitText={"Login"} />
      <p>
        {"Don't have an account?"} <Link href={"/signup"}>Sign Up</Link>
      </p>
    </Container>
  );
};

export default Login;
