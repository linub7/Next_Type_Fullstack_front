import { NextPage } from 'next';
import React from 'react';
import AdminLayout from '../../../components/admin/layout/AdminLayout';

type Props = {};

const Comments: NextPage = (props: Props) => {
  return (
    <AdminLayout>
      <h1>Comments</h1>
    </AdminLayout>
  );
};

export default Comments;
