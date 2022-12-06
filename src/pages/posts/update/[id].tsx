import { PostForm } from '@/components/Form';
import { protectUpdatePost } from '@/guards';
import { useUpdatePost } from '@/hooks';
import { FC } from 'react';

const UpdatePostPage: FC = () => {
  const ctx = useUpdatePost();
  return <PostForm {...ctx} isDetail />;
};

export const getServerSideProps = protectUpdatePost;

export default UpdatePostPage;
