'use client';
import React from 'react';
// Toolbar
import Toolbar from 'src/components/_admin/toolbar';
// Breadcrumbs
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
// components
import EditCurrency from 'src/components/_admin/currencies/editCurrency';
import * as api from 'src/services';
// usequery
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
export default function Page({ params }) {
  const { data, isLoading } = useQuery(['get-admin-currency'], () => api.getCurrencyByAdmin(params.cid), {
    onError: (err) => {
      toast.error(err.response.data.message || 'Something went wrong!');
    }
  });
  return (
    <div>
      <Toolbar>
        <HeaderBreadcrumbs
          admin
          heading="Currency List"
          links={[
            {
              name: 'Dashboard',
              href: '/admin'
            },
            {
              name: 'Currencies',
              href: '/admin/currencies'
            },
            {
              name: 'Add currency'
            }
          ]}
        />
      </Toolbar>
      <EditCurrency isLoading={isLoading} data={data?.data} />
    </div>
  );
}