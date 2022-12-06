import { formatDate } from "@/utils";
import { Avatar, Button, Container, Text } from "@nextui-org/react";
import { FC, useState } from "react";
import { UpdateComment } from "./UpdateComment";

type CardCommentProps = {
  name: string;
  content: string;
  created_at: string;
  title: string;
  id: number;
  currentUserId?: number;
  commenterId: number;
};

export const CardComment: FC<CardCommentProps> = ({
  id,
  name,
  content,
  created_at,
  commenterId,
  currentUserId,
}) => {
  const isMyComment = currentUserId && currentUserId === commenterId;
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  return !isUpdating ? (
    <Container
      css={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Avatar text={name} size="xl" />
        <div
          style={{
            marginLeft: "1rem",
          }}
        >
          <Text h3 css={{ marginBottom: "0px", fontWeight: 700 }}>
            {name}
          </Text>
          <Text>{formatDate(created_at)}</Text>
        </div>
      </div>

      <Text
        css={{
          marginTop: "1rem",
        }}
      >
        {content}
      </Text>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {isMyComment && (
          <>
            <Button flat auto animated onClick={() => setIsUpdating(true)}>
              Edit
            </Button>
            <Button
              onClick={() => {}}
              color="error"
              css={{ marginLeft: "1rem" }}
              flat
              animated
              auto
            >
              {/* {loading ? <Loading size="sm" /> : 'Hapus'} */}
              Hapus
            </Button>
          </>
        )}
      </div>
    </Container>
  ) : (
    <UpdateComment
      data={{ content: content, commenterId: commenterId, id: id }}
      setIsUpdating={setIsUpdating}
    />
  );
};
