import { Form } from "@/components/Form";
import { LoginForm } from "@/components/LoginForm";
import { login } from "@/service";
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
    <div tw="w-full h-screen gap-5 flex flex-col justify-center items-center">
      <h1 css={[tw`text-center text-white font-bold text-5xl`]}>Login</h1>
      <Form inputs={inputData} onSubmit={onSubmit} submitText={"Login"} />
      <p>
        {"Don't have an account?"} <Link href={"/signup"}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
