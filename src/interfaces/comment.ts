import { IUser } from "./user";

export interface IComment {
  id : string;
  content: string;
  title: string;
  like: number;
  dislike : number;
  commenter : IUser
}