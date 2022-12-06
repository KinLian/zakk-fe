import { IComment, IUser } from "@/interfaces";
import { Container } from "@nextui-org/react";
import { FC } from "react";
import { Button, Textarea, Text } from "@nextui-org/react";
import { useCreateComment } from "@/hooks/useCreateComment";
import { useUpdateComment } from "@/hooks/useUpdateComment";
import { commentType } from "./Comment";

export type updateComment = {
  data: commentType;
  setIsUpdating: any;
}

export const UpdateComment: FC<updateComment> = ({data, setIsUpdating}) => {
  const { content, changeComment, updateComment, loading } = useUpdateComment(data);

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
        value={content.content}
        onChange={(e) => changeComment(e.target.value)}
        css={{ w: "100%", h: "$32" }}
      />
      <Container
        css={{ w: "100%", display: "flex", justifyContent: "flex-end", gap: "$4" }}
      >
        <Button onClick={() => setIsUpdating(false)} auto bordered css={{ w: "fit-content" }}>Cancel</Button>
        <Button onClick={() => updateComment()} auto css={{ w: "fit-content" }}>
          Edit comment
        </Button>
      </Container>
    </Container>
  );
};
