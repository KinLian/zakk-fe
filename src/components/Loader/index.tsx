import { Container, Loading } from '@nextui-org/react';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <Container
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Loading size="xl" />
    </Container>
  );
};
