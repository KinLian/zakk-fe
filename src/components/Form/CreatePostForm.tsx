import { useRichEditor } from '@/hooks';
import { Container, Text, Input, Button, Spacer } from '@nextui-org/react';

export const CreatePostForm = () => {
  const { editor, markup } = useRichEditor();

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
    >
      <>
        <Text h1>Create a Post</Text>
        <Spacer y={2} />
        <Input clearable underlined labelPlaceholder="Title" width="100%" />
        <Spacer y={2} />
        {editor}
        <Spacer y={2} />
        <Text h3>Preview</Text>
        <Container
          css={{
            marginTop: '1rem',
            border: '1px solid #ccc',
            padding: '1rem',
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
          <Button type="submit" color="primary">
            Create Post
          </Button>
        </Container>
      </>
    </Container>
  );
};
