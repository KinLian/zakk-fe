import { api } from '@/libs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';

export const useDeletePost = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  const deletePost = () => {
    setLoading(true);
    toast
      .promise(
        api.delete(`/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          loading: 'Deleting post...',
          error: 'Failed to delete post',
          success: 'Post deleted',
        }
      )
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          window.location.replace(`/`);
        }, 1500);
      })
      .catch(() => setLoading(false));
  };

  return {
    deletePost,
    loading,
  };
};
