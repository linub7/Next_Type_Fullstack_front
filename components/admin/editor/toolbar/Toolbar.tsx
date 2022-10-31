import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from './dropdown/DropdownOptions';
import DropdownHead from './dropdown/DropdownHead';
import { getFocusedEditor } from '../../../../utils/editorUtils';

interface Props {
  editor: Editor | null;
}

const Toolbar: FC<Props> = ({ editor }) => {
  if (!editor) return null;

  const paragraphOptions = [
    {
      label: 'Paragraph',
      onClick: () => getFocusedEditor(editor).setParagraph().run(),
    },
    {
      label: 'Heading 1',
      onClick: () => getFocusedEditor(editor).toggleHeading({ level: 1 }).run(),
    },
    {
      label: 'Heading 2',
      onClick: () => getFocusedEditor(editor).toggleHeading({ level: 2 }).run(),
    },
    {
      label: 'Heading 3',
      onClick: () => getFocusedEditor(editor).toggleHeading({ level: 3 }).run(),
    },
  ];

  const getLabel = (): string => {
    if (editor.isActive('heading', { level: 1 })) return 'Heading 1';
    if (editor.isActive('heading', { level: 2 })) return 'Heading 2';
    if (editor.isActive('heading', { level: 3 })) return 'Heading 3';
    return 'Paragraph';
  };
  return (
    <div>
      <DropdownOptions
        options={paragraphOptions}
        head={<DropdownHead title="Paragraph" getLabel={getLabel()} />}
      />
    </div>
  );
};

export default Toolbar;
