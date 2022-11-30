
import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`
    cursor-pointer 
    py-5 
    my-3
    px-3
    flex
    bg-[#181a1b]
    w-full md:w-9/12
  `}
`;

export const LikeContainer = styled.div`
  ${tw`
    px-3 
    flex 
    flex-col 
    items-center
  `}
`;

export const ContentContainer = styled.div`
  ${tw`
   flex
   flex-col
   gap-3
  `}
`;

export const Title = styled.p`
  ${tw`
    font-medium
    text-2xl
  `}
`;

export const CreatedText = styled.p`
    ${tw`
     font-light
      text-sm
    `}
`
