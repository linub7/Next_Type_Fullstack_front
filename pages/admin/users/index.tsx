import { NextPage } from 'next';
import React from 'react';
import AdminLayout from '../../../components/admin/layout/AdminLayout';

type Props = {};

const Users: NextPage = (props: Props) => {
  return (
    <AdminLayout>
      <h1>Users</h1>
    </AdminLayout>
  );
};

export default Users;
