import { EditorState } from 'draft-js';
import { useState } from 'react';

export const useCreatePost = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
};
