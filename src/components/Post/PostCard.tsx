import { FC } from "react";
import { Button, Card, Text } from "@nextui-org/react";

type PostCardprops = {
  id : number;
  like: number;
  dislike: number;
  totalComment: number;
  title: string;
  content: string;
  posterEmail : string;
};

export const PostCard: FC<PostCardprops> = ({
  title,
  content,
  like,
  dislike,
  totalComment,
}) => {
  return (
    <Card isPressable>
      <Card.Header>
        <Text b size={"lg"}>
          {title}{" "}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ p: "10px" }}>
        <Text>{content}</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Button>{like} Likes</Button>
        <Button>{dislike} Dislikes</Button>
        <Button>{totalComment} Comments</Button>
      </Card.Footer>
    </Card>
  );
};
