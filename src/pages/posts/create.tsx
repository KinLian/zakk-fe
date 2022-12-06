import { PostForm } from '@/components/Form';
import { requireLogin } from '@/guards';
import { useCreatePost } from '@/hooks';
import { FC } from 'react';

const CreatePostPage: FC = () => {
  const ctx = useCreatePost();
  return <PostForm {...ctx} />;
};

export const getServerSideProps = requireLogin;
export default CreatePostPage;
