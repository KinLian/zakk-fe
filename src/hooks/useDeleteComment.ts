import { api } from '@/libs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';

export const useDeleteComment = (id: number) => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  const deleteComment = () => {
    setLoading(true);
    toast
      .promise(
        api.delete(`/comments/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          loading: 'Deleting comment...',
          error: 'Failed to delete comment',
          success: 'Comment deleted',
        }
      )
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(() => setLoading(false));
  };

  return {
    deleteComment,
    loading,
  };
};
