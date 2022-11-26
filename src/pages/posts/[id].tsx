import { FC } from "react";
import dummyPosts from "./dummy.json";
import tw from "twin.macro";
import { Post } from "@/components/Posts";
import { Button } from "@/components/Button";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

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

  return {
    props: {
      post: selectedPost,
      id: context.params.id,
    },
  };
}

interface PostDetailsProps {
  post: any;
  id: number;
}

const PostDetail: FC<PostDetailsProps> = ({ post, id }) => {
  return (
    <main tw="bg-[#121212] w-full p-10 flex flex-col justify-center items-center">
      <Post {...post[0]} />
      <>
        <div tw="bg-[#181a1b] flex flex-col items-start gap-4 w-9/12 p-3">
          <p>Comment as John Doe</p>
          <textarea
            placeholder="Your Comments"
            tw="w-full px-2 leading-[4rem]"
          ></textarea>
          <>
            <div tw="flex gap-2">
              <p tw="font-medium">John Doe</p>
              <p>1 day ago</p>
            </div>
            <>
              i don’t pay any attention at all to how many books i read or how
              many chapters per day or any of that. I just always have a book
              going. When i finish one i start a new one. Sure i prefer longer
              books, but that’s because i like in depth stories that go on and
              on. So in my case the longer the better! As long as it’s good.
            </>
            <div tw="flex">
              <Button icon={<AiOutlineArrowUp />}> 200 </Button>
              <Button icon={<AiOutlineArrowDown />} />
            </div>
          </>
          <>
            <div tw="flex gap-2">
              <p tw="font-medium">John Dalton</p>
              <p>1 day ago</p>
            </div>
            <>
              i don’t pay any attention at all to how many books i read or how
              many chapters per day or any of that. I just always have a book
              going. When i finish one i start a new one. Sure i prefer longer
              books, but that’s because i like in depth stories that go on and
              on. So in my case the longer the better! As long as it’s good.
            </>
            <div tw="flex">
              <Button icon={<AiOutlineArrowUp />}> 200 </Button>
              <Button icon={<AiOutlineArrowDown />} />
            </div>
          </>
        </div>
      </>
    </main>
  );
};

export default PostDetail;
