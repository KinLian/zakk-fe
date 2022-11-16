import { SignUpForm } from "@/components/SignUpForm";
import { NextPage } from "next";
import tw from 'twin.macro';
import Link from 'next/link'


const SignUp : NextPage = () => {
    return <div tw="w-full h-screen flex flex-col justify-center items-center">
          <h1 css={[tw`text-center text-white font-bold text-5xl`]}>
                Sign Up
          </h1>
         <SignUpForm />
         <p>{"Already have an account?"} <Link href={"/login"}>Login</Link></p>
         </div>
}

export default SignUp