import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { login } from "@/service";
import tw from 'twin.macro'
import { useRouter } from "next/router";

const LoginForm = () => {

    const router = useRouter();

    const onSubmit = async (data:object) => {
        const isLoggedIn = await login(data)
        isLoggedIn ? router.replace("/") : null;
    }
    
    const {register, handleSubmit, formState: {errors}} = useForm();

    return <form onSubmit={handleSubmit(onSubmit)} tw='w-full flex-col flex items-center'>
        <Input label="Email" 
                id="email" 
                type="email"
                register={register} 
                placeholder={"john@doe.com"} 
                errors={errors}
                validation={{required:"Please fill the email"}}/>
        <Input label="Password" 
                id="password" 
                type="password"
                register={register} 
                placeholder={"secret password"} 
                errors={errors}
                validation={{required:"Please fill the password"}}/>
        <input type={"submit"} value="Login"/>
    </form>
}

export {LoginForm}