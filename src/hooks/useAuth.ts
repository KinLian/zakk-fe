import { AuthCtx } from '@/contexts';
import { useContext } from 'react';

// export const useAuth = () => {
//   const [user, setUser] = useState<IUser | null>(null);
//   const [token, setToken] = useState<string | null>(null);
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     const { zakk } = parseCookies();

//     const getCurrentUser = async () => {
//       try {
//         const { data } = await api.get('/users/me', {
//           headers: {
//             Authorization: `Bearer ${zakk}`,
//           },
//         });
//         setUser(data.user);
//         setIsLogin(true);
//         setToken(zakk);
//       } catch {
//         destroyCookie(null, 'zakk');
//         setUser(null);
//         setIsLogin(false);
//         setToken(null);
//       }
//     };

//     zakk && getCurrentUser();
//   }, []);

//   return { user, isLogin, token };
// };

export const useAuth = () => useContext(AuthCtx);
