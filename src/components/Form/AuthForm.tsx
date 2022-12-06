import { BaseSyntheticEvent, FC } from 'react';
import {
  Container,
  Text,
  Button,
  Input,
  Spacer,
  Loading,
} from '@nextui-org/react';
import { UseFormRegister } from 'react-hook-form';

type AuthFormProps = {
  isLogin?: boolean;
  register: UseFormRegister<any>;
  onSubmit: (e: BaseSyntheticEvent<object, any, any> | undefined) => unknown;
  loading?: boolean;
};

export const AuthForm: FC<AuthFormProps> = ({
  isLogin = false,
  register,
  onSubmit,
  loading = false,
}) => {
  const title = isLogin ? 'Login' : 'Signup';

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
      onSubmit={onSubmit}
    >
      <Text
        css={{
          marginTop: '1rem',
        }}
        h1
      >
        {title}
      </Text>
      <Spacer y={2.5} />
      {!isLogin && (
        <>
          <Input
            width="100%"
            clearable
            underlined
            labelPlaceholder="Name"
            {...register('name')}
          />
          <Spacer y={2.5} />
          <Input
            width="100%"
            clearable
            underlined
            labelPlaceholder="Username"
            {...register('username')}
          />
          <Spacer y={2.5} />
        </>
      )}
      <Input
        type="email"
        width="100%"
        clearable
        underlined
        labelPlaceholder="Email"
        {...register('email')}
      />
      <Spacer y={2.5} />
      <Input.Password
        width="100%"
        clearable
        underlined
        labelPlaceholder="Password"
        {...register('password')}
      />
      <Spacer y={2.5} />
      <Button css={{ width: '100%' }} type="submit" auto color="primary">
        {loading ? (
          <Loading type="points" color="currentColor" size="sm" />
        ) : (
          title
        )}
      </Button>
    </Container>
  );
};
