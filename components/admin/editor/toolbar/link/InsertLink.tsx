import { useState } from 'react';
import { FC } from 'react';
import { IoLinkOutline } from 'react-icons/io5';
import Button from '../dropdown/Button';
import LinkForm, { linkOption } from './LinkForm';

interface Props {
  onSubmit(link: linkOption): void;
}

const InsertLink: FC<Props> = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);

  const handleSubmit = (link: linkOption) => {
    if (!link.url.trim()) return hideForm();

    onSubmit(link);
    hideForm();
  };

  const hideForm = () => setVisible(false);
  const showForm = () => setVisible(true);
  return (
    <div
      className="relative"
      onKeyDown={({ key }) => {
        if (key === 'Escape') hideForm();
      }}
    >
      <Button onClick={visible ? hideForm : showForm}>
        <IoLinkOutline />
      </Button>
      <div className="absolute top-full mt-4 right-0 z-50">
        <LinkForm visible={visible} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default InsertLink;
