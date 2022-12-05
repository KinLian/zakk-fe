import { usePost } from "@/hooks/usePosts";
import { FC } from "react";
import { Container, Loading,Text } from "@nextui-org/react";
import { EmptyPost } from "../EmptyContent";
import { PostCard } from "./PostCard";

export const Posts: FC = () => {
  const { loading, error, posts } = usePost();

  return loading ? (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        h: "100vh",
      }}
    >
      {" "}
      <Loading size="xl">Please Wait</Loading>{" "}
    </Container>
  ) : error ? (
    <EmptyPost />
  ) : (
    <Container
      css={{ w: "75%", display: "flex", flexDirection: "column", gap: "2em" }}
    >
    <Text b css={{fontSize:  "2em"}}>All Posts</Text>
      {posts!.map((post) => (
        <PostCard
          totalComment={post.comments?.length}
          posterName={post.poster.name}
          key={post.id}
          {...post}
        />
      ))}
    </Container>
  );
};
