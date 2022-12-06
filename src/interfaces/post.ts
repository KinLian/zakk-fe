import { IComment } from './comment';

export interface IPost {
  id: string;
  title: string;
  content: string;
  poster: {
    id: number;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}

export interface IPostDetail extends IPost {
  comments: IComment[];
}
