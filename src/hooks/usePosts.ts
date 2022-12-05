import { api } from "@/libs";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export const usePost = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<any[]>();
  const { token } = useAuth();


  useEffect(() => {

    const fetchPost = async () => {
      try {
        const { data } = await api.get('/posts/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPosts(data.ok);
      } catch {
        setError(true);
      }

      finally {
        setLoading(false);
      }
    }

    fetchPost();
  })

  return { loading, posts, error };
}