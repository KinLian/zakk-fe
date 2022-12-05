import type { NextPage } from 'next';
import { Container } from '@nextui-org/react';
import { DetailPost } from '@/components/Post';

const DetailPostPage: NextPage = () => {
  return (
    <Container
      css={{
        maxWidth: '1000px',
        margin: '1rem auto',
      }}
    >
      <DetailPost />
    </Container>
  );
};

export default DetailPostPage;
