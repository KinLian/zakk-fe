import { useLogin } from '@/hooks';
import { FC } from 'react';
import { AuthForm } from './AuthForm';

export const LoginForm: FC = () => {
  const form = useLogin();
  return <AuthForm isLogin {...form} />;
};
