import { useAuth, usePost } from "@/hooks";
import { Container } from "@nextui-org/react";
import { FC } from "react";
import { AddComment, AllComments } from "../Comment";
import { Loader } from "../Loader";
import { CardPost } from "./CardPost";

export const DetailPost: FC = () => {
  const { post, loading } = usePost();
  const { user } = useAuth();

  return !loading ? (
    <Container>
      {post && <CardPost currentUserId={user?.id} isDetail post={post} />}
      {post && (
        <AllComments comments={post.comments} currentUserId={user?.id} />
      )}
      {post && <AddComment />}
    </Container>
  ) : (
    <Container css={{h: "100vh"}}><Loader /></Container>
  );
};
