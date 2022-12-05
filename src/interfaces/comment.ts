import { IUser } from "./user";

export interface IComment {
  id : string;
  like: number;
  dislike : number;
  commenter : IUser
}