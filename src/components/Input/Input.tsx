import { FC } from "react";
import tw from 'twin.macro'

interface InputProps {
    id:string,
    label:string,
    type?:string,
    errors?:any,
    placeholder?:string,
    register?:any,
    validation?:object,
}

const Input : FC<InputProps> = ({label,type,errors,placeholder,register,validation,id}) => {
    return (
        <div tw="block w-1/2">
            <label tw="block">{label}</label>
            <input tw="text-black bg-white my-1 py-2 px-6 w-full" type={type} placeholder={placeholder} {...register(id,validation)} />
            {(errors && errors[id]) && <div tw="text-red-400">{errors[id].message}</div>}
        </div>
    )
}

export default Input