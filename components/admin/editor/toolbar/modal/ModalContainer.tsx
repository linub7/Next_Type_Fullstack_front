import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useId,
} from 'react';

interface Props {
  children: ReactNode;
  visible?: boolean;
  setVisibleImageGallery: Dispatch<SetStateAction<boolean>>;
}

const ModalContainer: FC<Props> = ({
  visible,
  children,
  setVisibleImageGallery,
}): JSX.Element | null => {
  const containerId = useId();

  const handleClose = useCallback(() => {
    setVisibleImageGallery(false);
  }, [setVisibleImageGallery]);

  const handleCloseModal = ({ target }: any) => {
    if (target.id === containerId) handleClose();
  };

  useEffect(() => {
    const closeModal = ({ key }: any) => {
      if (key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  }, [handleClose]);

  if (!visible) return null;

  return (
    <div
      id={containerId}
      onClick={handleCloseModal}
      className="fixed inset-0 bg-primary dark:bg-primary-dark dark:bg-opacity-5 bg-opacity-5 backdrop-blur-[2px] z-50 flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default ModalContainer;
