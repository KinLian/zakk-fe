import { usePosts } from '@/hooks';
import { Avatar, Button, Container, Text } from '@nextui-org/react';
import { FC } from 'react';
import { formatDate } from '@/utils';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';

export const AllPosts: FC = () => {
  const { posts } = usePosts();
  const router = useRouter();

  return (
    <div>
      {posts.map(({ id, poster, title, created_at, content }) => (
        <Container
          key={id}
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
            <Avatar text={poster.name} size="xl" />
            <div
              style={{
                marginLeft: '1rem',
              }}
            >
              <Text h3 css={{ marginBottom: '0px' }}>
                {title}
              </Text>
              <Text>
                by {poster.name} - {formatDate(created_at)}
              </Text>
            </div>
          </div>

          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
              className="elipsis-two"
            />
          </div>

          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button onClick={() => router.push(`/posts/${id}`)}>
              Lihat Detail
            </Button>
          </div>
        </Container>
      ))}
    </div>
  );
};
