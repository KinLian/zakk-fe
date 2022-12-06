import { useRichEditor } from '@/hooks';
import {
  Container,
  Text,
  Input,
  Button,
  Spacer,
  Loading,
} from '@nextui-org/react';
import { FC } from 'react';

type PostFormProps = {
  onSubmit: (title: string, content: string) => unknown;
  loading: boolean;
  title: string;
  changeTitle: (title: string) => unknown;
  isDetail?: boolean;
};

export const PostForm: FC<PostFormProps> = ({
  onSubmit,
  loading,
  title,
  changeTitle,
  isDetail = false,
}) => {
  const { editor, markup } = useRichEditor(isDetail);

  return (
    <Container
      as="form"
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        maxWidth: '1000px',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(title, markup.__html);
      }}
    >
      <>
        <Text h1>Create a Post</Text>
        <Spacer y={2} />
        <Input
          clearable
          underlined
          labelPlaceholder="Title"
          width="100%"
          value={title}
          onChange={(e) => changeTitle(e.target.value)}
        />
        <Spacer y={2} />
        {editor}
        <Spacer y={2} />
        <Text h3>Preview</Text>
        <Container
          css={{
            marginTop: '1rem',
            border: '1px solid #ccc',
            padding: '1rem',
            maxWidth: '100%',
            overflowWrap: 'break-word',
            height: 'auto',
          }}
          dangerouslySetInnerHTML={markup}
        ></Container>

        <Spacer y={2} />
        <Container
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            padding: '0',
          }}
        >
          <Button type="submit" color="primary" disabled={loading}>
            {loading ? (
              <Loading size="sm" />
            ) : isDetail ? (
              'Update Post'
            ) : (
              'Create Post'
            )}
          </Button>
        </Container>
      </>
    </Container>
  );
};
