import { api } from '@/libs';
import { SignupSchema } from '@/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

type Data = z.infer<typeof SignupSchema>;

export const useSignup = () => {
  const { register, handleSubmit } = useForm<Data>({
    resolver: zodResolver(SignupSchema),
  });
  const [loading, setLoading] = useState(false);

  const signup = async (creds: Data) => {
    setLoading(true);
    const toastId = toast.loading('Signing up...');
    try {
      await api.post('/users/register', creds);

      toast.success('Account Created!', { id: toastId });

      setTimeout(() => {
        window.location.replace('/login');
      }, 1000);
    } catch (err) {
      toast.error('Invalid credentials', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = handleSubmit(signup);

  return { register, onSubmit, loading };
};
