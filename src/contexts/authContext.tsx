import { IUser } from '@/interfaces';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { api } from '@/libs';
import { destroyCookie, parseCookies } from 'nookies';

interface AuthContextInterface {
  user: IUser | null;
  token: string | null;
  isLogin: boolean;
}

export const AuthCtx = createContext<AuthContextInterface>({
  user: null,
  token: null,
  isLogin: false,
});

export const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const { zakk } = parseCookies();

    const getCurrentUser = async () => {
      try {
        const { data } = await api.get('/users/me', {
          headers: {
            Authorization: `Bearer ${zakk}`,
          },
        });
        setUser(data.user);
        setIsLogin(true);
        setToken(zakk);
      } catch (err: any) {
        if (err?.message?.includes('401')) {
          destroyCookie(null, 'zakk', {
            path: '/',
          });
          setUser(null);
          setIsLogin(false);
          setToken(null);
        }
      }
    };

    zakk && getCurrentUser();
  }, []);

  return (
    <AuthCtx.Provider
      value={{
        user,
        token,
        isLogin,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
