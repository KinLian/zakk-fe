export interface IComment {
  id: number;
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
