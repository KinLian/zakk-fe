import { IComment } from "@/interfaces";
import { Container, Button } from "@nextui-org/react";
import { FC, useState } from "react";
import { AddComment } from "../Comment/AddComment";
import { Comment, commentType } from "../Comment/Comment";
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
      
      <Container css={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        {comments.map((comment, index) => (
          <Comment {...comment} />
        ))}
        <AddComment />
      </Container>
    </Container>
  );
};
