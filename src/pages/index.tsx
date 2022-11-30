import { Container } from "@/styles/base";
import type { NextPage } from "next";
import { useState } from "react";
import tw from "twin.macro";

const Home: NextPage = () => {
  const [hide, setHide] = useState(false);

  return (
    <Container>
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
        {hide ? "Show" : "Hide"} Text
      </button>
    </Container>
  );
};

export default Home;
