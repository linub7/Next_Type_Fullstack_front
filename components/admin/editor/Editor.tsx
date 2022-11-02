import { FC, useState, useEffect } from 'react';
import { EditorContent, getMarkRange, Range, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';

import Toolbar from './toolbar/Toolbar';
import HorizontalSeparator from './toolbar/separator/HorizontalSeparator';
import EditLink from './toolbar/link/EditLink';
import GalleryModal from './toolbar/modal/GalleryModal';

interface Props {}

const Editor: FC<Props> = ({}) => {
  const [selectionRange, setSelectionRange] = useState<Range>();
  const [visibleImageGallery, setVisibleImageGallery] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        autolink: false,
        linkOnPaste: false,
        openOnClick: false,
        HTMLAttributes: {
          target: '',
        },
      }),
      Placeholder.configure({
        placeholder: 'Type Something...',
      }),
      Youtube.configure({
        width: 840,
        height: 472.5,
        HTMLAttributes: {
          class: 'mx-auto rounded',
        },
      }),
    ],
    editorProps: {
      handleClick(view, pos, event) {
        const { state } = view;
        const selectionRange = getMarkRange(
          state.doc.resolve(pos),
          state.schema.marks.link
        );
        if (selectionRange) {
          setSelectionRange(selectionRange);
        }
      },
      attributes: {
        class:
          'prose lg:prose-xl focus:outline-none dark:prose-invert max-w-full mx-auto h-full',
      },
    },
  });

  useEffect(() => {
    if (editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange);
    }
  }, [editor, selectionRange]);

  return (
    <>
      <div className="p-3 dark:bg-primary-dark bg-primary transition">
        <Toolbar
          editor={editor}
          setVisibleImageGallery={setVisibleImageGallery}
        />
        <HorizontalSeparator />
        {editor ? <EditLink editor={editor} /> : null}
        <EditorContent editor={editor} />
      </div>

      {visibleImageGallery && (
        <GalleryModal
          visible={visibleImageGallery}
          setVisibleImageGallery={setVisibleImageGallery}
        />
      )}
    </>
  );
};

export default Editor;
