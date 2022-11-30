import { FC } from "react";
import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`
      text-lg 
      font-bold 
      w-full 
      flex 
      items-center 
      justify-center 
      h-screen
    `}
`;

interface EmptyContentProps {
  content: string;
}

export const EmptyContent: FC<EmptyContentProps> = ({ content }) => {
  return <Container>There are no {content} yet, be the first!</Container>;
};
