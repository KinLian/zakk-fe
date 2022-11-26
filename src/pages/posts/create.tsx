import { Form } from "@/components/Form";
import { NextPage } from "next";
import tw from "twin.macro";

const CreatePost: NextPage = () => {


  const onSubmit = (data: object) => console.log(data);
  const inputData = [
    {
      label: "Title",
      id: "title",
      type: "text",
      placeholder: "Title",
      validation: { required: "Please fill the title" },
    },
    {
      label: "Text",
      id: "content",
      type: "textarea",
      placeholder: "Text (Optional)",
    },
  ];

  return (
    <main tw="w-full items-center flex-col justify-center h-full flex gap-5">
      <h1 tw="font-bold text-3xl">Create Post</h1>
      <Form submitText="Post" inputs={inputData} onSubmit={onSubmit} />
    </main>
  );
};

export default CreatePost;
