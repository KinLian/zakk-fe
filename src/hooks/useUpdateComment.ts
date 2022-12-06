import { api } from "@/libs";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./useAuth";

export type updateCommentData = {
  content: string;
  commenterId: number;
  id: number;
};

export const useUpdateComment = (data: updateCommentData) => {
  const [content, setContent] = useState({
    content: data.content,
    commenter_id: data.commenterId,
  });
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  const changeComment = (newContent: string) => {
    setContent({ ...content, content: newContent });
  };

  const updateComment = () => {
    setLoading(true);
    if (content.content == null || content.content == "") return;
    toast
      .promise(
        api.put(`/comments/${data.id}`, content, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          loading: "Updating comment...",
          error: "Failed to update comment",
          success: "Comment updated",
        }
      )
      .then(() => {
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
    updateComment,
    loading,
  };
};
