import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/validations';
import { z } from 'zod';
import { api } from '@/libs';
import { setCookie } from 'nookies';
import { useState } from 'react';
import toast from 'react-hot-toast';

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
      window.location.replace('/');
    } catch (err) {
      toast.error('Invalid credentials', { id: toastId });
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  const onSubmit = handleSubmit(login);

  return { register, onSubmit, loading };
};
