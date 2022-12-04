import { IUser } from '@/interfaces';
import { api } from '@/libs';
import { destroyCookie, parseCookies } from 'nookies';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
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
        setUser(data);
        setIsLogin(true);
      } catch {
        destroyCookie(null, 'zakk');
        setUser(null);
        setIsLogin(false);
      }
    };

    zakk && getCurrentUser();
  }, []);

  return { user, isLogin };
};
