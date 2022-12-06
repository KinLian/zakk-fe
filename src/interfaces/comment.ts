export interface IComment {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  like: number;
  dislike: number;
  commenter: {
    id: number;
    name: string;
    email: string;
  };
}
