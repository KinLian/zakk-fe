import { IComment, IUser } from '@/interfaces';
import { Container, Loading } from '@nextui-org/react';
import { FC } from 'react';
import { Button, Textarea, Text } from '@nextui-org/react';
import { useCreateComment } from '@/hooks/useCreateComment';

export const AddComment: FC = () => {
  const { content, changeComment, createComment, loading } = useCreateComment();

  return (
    <Container
      id="comment"
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$8',
        w: '100%',
        px: '$0',
        marginTop: '2rem',
      }}
    >
      <Textarea
        placeholder="Add comment"
        minRows={5}
        value={content}
        onChange={(e) => changeComment(e.target.value)}
        css={{ w: '100%', h: '$32' }}
      />
      <Container
        css={{
          w: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 0,
        }}
      >
        <Button onClick={() => createComment()} auto css={{ w: 'fit-content' }}>
          {loading ? <Loading size="sm" /> : 'Send Comment'}
        </Button>
      </Container>
    </Container>
  );
};
