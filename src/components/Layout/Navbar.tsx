import { getToken } from "@/service";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { Button } from "../Button";
import { GrAdd } from "react-icons/gr";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const onClickLoggedIn = () => {
    !isLoggedIn ? router.push("/login") : setIsLoggedIn(false);
  };

  const onClickSignUp = () => router.push("/signup");
  const onHeaderClicked = () => router.push("/posts");
  const onAddPostClicked = () => router.push("/posts/create");

  useEffect(() => {
    getToken() && setIsLoggedIn(true);
  }, []);

  return (
    <div tw="top-0 p-5 flex justify-between ">
      <h1
        onClick={onHeaderClicked}
        css={[tw`text-center text-white font-bold text-3xl cursor-pointer`]}
      >
        Forum
      </h1>
      {router.asPath !== "/login" && router.asPath !== "/signup" && (
        <div tw="flex gap-3">
          <Button
            color="black"
            backgroundColor="#FFADBC"
            onClick={onClickLoggedIn}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          <Button
            onClick={onAddPostClicked}
            tw="bg-white"
            icon={<GrAdd />}
            color="black"
          >
            Add Post
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
