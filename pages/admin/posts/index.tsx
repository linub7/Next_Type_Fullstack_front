import { NextPage } from 'next';
import React from 'react';
import AdminLayout from '../../../components/admin/layout/AdminLayout';

type Props = {};

const Posts: NextPage = (props: Props) => {
  return (
    <AdminLayout>
      <h1>Posts</h1>
    </AdminLayout>
  );
};

export default Posts;
