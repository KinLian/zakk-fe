import { FC } from "react";
import tw, { styled } from "twin.macro";

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return <div className={className}>@2022 Made by ZAKK team 😊</div>;
};

const StyledFooter = styled(Footer)`
  ${tw`
    p-5 
    bottom-0 
    flex 
    justify-center
  `}
`;

export { StyledFooter as Footer };
