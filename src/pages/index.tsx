import type { NextPage } from 'next';
import { useState } from 'react';
import tw from 'twin.macro';
import { Button } from '@nextui-org/react';
import { useAuth } from '@/hooks';

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Home;
