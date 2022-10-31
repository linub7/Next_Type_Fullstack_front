import { FC } from 'react';
import { Editor } from '@tiptap/react';
import {
  AiOutlineBold,
  AiOutlineStrikethrough,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineItalic,
  AiOutlineUnderline,
} from 'react-icons/ai';
import { BsBraces } from 'react-icons/bs';
import { RiDoubleQuotesL } from 'react-icons/ri';
import {
  IoCodeOutline,
  IoImageOutline,
  IoLinkOutline,
  IoLogoYoutube,
} from 'react-icons/io5';

import DropdownOptions from './dropdown/DropdownOptions';
import DropdownHead from './dropdown/DropdownHead';
import { getFocusedEditor } from '../../../../utils/editorUtils';
import Button from './dropdown/Button';
import Separator from './Separator';

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
    <div className="flex items-center">
      <DropdownOptions
        options={paragraphOptions}
        head={<DropdownHead title="Paragraph" getLabel={getLabel()} />}
      />
      <Separator />
      <div className="flex items-center space-x-3">
        <Button onClick={() => getFocusedEditor(editor).toggleBold().run()}>
          <AiOutlineBold />
        </Button>
        <Button onClick={() => getFocusedEditor(editor).toggleItalic().run()}>
          <AiOutlineItalic />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        >
          <AiOutlineUnderline />
        </Button>
        <Button onClick={() => getFocusedEditor(editor).toggleStrike().run()}>
          <AiOutlineStrikethrough />
        </Button>
      </div>
      <Separator />
      <div className="flex items-center space-x-3">
        <Button
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL />
        </Button>
        <Button onClick={() => getFocusedEditor(editor).toggleCode().run()}>
          <IoCodeOutline />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces />
        </Button>
        <Button>
          <IoLinkOutline />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <AiOutlineOrderedList />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        >
          <AiOutlineUnorderedList />
        </Button>
      </div>
      <Separator />

      <div className="flex items-center space-x-3">
        <Button>
          <IoLogoYoutube />
        </Button>
        <Button>
          <IoImageOutline />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
