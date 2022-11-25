import { FC } from "react";
import tw from "twin.macro";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (...x: any[]) => any;
}

export const Button: FC<ButtonProps> = ({ icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      tw={"flex items-center bg-white rounded-md p-2 mt-2 text-black"}
    >
      {icon}
      {children}
    </button>
  );
};
