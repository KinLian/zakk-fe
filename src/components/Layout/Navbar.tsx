import { getToken } from "@/service";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { Button } from "../Button";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const onClickLoggedIn = () => {
    !isLoggedIn ? router.push("/login") : setIsLoggedIn(false);
  };

  const onClickSignUp = () => router.push("/signup");

  useEffect(() => {
    getToken() && setIsLoggedIn(true);
  }, []);

  return (
    <div tw="top-0 p-5 flex justify-between ">
      <h1 css={[tw`text-center text-white font-bold text-3xl`]}>Forum</h1>
      {router.asPath !== "/login" && router.asPath !== "/signup" && (
        <div tw="flex gap-3">
          <Button
            color="black"
            backgroundColor="#FFADBC"
            onClick={onClickLoggedIn}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          {!isLoggedIn && (
            <Button
              color="black"
              backgroundColor="white"
              onClick={onClickSignUp}
            >
              Sign Up
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
