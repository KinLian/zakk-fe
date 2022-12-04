import { FC } from 'react';
import { LoginForm } from '@/components/Form';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { api } from '@/libs';

const LoginPage: FC = () => <LoginForm />;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { zakk } = nookies.get(ctx);
  let isValidToken = false;

  if (!zakk) {
    return {
      props: {},
    };
  }

  await api
    .get('/users/me', {
      headers: {
        Authorization: `Bearer ${zakk}`,
      },
    })
    .then(() => {
      isValidToken = true;
    })
    .catch((err) => {
      nookies.destroy(ctx, 'zakk');
    });

  if (isValidToken) {
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
