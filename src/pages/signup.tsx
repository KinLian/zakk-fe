import { FC } from 'react';
import { SignupForm } from '@/components/Form';
import { GetServerSideProps } from 'next';
import { redirectAuthenticated } from '@/guards';

const SignupPage: FC = () => <SignupForm />;

export const getServerSideProps: GetServerSideProps = redirectAuthenticated;
export default SignupPage;
