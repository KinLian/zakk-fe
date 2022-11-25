import { Layout } from "@/components/Layout";
import { Post } from "@/components/Posts";
import type { NextPage } from "next";
import { useState } from "react";
import tw from "twin.macro";

const dummyPost = {
  like: 1000,
  poster: "JohnDoe",
  dislike: 0,
  title: "Who is John Doe?",
  content: "John Doe is a person who likes to eat",
  postDate: "7",
  comments: 100,
};

const Home: NextPage = () => {
  const [hide, setHide] = useState(false);

  return (
    <Layout>
      <main tw="px-5 h-screen flex flex-col justify-center items-center">
        <Post {...dummyPost} />
      </main>
    </Layout>
  );
};

export default Home;
