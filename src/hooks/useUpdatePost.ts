import { api } from '@/libs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';

export const useUpdatePost = () => {
  const [title, setTitle] = useState('');
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const updatePost = (title: string, content: string) => {
    if (title.length < 3 || content.length < 3) {
      return toast.error('Title or Content is too short');
    }

    setLoading(true);
    toast
      .promise(
        api.put(
          `/posts/${id}`,
          {
            title,
            content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        {
          loading: 'Updating post...',
          error: 'Failed to update post',
          success: 'Post updated',
        }
      )
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          window.location.replace(`/posts/${id}`);
        }, 2000);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    const fetchDetailPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setTitle(res.data.data.title);
      } catch {}
    };

    router.isReady && fetchDetailPost();
  }, [router.isReady, id]);

  return {
    title,
    changeTitle,
    updatePost,
    loading,
    onSubmit: updatePost,
  };
};
