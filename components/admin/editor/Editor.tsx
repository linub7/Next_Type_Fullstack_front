import { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

import Toolbar from './toolbar/Toolbar';
import HorizontalSeparator from './toolbar/separator/HorizontalSeparator';

interface Props {}

const Editor: FC<Props> = ({}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: 'Type Something...',
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'prose lg:prose-xl focus:outline-none dark:prose-invert max-w-full mx-auto h-full',
      },
    },
  });
  return (
    <div className="p-3 dark:bg-primary-dark bg-primary transition">
      <Toolbar editor={editor} />
      <HorizontalSeparator />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
