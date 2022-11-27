import { Form } from "@/components/Form";
import { Container, H1 } from "@/styles/base";
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
    <Container>
      <H1>Create Post</H1>
      <Form submitText="Post" inputs={inputData} onSubmit={onSubmit} />
    </Container>
  );
};

export default CreatePost;
