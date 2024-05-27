'use client';
// react
import React from 'react';
// next
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
// mui
import { alpha } from '@mui/material/styles';
import { Toolbar, Skeleton, Stack, AppBar, useMediaQuery, Box } from '@mui/material';
// redux
import { useSelector } from 'react-redux';

// config

import MainLogo from 'src/components/mainLogo';

const MobileBar = dynamic(() => import('src/layout/_main/mobileBar'));

// dynamic import components
const SettingMode = dynamic(() => import('src/components/settings/themeModeSetting'), {
  loading: () => <Skeleton variant="circular" width={40} height={40} />
});
const WishlistPopover = dynamic(() => import('src/components/popover/wislist'), {
  loading: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Skeleton variant="circular" width={40} height={40} />
      <Box>
        <Skeleton variant="text" width={60} sx={{ mb: 0.6 }} />
        <Skeleton variant="text" width={60} />
      </Box>
    </Stack>
  )
});
const CartWidget = dynamic(() => import('src/components/cartWidget'), {
  loading: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Skeleton variant="circular" width={40} height={40} />
      <Box>
        <Skeleton variant="text" width={60} sx={{ mb: 0.6 }} />
        <Skeleton variant="text" width={60} />
      </Box>
    </Stack>
  )
});

const CompareWidget = dynamic(() => import('src/components/compareWidget'), {
  ssr: false,
  loading: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Skeleton variant="circular" width={40} height={40} />
      <Box>
        <Skeleton variant="text" width={60} sx={{ mb: 0.6 }} />
        <Skeleton variant="text" width={60} />
      </Box>
    </Stack>
  )
});
const Search = dynamic(() => import('src/components/dialog/search'), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" width={300} height={56} sx={{ borderRadius: '70px' }} />
});
const LanguageSelect = dynamic(() => import('src/components/languageSelect'), {
  ssr: false,
  loading: () => <Skeleton variant="circular" width={40} height={40} />
});
// const UserSelect = dynamic(() => import('src/components/select/userSelect'), {
//   ssr: false,
//   loading: () => <Skeleton variant="circular" width={50} height={50} />
// });
// const AdminDialog = dynamic(() => import('src/components/dialog/admin'));

// ----------------------------------------------------------------------
export default function Navbar() {
  const pathname = usePathname();
  const { checkout } = useSelector(({ product }) => product);
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 'none',
          position: 'sticky',
          top: -0.5,
          zIndex: 999,
          borderRadius: 0,
          pr: '0px !important',
          bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          // borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          display: { md: 'block', xs: 'none' },
          '& .toolbar': {
            justifyContent: 'space-between',
            backdropFilter: 'blur(6px)',
            borderRadius: 0,
            WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
            bgcolor: (theme) => alpha(theme.palette.background.paper, 1),
            px: 3,
            py: 1.5
          }
        }}
      >
        <Toolbar disableGutters className="toolbar">
          <Stack gap={4} direction="row" alignItems={'center'}>
            <MainLogo />
            <Search />
          </Stack>
          {/* {isLoading ? <Skeletons /> : <MenuDesktop isHome={isHome} navConfig={menu} categories={data?.data} />} */}

          <Stack gap={2} direction="row" alignItems={'center'}>
            <LanguageSelect />
            <SettingMode />
            <WishlistPopover />
            <CompareWidget />
            <CartWidget checkout={checkout} />
            {/* <UserSelect /> */}
          </Stack>
        </Toolbar>
      </AppBar>
      {isMobile && <MobileBar />}
      {/* {data?.adminPopup && <AdminDialog isOpen={data?.adminPopup} />} */}
    </>
  );
}
