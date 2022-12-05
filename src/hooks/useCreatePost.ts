import { api } from '@/libs';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';

export const useCreatePost = () => {
  const [title, setTitle] = useState('');
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const createPost = (title: string, content: string) => {
    if (title.length < 3 || content.length < 3) {
      return toast.error('Title or Content is too short');
    }

    setLoading(true);
    toast
      .promise(
        api.post(
          '/posts',
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
          loading: 'Creating post...',
          error: 'Failed to create post',
          success: 'Post created',
        }
      )
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          window.location.replace('/');
        }, 2000);
      })
      .catch(() => setLoading(false));
  };

  return {
    title,
    changeTitle,
    createPost,
    loading,
  };
};
