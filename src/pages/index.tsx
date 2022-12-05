import type { NextPage } from 'next';
import { Container, Text } from '@nextui-org/react';
import { AllPosts } from '@/components/Post';

const Home: NextPage = () => {
  return (
    <Container
      css={{
        maxWidth: '1000px',
        margin: '1rem auto',
      }}
    >
      <Text h1 css={{ marginBottom: '1rem' }}>
        All Posts
      </Text>
      <AllPosts />
    </Container>
  );
};

export default Home;
