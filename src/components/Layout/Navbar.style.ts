import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`
    top-0 
    p-5 
    flex 
    justify-between
  `}
`;

export const Logo = styled.div`
    ${tw`
        text-white 
        font-bold 
        text-3xl 
        cursor-pointer
    `}
`

export const ButtonContainer = styled.div`
  ${tw`
    flex 
    gap-3
  `}
`