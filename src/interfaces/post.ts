export interface IPost {
  id: string;
  title: string;
  content: string;
  poster: {
    id: string;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}

export interface IPostDetail extends IPost {
  comments: IComment[];
}

export interface IComment {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  commenter: {
    id: string;
    name: string;
    email: string;
  };
}
