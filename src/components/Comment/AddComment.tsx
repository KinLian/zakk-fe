import { IComment, IUser } from "@/interfaces";
import { Container } from "@nextui-org/react";
import { FC } from "react";
import { Button, Textarea, Text } from "@nextui-org/react";
import { useCreateComment } from "@/hooks/useCreateComment";

export const AddComment: FC = () => {
  const { comment, changeComment, createComment, loading } = useCreateComment();

  return (
    <Container
      id="comment"
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$8",
        w: "100%",
        px: "$0",
      }}
    >
      <Textarea
        placeholder="Add comment"
        minRows={5}
        value={comment}
        onChange={(e) => changeComment(e.target.value)}
        css={{ w: "100%", h: "$32" }}
      />
      <Container
        css={{ w: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button onClick={() => createComment()} auto css={{ w: "fit-content" }}>
          Send comment
        </Button>
      </Container>
    </Container>
  );
};
