import tw from "twin.macro";
import { Button } from "../Button";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

interface PostProps {
  like: number;
  poster: string;
  dislike: number;
  title: string;
  content?: string;
  postDate: string;
  comments: number;
}

export const Post: React.FC<PostProps> = ({
  like,
  poster,
  dislike,
  title,
  content,
  postDate,
  comments,
}) => {
  return (
    <div tw="py-5 my-3 px-3 flex bg-[#181a1b] w-9/12">
      <div tw="px-3 flex flex-col items-center">
        <Button icon={<AiOutlineArrowUp />} />
        <p>{like - dislike}</p>
        <Button icon={<AiOutlineArrowDown />} />
      </div>
      <div>
        <p tw="font-light text-sm">
          Posted by {poster}, {postDate} hours ago
        </p>
        <p tw="py-2 font-medium text-2xl">{title}</p>
        <p tw="py-1">{content}</p>
        <Button icon={<BiCommentDetail />}>{comments} Comments</Button>
      </div>
    </div>
  );
};
