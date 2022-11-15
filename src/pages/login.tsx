import { LoginForm } from "components/LoginForm"
import Link from 'next/link'
import tw from 'twin.macro';


const Login = () => {
    return <div tw="w-full h-screen flex flex-col justify-center items-center">
              <h1 css={[tw`text-center text-white font-bold text-5xl`]}>
                Login
              </h1>
             <LoginForm />
             <p>{"Don't have an account?"} <Link href={"/signup"}>Sign Up</Link></p>
        </div>
}

export default Login