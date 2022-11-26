import { Button } from "@/components/Button";
import { Post } from "@/components/Posts";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import tw from "twin.macro";
import dummyPosts from "./dummy.json";

const Posts: NextPage = () => {
  const [active, setActive] = useState("Trending Posts");

  return (
    <main tw="bg-[#121212] w-full flex flex-col justify-center items-center">
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
      {dummyPosts.length === 0 ? <div tw='text-lg font-bold w-full flex items-center justify-center h-screen'>
        There are no post yet, be the first!
      </div>  :  dummyPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </main>
  );
};

export default Posts;
