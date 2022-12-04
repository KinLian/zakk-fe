import { useSignup } from '@/hooks';
import { FC } from 'react';
import { AuthForm } from './AuthForm';

export const SignupForm: FC = () => {
  const form = useSignup();
  return <AuthForm {...form} />;
};
