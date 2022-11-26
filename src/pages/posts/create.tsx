import { Button } from "@/components/Button";
import Input from "@/components/Input/Input";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import tw from "twin.macro";

const CreatePost: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => console.log(data);

  return (
    <main tw="w-full items-center flex-col justify-center h-full flex gap-5">
      <h1 tw="font-bold text-3xl">Create Post</h1>
      <>
        <form
          tw="p-5 w-9/12 flex flex-col bg-[#181a1b]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Title"
            id="title"
            type="text"
            register={register}
            placeholder={"Title"}
            errors={errors}
            validation={{ required: "Please fill the title" }}
          />
          <Input
            tw="h-[500px]"
            label="Text"
            id="content"
            type="textarea"
            register={register}
            placeholder={"Text (Optional)"}
            errors={errors}
          />
          <Button tw="self-end text-black mt-5 bg-[#FFADBC]">Post</Button>
        </form>
      </>
    </main>
  );
};

export default CreatePost;
