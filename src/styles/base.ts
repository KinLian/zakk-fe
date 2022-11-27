import tw, { styled } from "twin.macro"

export const Container = styled.main`
    ${tw`
        w-full 
        h-screen 
        gap-5 
        flex 
        flex-col 
        justify-center 
        items-center
    `}
`
export const H1 = styled.h1`
    ${tw`
        text-white
        font-bold 
        text-5xl
    `}
`