import { FC } from 'react';
import { LoginForm } from '@/components/Form';
import { GetServerSideProps } from 'next';
import { redirectAuthenticated } from '@/guards';

const LoginPage: FC = () => <LoginForm />;

export const getServerSideProps: GetServerSideProps = redirectAuthenticated;
export default LoginPage;
