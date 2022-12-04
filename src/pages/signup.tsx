import { FC } from 'react';
import { Container, Text, Button, Input, Spacer } from '@nextui-org/react';

const SignupPage: FC = () => {
  return (
    <Container
      css={{
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
      as="form"
    >
      <Text
        css={{
          marginTop: '1rem',
        }}
        h1
      >
        Login
      </Text>
      <Spacer y={2.5} />
      <Input width="100%" clearable underlined labelPlaceholder="Name" />
      <Spacer y={2.5} />
      <Input
        type="email"
        width="100%"
        clearable
        underlined
        labelPlaceholder="Email"
      />
      <Spacer y={2.5} />
      <Input.Password
        width="100%"
        clearable
        underlined
        labelPlaceholder="Password"
      />

      <Spacer y={2.5} />
      <Button css={{ width: '100%' }} type="submit" auto color="primary">
        Signup
      </Button>
    </Container>
  );
};

export default SignupPage;
