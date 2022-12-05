import { CreatePostForm } from '@/components/Form';
import { requireLogin } from '@/guards';
import { FC } from 'react';

const CreatePostPage: FC = () => <CreatePostForm />;

export const getServerSideProps = requireLogin;
export default CreatePostPage;
