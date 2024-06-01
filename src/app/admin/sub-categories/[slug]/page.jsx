'use client';
import React from 'react';

import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import EditSubCategory from 'src/components/_admin/subCategories/editCategory';
import * as api from 'src/services';
// usequery
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

Page.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
};
export default function Page({ params }) {
  const { data, isLoading } = useQuery(['sub-category-admin'], () => api.getSubCategoryByAdmin(params.slug), {
    onError: (err) => {
      toast.error(err.response.data.message || 'Something went wrong!');
    }
  });
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Sub Categories List"
        links={[
          {
            name: 'Dashboard',
            href: '/admin'
          },
          {
            name: 'Sub Categories',
            href: '/admin/sub-categories'
          },
          {
            name: data?.data?.name
          }
        ]}
      />
      <EditSubCategory data={data?.data} categories={data?.categories} isLoading={isLoading} />
    </div>
  );
}