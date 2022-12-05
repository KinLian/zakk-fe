import { Container, Text } from '@nextui-org/react';
import { FC } from 'react';

type EmptyPostProps = {
  message?: string;
};

export const EmptyPost: FC<EmptyPostProps> = ({ message }) => {
  return (
    <Container
      css={{
        h: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text b css={{ fontSize: '$lg' }}>
        {message ?? 'No posts to show :('}
      </Text>
    </Container>
  );
};
