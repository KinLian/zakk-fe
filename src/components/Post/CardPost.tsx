import { useDeletePost } from "@/hooks";
import { IComment, IPostDetail } from "@/interfaces";
import { formatDate } from "@/utils";
import { Avatar, Button, Container, Loading, Text } from "@nextui-org/react";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { FC } from "react";

type CardPostProps = {
  post: Omit<IPostDetail, "comments"> & {
    comments?: IComment[];
  };
  isDetail?: boolean;
  currentUserId?: number;
};

export const CardPost: FC<CardPostProps> = ({
  post: { id, content, poster, created_at, title },
  isDetail = false,
  currentUserId,
}) => {
  const router = useRouter();
  const showedContent = isDetail ? content : content.slice(0, 200) + "...";
  const isPoster = currentUserId && currentUserId === poster.id;
  const detailAndPoster = isDetail && isPoster;
  const { deletePost, loading } = useDeletePost();
  return (
    <Container
      key={id}
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
        <Avatar text={poster.name} size="xl" />
        <div
          style={{
            marginLeft: "1rem",
          }}
        >
          <Text h3 css={{ marginBottom: "0px" }}>
            {title}
          </Text>
          <Text>
            by {poster.name} - {formatDate(created_at)}
          </Text>
        </div>
      </div>

      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(showedContent),
          }}
        />
      </div>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <>
          {!isDetail && (
            <Button onClick={() => router.push(`/posts/${id}`)}>
              Lihat Detail
            </Button>
          )}
          {detailAndPoster && (
            <>
              <Button
                auto
                css={{ w: "fit-content" }}
                onClick={() => router.push(`/posts/update/${id}`)}
              >
                Edit
              </Button>
              <Button
                onClick={deletePost}
                color="error"
                auto
                bordered
                css={{ w: "fit-content", marginLeft: "$8" }}
              >
                {loading ? <Loading size="sm" /> : "Delete"}
              </Button>
            </>
          )}
          {isDetail && (
            <Button auto bordered css={{ w: "fit-content", marginLeft: "$8" }} onClick={() => router.push("#comment")}>Comment</Button>
          )}
        </>
      </div>
    </Container>
  );
};
