import { convertToHTML } from 'draft-convert';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { useCallback, useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';
import { api } from '@/libs';

export const useRichEditor = (isDetail = false) => {
  const router = useRouter();
  const { id } = router.query;
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [editor, setEditor] = useState<JSX.Element | null>(null);

  const [convertedContent, setConvertedContent] = useState<string>('');

  const convertContentToHTML = useCallback(() => {
    const currentContentAsHTML = convertToHTML(
      editorState!.getCurrentContent()
    );
    setConvertedContent(currentContentAsHTML);
  }, [editorState]);

  const handleEditorChange = useCallback(
    (state: EditorState) => {
      setEditorState(state);
      convertContentToHTML();
    },
    [convertContentToHTML]
  );

  const createMarkup = (html: string | Node) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  useEffect(() => {
    const importAndSetEditor = async () => {
      const { Editor } = await import('react-draft-wysiwyg');
      window &&
        setEditor(
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        );
    };

    importAndSetEditor();
  }, [editorState, handleEditorChange]);

  useEffect(() => {
    const getDetailPost = async () => {
      try {
        const { Editor } = await import('react-draft-wysiwyg');
        const { data } = await api.get(`/posts/${id}`);
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(data.data.content).contentBlocks
            )
          )
        );
        setConvertedContent(data.data.content);
        setEditor(
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        );
      } catch {}
    };

    isDetail && router.isReady && getDetailPost();
  }, [router.isReady, id]);

  return {
    editorState,
    handleEditorChange,
    createMarkup,
    convertedContent,
    editor,
    markup: createMarkup(convertedContent),
  };
};
