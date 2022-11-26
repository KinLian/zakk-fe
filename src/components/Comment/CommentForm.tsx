import { Button } from "../Button";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import tw from "twin.macro";

export const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => console.log(data);

  return (
    <form tw="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Comment as John Doe"
        id="comment"
        type="textarea"
        register={register}
        errors={errors}
        validation={{ required: "Please fill the comment" }}
        placeholder="Your Comments"
      />
      <Button tw="self-end text-black mt-5 bg-[#FFADBC]">Comment</Button>
    </form>
  );
};
