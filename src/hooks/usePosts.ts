import { IPost } from "@/interfaces";
import { api } from "@/libs";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export const usePost = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>();


  useEffect(() => {
    const { zakk } = parseCookies();

    const fetchPost = async () => {
      try {
        const { data } = await api.get('/posts/', {
          headers: {
            Authorization: `Bearer ${zakk}`,
          },
        });
        setPosts(data.data);
      } catch (error) {
        console.log(error)
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