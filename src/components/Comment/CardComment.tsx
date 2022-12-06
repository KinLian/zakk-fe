import { formatDate } from '@/utils';
import { Avatar, Button, Container, Text } from '@nextui-org/react';
import { FC } from 'react';

type CardCommentProps = {
  name: string;
  content: string;
  created_at: string;
  title: string;
  id: number;
  currentUserId?: number;
  commenterId: number;
};

export const CardComment: FC<CardCommentProps> = ({
  name,
  content,
  created_at,
  title,
  commenterId,
  currentUserId,
}) => {
  const isMyComment = currentUserId && currentUserId === commenterId;
  return (
    <Container
      css={{
        border: '1px solid #ccc',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '4px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <Avatar text={name} size="xl" />
        <div
          style={{
            marginLeft: '1rem',
          }}
        >
          <Text h3 css={{ marginBottom: '0px', fontWeight: 700 }}>
            Re: {title}
          </Text>
          <Text>
            by {name} - {formatDate(created_at)}
          </Text>
        </div>
      </div>

      <Text
        css={{
          marginTop: '1rem',
        }}
      >
        {content}
      </Text>

      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {isMyComment && (
          <>
            <Button flat auto animated onClick={() => {}}>
              Edit
            </Button>
            <Button
              onClick={() => {}}
              color="error"
              css={{ marginLeft: '1rem' }}
              flat
              animated
              auto
            >
              {/* {loading ? <Loading size="sm" /> : 'Hapus'} */}
              Hapus
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};
