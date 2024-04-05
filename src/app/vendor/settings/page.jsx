import React from 'react';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import Toolbar from 'src/components/_admin/toolbar';
import AccountGeneral from 'src/components/_main/profile/edit/accountGeneral';
// Meta information
export const metadata = {
  title: 'Setting - Nextall',
  applicationName: 'Nextall',
  authors: 'Nextall'
};
export default function page() {
  return (
    <div>
      <Toolbar>
        <HeaderBreadcrumbs
          heading="Dashboard"
          admin
          links={[
            {
              name: 'Dashboard',
              href: '/'
            },
            {
              name: 'Settings'
            }
          ]}
          action={{
            href: `/vendor/settings/shop`,
            title: 'Shop Setting'
          }}
        />
      </Toolbar>
      <AccountGeneral />
    </div>
  );
}
