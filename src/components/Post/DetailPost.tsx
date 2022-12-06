import { useAuth, usePost } from "@/hooks";
import { Container } from "@nextui-org/react";
import { FC } from "react";
import { AddComment } from "../Comment/AddComment";
import { Comment } from "../Comment/Comment";
import { CardPost } from "./CardPost";

export const DetailPost: FC = () => {
  const { post } = usePost();
  const { user } = useAuth();

  return (
    <Container>
      {post && <CardPost currentUserId={user?.id} isDetail post={post} />}
      <Container css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
        {post?.comments.map((i) => (
          <Comment {...i} />
        ))}
        <AddComment />
      </Container>
    </Container>
  );
};
