import { FC } from 'react';
import { Navbar as N, Text, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const Navbar: FC = () => {
  const router = useRouter();
  const goLogin = () => router.push('/login');
  const goSignup = () => router.push('/signup');

  return (
    <N variant="static">
      <N.Content>
        <N.Link href="/">Home</N.Link>
      </N.Content>
      <N.Content>
        <N.Item>
          <Button auto flat animated color="primary" onClick={goLogin}>
            Login
          </Button>
        </N.Item>
        <N.Item>
          <Button auto flat animated color="success" onClick={goSignup}>
            Sign Up
          </Button>
        </N.Item>
      </N.Content>
    </N>
  );
};
