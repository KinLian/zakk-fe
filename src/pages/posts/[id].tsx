import { FC } from "react";
import dummyPosts from "./dummy.json";
import tw, { styled } from "twin.macro";
import { Post } from "@/components/Posts";
import dummyComments from "./dummy_comments.json";
import { Comment } from "@/components/Comment";
import { Form } from "@/components/Form";
import { Container } from "@/styles/base";
import { EmptyContent } from "@/components/EmptyContent/EmptyContent";

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

const CommentContainer = styled.div`
  ${tw`
    bg-[#181a1b] 
    flex 
    flex-col 
    items-start 
    gap-4 
    w-full md:w-9/12 
    p-3
  `}
`;

const PostDetail: FC<PostDetailsProps> = ({ post, comments }) => {
  const onSubmit = (data: object) => console.log(data);
  const inputData = [
    {
      label: "Comment as John Doe",
      id: "comment",
      type: "textarea",
      placeholder: "Your Comments",
      validation: { required: "Please fill the comment" },
    },
  ];

  return (
    <Container tw="h-full">
      <Post {...post[0]} />
      <>
        <CommentContainer>
          <Form
            tw="w-full"
            onSubmit={onSubmit}
            inputs={inputData}
            submitText={"Comment"}
          />
          {comments.length === 0 ? (
            <EmptyContent content="comment" />
          ) : (
            comments.map((comment: any) => (
              <Comment key={comment.id} {...comment} />
            ))
          )}
        </CommentContainer>
      </>
    </Container>
  );
};

export default PostDetail;
