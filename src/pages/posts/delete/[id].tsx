import { protectUpdatePost } from '@/guards';
import { useDeletePost } from '@/hooks';
import { FC } from 'react';

const DeletePostPage: FC = () => {
  const { deletePost } = useDeletePost();

  return (
    <>
      <h1>Delete Post</h1>
      <button onClick={deletePost}>Delete</button>
    </>
  );
};

export const getServerSideProps = protectUpdatePost;

export default DeletePostPage;
