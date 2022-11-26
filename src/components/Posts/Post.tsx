import { Button } from "../Button";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useState } from "react";
import {
  Container,
  ContentContainer,
  CreatedText,
  LikeContainer,
  Title,
} from "./style";
import Link from "next/link";
import { useRouter } from "next/router";

interface PostProps {
  id: number;
  like: number;
  poster: string;
  dislike: number;
  title: string;
  content?: string;
  postDate: string;
  comments: number;
}

export const Post: React.FC<PostProps> = ({
  id,
  like,
  poster,
  dislike,
  title,
  content,
  postDate,
  comments,
}) => {
  const [likeState, setLike] = useState(like);
  const [dislikeState, setDislike] = useState(dislike);
  const activeRegex = new RegExp(`/posts/${id}`);
  const router = useRouter();
  const isActive = activeRegex.test(router.asPath);


  const onLikeClick = (e: Event) => {
    e.stopPropagation();
    setLike(likeState + 1);
  };

  const onDislikeClick = (e: Event) => {
    e.stopPropagation();
    setDislike(dislikeState + 1);
  };

  return (
    <Link href={!isActive ? `posts/${id}` : "#"}>
      <Container>
        <LikeContainer>
          <Button
            hoverColor="#68B984"
            onClick={onLikeClick}
            icon={<AiOutlineArrowUp />}
          />
          <p>{likeState - dislikeState}</p>
          <Button
            hoverColor="#DC3535"
            onClick={onDislikeClick}
            icon={<AiOutlineArrowDown />}
          />
        </LikeContainer>
        <ContentContainer>
          <CreatedText>
            Posted by {poster}, {postDate} hours ago
          </CreatedText>
          <Title>{title}</Title>
          <p>{content}</p>
          <Button icon={<BiCommentDetail />}>{comments} Comments</Button>
        </ContentContainer>
      </Container>
    </Link>
  );
};
