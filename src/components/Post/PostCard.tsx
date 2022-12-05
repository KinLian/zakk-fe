import { FC } from "react";
import { Button, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

type PostCardprops = {
  id: number;
  like: number;
  dislike: number;
  totalComment: number;
  title: string;
  content: string;
  posterName: string;
  isPressable?: boolean;
};

export const PostCard: FC<PostCardprops> = ({
  id,
  title,
  content,
  like,
  dislike,
  totalComment,
  posterName,
  isPressable = true,
}) => {
  const router = useRouter();

  return (
    <Card
      isPressable={isPressable}
      onClick={() => {
        router.push(`/${id}`);
      }}
    >
      <Card.Header
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          w: "100%",
          p: "1em",
          fontSize: "$lg",
        }}
      >
        <Text b>{title} </Text>
        <Text>{posterName}</Text>
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
