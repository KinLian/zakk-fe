import { PostDetail } from "@/components/Post";
import { IPost } from "@/interfaces";
import { api } from "@/libs";
import { Container, Loading } from "@nextui-org/react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostDetailPage: NextPage = () => {
  const [data, setData] = useState<IPost>();
  const [commentsLength, setCommentsLength] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id;
      api
        .get(`/posts/${id}`)
        .then((data) => {
          setData(data.data.data);
          setCommentsLength(data.data.data.comments.length);
        })
        .then(() => setIsLoading(false));
    }
  }, [router.isReady]);

  return isLoading ? (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        h: "100vh",
      }}
    >
      <Loading size="xl">Please Wait</Loading>
    </Container>
  ) : (
    <PostDetail
      totalComment={commentsLength}
      posterName={data.poster.name}
      {...data}
    />
  );
};

export default PostDetailPage;
