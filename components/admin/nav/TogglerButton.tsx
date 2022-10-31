import { FC, ReactNode } from 'react';
import { textStyleColor } from '../../../constants';

interface Props {
  children: ReactNode;
  handleClick: () => void;
}

const TogglerButton: FC<Props> = ({ children, handleClick }) => {
  return (
    <button
      className={`${textStyleColor} p-3 hover:scale-[0.98] transition`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default TogglerButton;
