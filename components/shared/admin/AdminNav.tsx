import { FC } from 'react';

interface Props {}

const AdminNav: FC<Props> = (props): JSX.Element => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark"></nav>
  );
};

export default AdminNav;
