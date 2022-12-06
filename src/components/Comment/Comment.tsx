import { IComment, IUser } from "@/interfaces";
import { Container, Row } from "@nextui-org/react";
import { FC, useState } from "react";
import { Button, Text } from "@nextui-org/react";
import { boolean } from "zod";
import { UpdateComment } from "./UpdateComment";
import { useAuth } from "@/hooks";
import { useUpdateComment } from "@/hooks/useUpdateComment";

export type commentType = {
  id: string;
  content: string;
  like: number;
  dislike: number;
  commenter: {
    name: string;
    id: number;
    email: string;
  };
  updated_at: string;
  created_at: string;
};

export const Comment: FC<commentType> = (props) => {
  const { user } = useAuth();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  return !isUpdating ? (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
        border: "1px solid #ccc",
        px: "$12",
        py: "$8",
        borderRadius: "$xs",
      }}
    >
      <Text css={{ fontWeight: "$bold", fontSize: "$xl" }}>
        {props.commenter.name}
      </Text>
      <Text css={{ mt: "$1" }}>{props.content}</Text>
      <Container
        css={{
          display: "flex",
          justifyContent: "flex-end",
          py: "$8",
          px: "$0",
          borderRadius: "$sm",
          gap: "$8"
        }}
      >
        {props.commenter.email === user?.email && (
          <Button
            auto
            css={{ w: "fit-content" }}
            onClick={() => setIsUpdating(true)}
          >
            Edit
          </Button>
        )}
        {props.commenter.email === user?.email && (
          <Button auto css={{ w: "fit-content" }} color="error" bordered>
            Hapus
          </Button>
        )}
      </Container>
    </Container>
  ) : (
    <UpdateComment data={props} setIsUpdating={setIsUpdating} />
  );
};
