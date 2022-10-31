import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import {
  IoGridOutline,
  IoMailOutline,
  IoNewspaperOutline,
  IoPeopleOutline,
  IoReturnDownBackOutline,
  IoReturnDownForwardOutline,
} from 'react-icons/io5';
import { useWindowWidth } from '@react-hook/window-size';

import AdminNavItem from './AdminNavItem';
import Logo from './Logo';
import { textStyleColor } from '../../../constants';
import TogglerButton from './TogglerButton';
import { useRouter } from 'next/router';

interface Props {}

const AdminNav: FC<Props> = (props): JSX.Element => {
  // hooks
  const onlyWidth = useWindowWidth();
  const [isExtended, setIsExtended] = useState(true);

  console.log(isExtended);

  const { pathname } = useRouter();

  // TODO: set extended state to global state
  useEffect(() => {
    if (typeof window !== undefined) {
      onlyWidth < 800 ? setIsExtended(false) : setIsExtended(true);
    }
  }, [onlyWidth]);

  // handle nav width with hooks
  useEffect(() => {
    onlyWidth < 800 ? setIsExtended(false) : setIsExtended(true);
  }, [onlyWidth < 800]);

  const handleToggle = () => {
    setIsExtended((prev) => !prev);
  };

  const isDashboardPage = pathname === '/admin' ? true : false;
  const isPostsPage = pathname === '/admin/posts' ? true : false;
  const isUsersPage = pathname === '/admin/users' ? true : false;
  const isCommentsPage = pathname === '/admin/comments' ? true : false;
  return (
    <nav
      className={`h-screen flex flex-col ${
        isExtended ? 'w-52' : 'w-14'
      } shadow-sm bg-secondary-light dark:bg-secondary-dark transition-width overflow-hidden sticky top-0`}
    >
      <Link href={'/admin'} passHref>
        <a className="flex items-center space-x-2 p-3 mb-10">
          <Logo className={`${textStyleColor} w-5 h-5`} />
          {isExtended && (
            <span className="fill-highlight-light dark:fill-highlight-dark text-xl font-semibold leading-none">
              Admin
            </span>
          )}
        </a>
      </Link>

      <div className="flex-1">
        <AdminNavItem path="/admin">
          <IoGridOutline size={24} color={`${isDashboardPage && '#f1c40f'}`} />
          {isExtended && <span className={`ml-2 leading-none`}>Dashboard</span>}
        </AdminNavItem>

        <AdminNavItem path="/admin/posts">
          <IoNewspaperOutline size={24} color={`${isPostsPage && '#f1c40f'}`} />
          {isExtended && <span className={`ml-2 leading-none`}>Posts</span>}
        </AdminNavItem>

        <AdminNavItem path="/admin/users">
          <IoPeopleOutline size={24} color={`${isUsersPage && '#f1c40f'}`} />
          {isExtended && <span className={`ml-2 leading-none`}>Users</span>}
        </AdminNavItem>

        <AdminNavItem path="/admin/comments">
          <IoMailOutline size={24} color={`${isCommentsPage && '#f1c40f'}`} />
          {isExtended && <span className={`ml-2 leading-none`}>Comments</span>}
        </AdminNavItem>
      </div>

      {isExtended ? (
        <TogglerButton handleClick={handleToggle}>
          <div className="flex justify-end">
            <IoReturnDownBackOutline size={24} />
          </div>
        </TogglerButton>
      ) : (
        <TogglerButton handleClick={handleToggle}>
          <IoReturnDownForwardOutline size={24} />
        </TogglerButton>
      )}
    </nav>
  );
};

export default AdminNav;
