import type { NextPage } from 'next';
import { useState } from 'react';
import tw from 'twin.macro';
import { Button } from '@nextui-org/react';

const Home: NextPage = () => {
  const [hide, setHide] = useState(false);

  return (
    <main tw="bg-[#121212] w-full h-screen flex flex-col justify-center items-center">
      <h1
        css={[
          tw`text-center text-white font-bold text-5xl`,
          hide && tw`hidden`,
        ]}
      >
        Hello ZAKK!!
      </h1>
      <button
        tw="bg-white rounded-md p-3 font-bold mt-8 text-black"
        onClick={() => setHide((prev) => !prev)}
      >
        {hide ? 'Show' : 'Hide'} Text
      </button>
      <Button>Hi</Button>
    </main>
  );
};

export default Home;
