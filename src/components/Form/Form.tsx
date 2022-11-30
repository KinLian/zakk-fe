import { useForm } from "react-hook-form";
import { FC } from "react";
import { Button } from "../Button";
import Input from "../Input/Input";
import tw, { styled } from "twin.macro";

interface FormProps {
  className?: string;
  onSubmit: (data: object) => any;
  inputs: any[];
  submitText: string;
}

const Form: FC<FormProps> = ({ className, onSubmit, inputs, submitText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input, index) => (
        <Input key={index} register={register} errors={errors} {...input} />
      ))}
      <Button tw="self-end text-black mt-5 bg-[#FFADBC]">{submitText}</Button>
    </form>
  );
};

const StyledForm = styled(Form)`
  ${tw`
    p-5
    w-full md:w-9/12 
    flex 
    flex-col 
    bg-[#181a1b]
  `}
`;

export { StyledForm as Form };
