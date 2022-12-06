import { IPost } from '@/interfaces';
import { api } from '@/libs';
import { useEffect, useState } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/posts');
      setPosts(data.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error };
};
