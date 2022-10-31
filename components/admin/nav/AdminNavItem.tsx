import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { textStyleColor } from '../../../constants';

interface Props {
  path: string;
  children: ReactNode;
}

const AdminNavItem: FC<Props> = ({ path, children }) => {
  return (
    <div>
      <Link href={path} passHref>
        <a
          className={`flex items-center p-3 hover:scale-[0.98] transition ${textStyleColor} text-xl`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

export default AdminNavItem;
