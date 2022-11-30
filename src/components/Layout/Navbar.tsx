import { getToken } from "@/service";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { Button } from "../Button";
import { GrAdd } from "react-icons/gr";
import * as S from "./Navbar.style";

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
    <S.Container>
      <S.Logo onClick={onHeaderClicked}>Forum</S.Logo>
      {router.asPath !== "/login" && router.asPath !== "/signup" && (
        <S.ButtonContainer>
          <Button
            color="black"
            backgroundColor="#FFADBC"
            onClick={onClickLoggedIn}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          {isLoggedIn && (
            <Button
              onClick={onAddPostClicked}
              tw="bg-white"
              icon={<GrAdd />}
              color="black"
            >
              Add Post
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              color="black"
              backgroundColor="white"
              onClick={onClickSignUp}
            >
              Sign Up
            </Button>
          )}
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};
