import { IComment } from "@/interfaces";
import { Container } from "@nextui-org/react";
import { FC } from "react";
import { PostCard } from "./PostCard";

type PostDetailProps = {
  id: number;
  like: number;
  dislike: number;
  totalComment: number;
  title: string;
  content: string;
  posterName: string;
  comments: IComment[];
};

export const PostDetail: FC<PostDetailProps> = ({ comments, ...props }) => {
  return (
    <Container
      css={{ w: "75%", display: "flex", flexDirection: "column", gap: "2em" }}
    >
      <PostCard isPressable={false} {...props} />
      {/* the comments container */}
      <Container>
        {comments.map((comment, index) => (
          <div key={index}>isilah dengan container comment</div>
        ))}
      </Container>
    </Container>
  );
};
