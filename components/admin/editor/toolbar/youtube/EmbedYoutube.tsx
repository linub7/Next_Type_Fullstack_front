import { useState } from 'react';
import { FC } from 'react';
import { IoLogoYoutube } from 'react-icons/io5';
import Button from '../dropdown/Button';

interface Props {
  onSubmit(link: string): void;
}

const EmbedYoutube: FC<Props> = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState('');

  const handleSubmit = () => {
    if (!youtubeLink.trim()) return hideForm();

    onSubmit(youtubeLink);
    setYoutubeLink('');
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
        <IoLogoYoutube />
      </Button>
      {visible && (
        <div className="absolute top-full mt-4 right-0 z-50">
          <div className="flex space-x-2 mt-2">
            <input
              autoFocus
              type="text"
              className="bg-transparent rounded border-2 border-secondary-dark focus:border-primary-dark dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary"
              placeholder="https://youtube.com"
              value={youtubeLink}
              onChange={({ target }) => setYoutubeLink(target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-action p-2 text-primary rounded text-sm"
            >
              Embed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbedYoutube;
