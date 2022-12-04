import dynamic from 'next/dynamic';

// import DOMPurify from 'dompurify';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { useCallback, useEffect, useState } from 'react';
// const DOMPurify = dynamic(() => import('dompurify'), { ssr: false });
import DOMPurify from 'isomorphic-dompurify';

export const useRichEditor = () => {
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

  return {
    editorState,
    handleEditorChange,
    createMarkup,
    convertedContent,
    editor,
    markup: createMarkup(convertedContent),
  };
};
