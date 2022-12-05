import { PostDetail } from "@/components/Post";
import { IPost } from "@/interfaces";
import { api } from "@/libs";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const response = await api.get(`post/${query.id}`);

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
