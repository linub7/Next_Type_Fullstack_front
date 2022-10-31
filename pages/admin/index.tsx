import { NextPage } from 'next';
import AdminNav from '../../components/shared/admin/AdminNav';

type Props = {};

const Admin: NextPage = (props: Props) => {
  return (
    <div>
      <AdminNav />
    </div>
  );
};

export default Admin;
