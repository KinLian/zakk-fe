import { PostDetail } from "@/components/Post";
import { IPost } from "@/interfaces";
import { api } from "@/libs";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const { zakk } = parseCookies();
  console.log(zakk);
  const response = await api.get(`posts/${query.id}`, {
    headers: {
      Authorization: `Bearer ${zakk}`,
    },
  });


  return { props: { data: response.data.data } };
};

type PostDetailProps = {
  data: IPost;
};

const PostDetailPage: NextPage<PostDetailProps> = ({ data }) => {
  return (
    <PostDetail
      totalComment={data.comments.length}
      posterName={data.poster.name}
      {...data}
    />
  );
};

export default PostDetailPage;
