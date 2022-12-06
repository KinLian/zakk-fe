import { api } from "@/libs";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./useAuth";
import { useRouter } from "next/router";

export const useCreateComment = () => {
  const [content, setContent] = useState("");
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  const router = useRouter()
  const { id } = router.query;

  const changeComment = (newContent: string) => {
    setContent(newContent)
  };

  const createComment = () => {
    setLoading(true);
    if (content == "" || content == undefined) return;
    toast
      .promise(
        api.post(
        `/posts/${id}/comments`,
          {
            content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        {
          loading: "Creating comment...",
          error: "Failed to create comment",
          success: "Comment created",
        }
      )
      .then((data) => {
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(() => setLoading(false));
  };

  return {
    content,
    changeComment,
    createComment,
    loading,
  };
};
