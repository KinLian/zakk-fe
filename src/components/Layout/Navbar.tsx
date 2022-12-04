import { FC } from 'react';
import { Navbar as N, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { useAuth } from '@/hooks';

export const Navbar: FC = () => {
  const { isLogin } = useAuth();
  const router = useRouter();
  const goLogin = () => router.push('/login');
  const goSignup = () => router.push('/signup');
  const logout = () => {
    destroyCookie(null, 'zakk');
    window.location.reload();
  };

  return (
    <N variant="static">
      <N.Content>
        <N.Link href="/">Home</N.Link>
      </N.Content>
      <N.Content>
        <N.Item>
          <Button
            auto
            flat
            animated
            color={isLogin ? 'error' : 'primary'}
            onClick={isLogin ? logout : goLogin}
          >
            {isLogin ? 'Logout' : 'Login'}
          </Button>
        </N.Item>
        {!isLogin && (
          <N.Item>
            <Button auto flat animated color="success" onClick={goSignup}>
              Sign Up
            </Button>
          </N.Item>
        )}
      </N.Content>
    </N>
  );
};
