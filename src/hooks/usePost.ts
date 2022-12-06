import { IPostDetail } from '@/interfaces';
import { api } from '@/libs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePost = () => {
  const [post, setPost] = useState<IPostDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/posts/' + id);
        setPost(data.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    router.isReady && fetchPost();
  }, [router.isReady, id]);

  return { post, loading, error };
};
