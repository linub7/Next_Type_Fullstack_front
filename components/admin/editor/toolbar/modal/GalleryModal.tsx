import { Dispatch, FC, SetStateAction } from 'react';
import ModalContainer from './ModalContainer';

interface Props {
  visible: boolean;
  setVisibleImageGallery: Dispatch<SetStateAction<boolean>>;
}

const GalleryModal: FC<Props> = ({ visible, setVisibleImageGallery }) => {
  return (
    <ModalContainer
      visible={visible}
      setVisibleImageGallery={setVisibleImageGallery}
    >
      <div className="bg-black p-20"></div>
    </ModalContainer>
  );
};

export default GalleryModal;
