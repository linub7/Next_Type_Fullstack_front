import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface Props {}

const Editor: FC<Props> = ({}) => {
  const editor = useEditor({ extensions: [StarterKit] });
  return (
    <div>
      <button
        onClick={() => {
          editor?.chain().focus().toggleBold().run();
        }}
      >
        Bold
      </button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
