import { getToken } from "@/service";
import { useEffect, useState } from "react";
import tw from "twin.macro";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getToken() && setIsLoggedIn(true);
  }, []);

  return (
    <div tw="top-0 p-5 flex justify-between ">
      <h1 css={[tw`text-center text-white font-bold text-3xl`]}>Forum</h1>
      <button>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};
