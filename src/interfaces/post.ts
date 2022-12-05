import { IComment, IUser } from ".";

export interface IPost {
  id: number;
  title: string;
  content: string;
  like: number;
  dislike: number;
  comments: IComment[];
  poster: IUser;
}