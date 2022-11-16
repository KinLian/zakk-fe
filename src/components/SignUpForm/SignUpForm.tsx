import { FC } from "react"
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { signup } from "../../service";
import { handleResponse,compose } from "@/utils";
import tw from 'twin.macro'


const SignUpForm : FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async (data:object) => await signup(data,compose(alert,handleResponse))

    return <form onSubmit={handleSubmit(onSubmit)} tw='w-full flex-col flex items-center'>
        <Input label="Email" 
                id="email" 
                type="email"
                register={register} 
                placeholder={"john@doe.com"} 
                errors={errors}
                validation={{required:"Please fill the email"}}/>
        <Input label="Name" 
                id="name" 
                register={register} 
                placeholder={"John Doe"}
                errors={errors}
                validation={{required:"Please fill the name"}}/>
        <Input label="Username" 
                id="username" 
                register={register} 
                placeholder={"johndoe"}
                errors={errors}
                validation={{required:"Please fill the username"}}/>
        <Input label="Password" 
                id="password" 
                type="password"
                errors={errors}
                register={register} 
                placeholder={"secret password"} 
                validation={{required:"Please fill the password"}}/>
        <input type={"submit"} value="Sign Up"/>
    </form>
}

export default SignUpForm