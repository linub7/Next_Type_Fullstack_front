import { FC } from 'react';
import { IoCaretDownOutline } from 'react-icons/io5';

interface Props {
  title: string;
  getLabel: string;
}

const DropdownHead: FC<Props> = ({ title, getLabel }) => {
  return (
    <div className="flex items-center space-x-2 text-primary-dark dark:text-primary-light">
      <p>{getLabel}</p>
      <IoCaretDownOutline />
    </div>
  );
};

export default DropdownHead;
