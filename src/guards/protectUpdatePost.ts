import { IUser } from '@/interfaces';
import { api } from '@/libs';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

export const protectUpdatePost: GetServerSideProps = async (ctx) => {
  const { zakk } = nookies.get(ctx);
  let isValidToken = false;
  let isMyPost = false;
  let user: IUser | null = null;
  const id = ctx.query.id;

  if (!zakk) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  await api
    .get('/users/me', {
      headers: {
        Authorization: `Bearer ${zakk}`,
      },
    })
    .then((res) => {
      isValidToken = true;
      user = res.data.user;
    })
    .catch(() => {
      nookies.destroy(ctx, 'zakk');
    });

  if (!isValidToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  await api
    .get(`/posts/${id}`)
    .then((res) => {
      if (res.data.data.poster.id === user?.id) {
        isMyPost = true;
      }
    })
    .catch(() => {});

  if (!isMyPost) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
