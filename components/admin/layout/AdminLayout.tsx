import dynamic from 'next/dynamic';
import Link from 'next/link';
import { IoAddOutline } from 'react-icons/io5';

import { FC, ReactNode } from 'react';
import AdminNav from '../nav/AdminNav';

type Props = {
  children: ReactNode;
};

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <AdminNav />
      <div className="flex-1 p-4">{children}</div>
      <Link href={'/admin/post/create'}>
        <a className="bg-secondary-dark dark:bg-secondary-light text-primary dark:text-primary-dark-dark fixed z-10 right-10 bottom-10 p-3 rounded-full hover:scale-90 hover:text-amber-400 shadow-sm transition ">
          <IoAddOutline size={24} />
        </a>
      </Link>
    </div>
  );
};

export default AdminLayout;
