import { FC } from 'react';
import { LoginForm } from '@/components/Form';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

const LoginPage: FC = () => <LoginForm />;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { zakk } = nookies.get(ctx);

  if (zakk) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
