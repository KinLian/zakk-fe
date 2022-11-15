import Input from "components/Input/Input";
import { useForm } from "react-hook-form";
import { login } from "service/endpoint";
import {compose,handleResponse} from "utils"
import tw from 'twin.macro'

const LoginForm = () => {
    const onSubmit = async (data:object) => await login(data,compose(alert,handleResponse))
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