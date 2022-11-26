import { FC } from "react";
import dummyPosts from "./dummy.json";
import tw from "twin.macro";
import { Post } from "@/components/Posts";
import dummyComments from "./dummy_comments.json";
import { Comment } from "@/components/Comment";
import { CommentForm } from "@/components/Comment/CommentForm";

export async function getStaticPaths() {
  const paths = dummyPosts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return { paths: paths, fallback: "blocking" };
}

export async function getStaticProps(context: any) {
  const selectedPost = dummyPosts.filter(
    (post) => post.id == context.params.id
  );

  const postComments = dummyComments.filter(
    (comment) => comment.postId == context.params.id
  );

  return {
    props: {
      post: selectedPost,
      comments: postComments,
      id: context.params.id,
    },
  };
}

interface PostDetailsProps {
  post: any;
  id: number;
  comments: any;
}

const PostDetail: FC<PostDetailsProps> = ({ post, comments }) => {
  return (
    <main tw="bg-[#121212] w-full p-10 flex flex-col justify-center items-center">
      <Post {...post[0]} />
      <>
        <div tw="bg-[#181a1b] flex flex-col items-start gap-4 w-9/12 p-3">
          <CommentForm />
          {comments.length === 0 ? (
            <div tw="text-lg font-bold w-full flex items-center justify-center h-screen">
              There are no comments yet, be the first!
            </div>
          ) : (
            comments.map((comment: any) => <Comment key={comment.id} {...comment} />)
          )}
        </div>
      </>
    </main>
  );
};

export default PostDetail;
