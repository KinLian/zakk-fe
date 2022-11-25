import tw from "twin.macro";

interface PostProps {
  like: number;
  poster: string;
  dislike: number;
  title: string;
  content?: string;
  postDate: string;
  comments: number;
}

export const Post: React.FC<PostProps> = ({
  like,
  poster,
  dislike,
  title,
  content,
  postDate,
  comments,
}) => {
  return (
    <div tw="p-3 flex bg-[#181a1b] w-9/12">
      <div tw="px-2">
        <button>like</button>
        <p>{like - dislike}</p>
        <button>dislike</button>
      </div>
      <div>
        <p tw="font-light text-sm">
          Posted by {poster}, {postDate} hours ago
        </p>
        <p tw="py-2 font-medium text-2xl">{title}</p>
        <p tw='py-1'>{content}</p>
        <button>{comments} comments</button>
      </div>
    </div>
  );
};
