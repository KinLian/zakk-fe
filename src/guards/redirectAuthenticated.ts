import { api } from '@/libs';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

export const redirectAuthenticated: GetServerSideProps = async (ctx) => {
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
    .catch(() => {
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
