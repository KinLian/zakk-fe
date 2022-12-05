import { getToken } from "@/service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export const useRequireAuth = (
  redirectUrl = "/login",
  publicPage: string[] = ["/login","/signup","/"]
) => {
  const { user, setUserDetail } = useAuth();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const authCheck = async () => {
    if (publicPage.includes(router.asPath)) setAuthorized(true);
    else if (!user && getToken()) {
      await setUserDetail!();
      setAuthorized(true);
    } else if (user) setAuthorized(true);
    else if (!getToken()) router.push(redirectUrl);
  };

  useEffect(() => {
    authCheck();

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);
    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [router]);

  return authorized;
};
