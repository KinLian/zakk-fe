import { IComment } from ".";

export interface IPost {
  id: number;
  content: string;
  like: string;
  dislike : number;
  comments : IComment[];
}