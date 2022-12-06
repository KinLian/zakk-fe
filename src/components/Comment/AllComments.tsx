import { IComment } from '@/interfaces';
import { Text } from '@nextui-org/react';
import { FC } from 'react';
import { CardComment } from './CardComment';

type AllCommentsProps = {
  comments: IComment[];
  currentUserId?: number;
};

export const AllComments: FC<AllCommentsProps> = ({
  comments,
  currentUserId,
}) => {
  return (
    <div>
      <Text h2 css={{ marginBottom: '1rem', marginTop: '2rem' }}>
        Comments
      </Text>
      {comments.map(({ commenter, ...rest }) => (
        <CardComment
          {...commenter}
          {...rest}
          key={rest.id}
          commenterId={commenter.id}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
};
