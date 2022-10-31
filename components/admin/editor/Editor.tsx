import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

import Toolbar from './toolbar/Toolbar';

interface Props {}

const Editor: FC<Props> = ({}) => {
  const editor = useEditor({ extensions: [StarterKit, Underline] });
  return (
    <div className="p-3 dark:bg-primary-dark bg-primary transition">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
