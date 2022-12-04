import { api } from '@/libs';
import { LoginSchema } from '@/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

type Data = z.infer<typeof LoginSchema>;

export const useLogin = () => {
  const { register, handleSubmit } = useForm<Data>({
    resolver: zodResolver(LoginSchema),
  });
  const [loading, setLoading] = useState(false);

  const login = async (creds: Data) => {
    setLoading(true);
    const toastId = toast.loading('Logging in...');
    try {
      const { data } = await api.post('/users/login', creds);
      setCookie(null, 'zakk', data.token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      toast.success('Logged in!', { id: toastId });
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    } catch (err) {
      toast.error('Invalid credentials', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = handleSubmit(login);

  return { register, onSubmit, loading };
};
