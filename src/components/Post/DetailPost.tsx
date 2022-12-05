import { usePost } from '@/hooks';
import { Container } from '@nextui-org/react';
import { FC } from 'react';
import { CardPost } from './CardPost';

export const DetailPost: FC = () => {
  const { post } = usePost();

  return <Container>{post && <CardPost isDetail post={post} />}</Container>;
};
