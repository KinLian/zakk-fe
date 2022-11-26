import { FC } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Button } from "../Button";
import tw from "twin.macro";

interface CommentProps {
  content: string;
  dislike: number;
  like: number;
  postId: number;
  commenterUsername: string;
  postDate: string;
}

export const Comment: FC<CommentProps> = ({
  content,
  dislike,
  like,
  commenterUsername,
  postDate,
}) => {
  return (
    <>
      <div tw="flex gap-2">
        <p tw="font-medium">{commenterUsername}</p>
        <p>{postDate} ago</p>
      </div>
      <>{content}</>
      <div tw="flex">
        <Button icon={<AiOutlineArrowUp />}> {like - dislike} </Button>
        <Button icon={<AiOutlineArrowDown />} />
      </div>
    </>
  );
};
