import { FC } from "react";

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
        <div style={{display: "block"}}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} {...register(id,validation)} />
            {(errors && errors[id]) && <p>{errors[id].message}</p>}
        </div>
    )
}

export default Input