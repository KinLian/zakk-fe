import { Button } from "@/components/Button";
import { EmptyContent } from "@/components/EmptyContent/EmptyContent";
import { Post } from "@/components/Posts";
import { Container } from "@/styles/base";
import { NextPage } from "next";
import { useState } from "react";
import tw from "twin.macro";
import dummyPosts from "./dummy.json";
import * as S from "./index.style";

const Posts: NextPage = () => {
  const [active, setActive] = useState("Trending Posts");

  return (
    <Container tw="h-full">
      <S.HeaderContainer>
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
      </S.HeaderContainer>
      {dummyPosts.length === 0 ? (
        <EmptyContent content="post" />
      ) : (
        dummyPosts.map((post) => <Post key={post.id} {...post} />)
      )}
    </Container>
  );
};

export default Posts;
