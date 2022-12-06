import { IComment, IUser } from "@/interfaces";
import { Container } from "@nextui-org/react";
import { FC } from "react";
import { Button, Text } from "@nextui-org/react";

export type commentType = {
  id: string;
  content: string;
  like: number;
  dislike: number;
  commenter: {
    name: string;
    id: number;
    email: string;
  }
  updated_at: string;
  created_at: string;
};

export const Comment: FC<commentType> = ({
  id,
  content,
  like,
  dislike,
  commenter,
}) => {

  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
        border: '1px solid #ccc',
        px: "$12",
        py: "$8",
        borderRadius: "$xs",
      }}
    >
      <Text css={{ fontWeight: "$bold", fontSize: "$xl" }}>
        {commenter.name}
      </Text>
      <Text css={{ mt: "$1" }}>{content}</Text>
      <Container
        css={{
          display: "flex",
          gap: "0.5em",
          py: "$8",
          px: "$0",
          borderRadius: "$sm",
        }}
      >
        <Button auto color={"success"} css={{ w: "fit-content" }}>
          {like} Likes
        </Button>
        <Button auto color={"error"} css={{ w: "fit-content" }}>
          {dislike} Dislikes
        </Button>
      </Container>
    </Container>
  );
};
