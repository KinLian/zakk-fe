import { usePosts } from '@/hooks';
import { FC } from 'react';
import { Loader } from '../Loader';
import { EmptyPost } from '../EmptyContent';
import { CardPost } from './CardPost';

export const AllPosts: FC = () => {
  const { posts, loading } = usePosts();

  if (loading) return <Loader />;
  if (posts.length === 0) return <EmptyPost />;

  return (
    <div>
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
    </div>
  );
};
