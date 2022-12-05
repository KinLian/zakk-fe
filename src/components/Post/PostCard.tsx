import { FC } from "react";
import { Button, Card, Text } from "@nextui-org/react";

type PostCardprops = {
  id: number;
  like: number;
  dislike: number;
  totalComment: number;
  title: string;
  content: string;
  posterEmail: string;
};

export const PostCard: FC<PostCardprops> = ({
  title,
  content,
  like,
  dislike,
  totalComment,
  posterEmail,
}) => {
  return (
    <Card isPressable>
      <Card.Header
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          w: "100%",
          p: "1em",
          fontSize : "$lg"
        }}
      >
        <Text b>
          {title}{" "}
        </Text>
        <Text>{posterEmail}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ p: "2em" }}>
        <Text>{content}</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer css={{ gap: "1em" }}>
        <Button auto color={"success"}>
          <Text> {like} Likes </Text>
        </Button>
        <Button auto color={"error"}>
          <Text> {dislike} Dislikes</Text>
        </Button>
        <Button auto>
          {" "}
          <Text> {totalComment} Comments </Text>
        </Button>
      </Card.Footer>
    </Card>
  );
};
