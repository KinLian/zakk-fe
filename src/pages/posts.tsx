import { Button } from "@/components/Button";
import { Post } from "@/components/Posts";
import { NextPage } from "next";
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

const Posts: NextPage = () => {
  const [active, setActive] = useState("Trending Posts");

  return (
    <main tw="bg-[#121212] w-full gap-2 flex flex-col justify-center items-center">
      <div tw="font-medium mt-5 bg-[#181a1b] flex gap-3 p-3 w-9/12">
        <Button
          onClick={() => setActive("Trending Posts")}
          color={active === "Trending Posts" ? "#FFADBC" : ""}
        >
          Trending Posts
        </Button>
        <Button
          onClick={() => setActive("Your Posts")}
          color={active === "Your Posts" ? "#FFADBC" : ""}
        >
          {" "}
          Your Posts
        </Button>
      </div>

      <Post {...dummyPost} />
      <Post {...dummyPost} />
      <Post {...dummyPost} />
      <Post {...dummyPost} />
      <Post {...dummyPost} />
    </main>
  );
};

export default Posts;
