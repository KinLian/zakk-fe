import { User } from "@/models";
import { createContext, FC, useEffect, useState } from "react";
import * as service from "@/service";
import { getToken, setToken } from "@/service";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

interface Auth {
    user? : User;
    login? : (data : User) => Promise<string>;
    setUserDetail? : () => Promise<void>
}

export const authContext = createContext<Auth>({});

interface ProvideAuthProps {
  children?: React.ReactNode;
}

export const ProvideAuth: FC<ProvideAuthProps> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useProvideAuth = () => {
  const [user, setUser] = useState<User>();

  const setUserDetail = async () => {
    const userResponse = await service.getUser();
    setUser(userResponse["data"]);
  };

  const login = async (data: User): Promise<string> => {
    const successMessage = "Login sucessfull";
    const errorMessage = "Something went wrong, please try again";

    try {
      const response = await service.fetchToken(data);
      if ("token" in response["data"]) {
        setToken(response["data"]["token"]);
        await setUserDetail();
        return successMessage;
      } else if ("error" in response["data"]) {
        return response["data"]["error"] as string;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.message;
      }
      return errorMessage;
    }
    return "";
  };

  return { user, login,setUserDetail };
};