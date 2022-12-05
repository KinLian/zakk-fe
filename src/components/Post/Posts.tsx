import { usePost } from "@/hooks/usePosts";
import { FC } from "react";
import { Loading } from "@nextui-org/react";

export const Posts: FC = () => {
  const { loading, error, posts } = usePost();

  return loading ? <Loading size="xl">Please Wait</Loading> : <></>;
};
