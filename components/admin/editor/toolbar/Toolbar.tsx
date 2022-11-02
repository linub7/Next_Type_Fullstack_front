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
import { IoCodeOutline, IoImageOutline, IoLogoYoutube } from 'react-icons/io5';

import DropdownOptions from './dropdown/DropdownOptions';
import DropdownHead from './dropdown/DropdownHead';
import { getFocusedEditor } from '../../../../utils/editorUtils';
import Button from './dropdown/Button';
import Separator from './separator/VerticalSeparator';
import InsertLink from './link/InsertLink';
import { linkOption } from './link/LinkForm';
import EmbedYoutube from './youtube/EmbedYoutube';

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

  const handleSubmitLink = ({ url, openInNewTab }: linkOption) => {
    const { commands } = editor;
    if (openInNewTab) {
      commands.setLink({ href: url, target: '_blank' });
    } else {
      commands.setLink({ href: url });
    }
  };

  const handleEmbedYoutubeLink = (url: string) => {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  return (
    <div className="flex items-center">
      <DropdownOptions
        options={paragraphOptions}
        head={<DropdownHead title="Paragraph" getLabel={getLabel()} />}
      />

      <Separator />

      <div className="flex items-center space-x-3">
        <Button
          active={editor.isActive('bold')}
          onClick={() => getFocusedEditor(editor).toggleBold().run()}
        >
          <AiOutlineBold />
        </Button>

        <Button
          active={editor.isActive('italic')}
          onClick={() => getFocusedEditor(editor).toggleItalic().run()}
        >
          <AiOutlineItalic />
        </Button>

        <Button
          active={editor.isActive('underline')}
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        >
          <AiOutlineUnderline />
        </Button>

        <Button
          active={editor.isActive('strike')}
          onClick={() => getFocusedEditor(editor).toggleStrike().run()}
        >
          <AiOutlineStrikethrough />
        </Button>
      </div>

      <Separator />

      <div className="flex items-center space-x-3">
        <Button
          active={editor.isActive('blockquote')}
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL />
        </Button>

        <Button
          active={editor.isActive('code')}
          onClick={() => getFocusedEditor(editor).toggleCode().run()}
        >
          <IoCodeOutline />
        </Button>

        <Button
          active={editor.isActive('codeBlock')}
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces />
        </Button>

        <InsertLink onSubmit={handleSubmitLink} />

        <Button
          active={editor.isActive('orderedList')}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <AiOutlineOrderedList />
        </Button>

        <Button
          active={editor.isActive('bulletList')}
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        >
          <AiOutlineUnorderedList />
        </Button>
      </div>

      <Separator />

      <div className="flex items-center space-x-3">
        <EmbedYoutube onSubmit={handleEmbedYoutubeLink} />

        <Button>
          <IoImageOutline />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
