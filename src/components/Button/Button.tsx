import { FC } from "react";
import tw, { styled } from "twin.macro";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (...x: any[]) => any;
  hoverColor?: string;
  backgroundColor?: string;
  color?: string;
}

const Button: FC<ButtonProps> = ({ className, icon, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  ${tw`
    flex
    items-center
    rounded-md
    p-2
    gap-2
  `}

  background-color : ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || "inherit"};

  &:hover {
    color: ${(props) => props.hoverColor || "palevioletred"};
  }
`;

export { StyledButton as Button };
