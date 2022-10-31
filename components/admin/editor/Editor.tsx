import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './toolbar/Toolbar';

interface Props {}

const Editor: FC<Props> = ({}) => {
  const editor = useEditor({ extensions: [StarterKit] });
  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
