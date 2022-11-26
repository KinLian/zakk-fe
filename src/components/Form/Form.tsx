import { useForm } from "react-hook-form";
import { FC } from "react";
import { Button } from "../Button";
import Input from "../Input/Input";
import tw from "twin.macro";

interface FormProps {
  onSubmit: (data: object) => any;
  inputs: any[];
  submitText: string;
}

export const Form: FC<FormProps> = ({ onSubmit, inputs, submitText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      tw="p-5 w-9/12 flex flex-col bg-[#181a1b]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputs.map((input, index) => (
        <Input key={index} register={register} errors={errors} {...input} />
      ))}
      <Button tw="self-end text-black mt-5 bg-[#FFADBC]">{submitText}</Button>
    </form>
  );
};
