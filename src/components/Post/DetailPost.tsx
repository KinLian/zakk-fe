import { useAuth, usePost } from '@/hooks';
import { Container } from '@nextui-org/react';
import { FC } from 'react';
import { CardPost } from './CardPost';

export const DetailPost: FC = () => {
  const { post } = usePost();
  const { user } = useAuth();

  return (
    <Container>
      {post && <CardPost currentUserId={user?.id} isDetail post={post} />}
    </Container>
  );
};
