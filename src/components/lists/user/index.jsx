import React from 'react';
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

// reduxt
import { useDispatch } from 'react-redux';
import { setLogout } from 'src/lib/redux/slices/user';
import { resetWishlist } from 'src/lib/redux/slices/wishlist';

// mui
import { Typography, Divider, ListItemIcon, Button, MenuItem, Box } from '@mui/material';
import { LuLogOut } from 'react-icons/lu';
import { MdKey } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { IoIosHeartEmpty } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';

import { SlHome } from 'react-icons/sl';
import { TbUserSquareRounded } from 'react-icons/tb';

// styles
import RootStyled from './styled';
import { deleteCookies } from 'src/hooks/cookies';

import PropTypes from 'prop-types';

UserList.propTypes = {
  openUser: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default function UserList({ ...props }) {
  const { openUser, user, setOpen, isAuthenticated } = props;
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const toggleLogout = () => {
    if (pathname.includes('admin') || pathname.includes('vendor') || pathname.includes('profile')) {
      router.push('/auth/login');
    }
  };

  return (
    <RootStyled autoFocusItem={openUser} id="composition-menu">
      <Box px={2}>
        <Typography variant="body1" color="text.primary" fontWeight={600} noWrap>
          {user?.firstName + ' ' + user?.lastName} {user?.role === 'admin' ? '( Admin )' : ''}
        </Typography>
        <Typography variant="body2" color="text.secondary" pb={1} noWrap>
          {user?.email}
        </Typography>
      </Box>
      <Divider />
      <MenuItem
        className="menu-item"
        onClick={() => {
          router.push('/');
          setOpen(false);
        }}
      >
        <ListItemIcon className="menu-icon">
          <SlHome />
        </ListItemIcon>
        Home
      </MenuItem>
      {user.role === 'admin' || user.role === 'super admin' ? (
        <MenuItem
          onClick={() => {
            router.push('/admin/dashboard');
            setOpen(false);
          }}
        >
          <ListItemIcon className="menu-icon">
            <LuLayoutDashboard />
          </ListItemIcon>
          Admin Dashboard
        </MenuItem>
      ) : user.role === 'vendor' ? (
        <MenuItem
          onClick={() => {
            router.push('/vendor/dashboard');
            setOpen(false);
          }}
        >
          <ListItemIcon className="menu-icon">
            <LuLayoutDashboard />
          </ListItemIcon>
          Vendor Dashboard
        </MenuItem>
      ) : null}
      <MenuItem
        onClick={() => {
          setOpen(false);
          router.push('/profile/wishlist');
        }}
      >
        <ListItemIcon className="menu-icon">
          <IoIosHeartEmpty />
        </ListItemIcon>
        Wishlist
      </MenuItem>
      <MenuItem
        onClick={() => {
          setOpen(false);
          router.push('/profile/orders');
        }}
      >
        <ListItemIcon className="menu-icon">
          <LiaFileInvoiceSolid />
        </ListItemIcon>
        Orders
      </MenuItem>
      <MenuItem
        onClick={() => {
          setOpen(false);
          router.push(
            user.role === 'admin' || user.role === 'super admin'
              ? '/admin/settings'
              : user.role === 'vendor'
                ? '/vendor/settings'
                : '/profile/general'
          );
        }}
      >
        <ListItemIcon className="menu-icon">
          <TbUserSquareRounded />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          setOpen(false);
          router.push(
            user.role === 'admin' || user.role === 'super admin'
              ? '/admin/settings/change-password'
              : user.role === 'vendor'
                ? '/vendor/settings/change-password'
                : '/profile/change-password'
          );
        }}
      >
        <ListItemIcon className="menu-icon">
          <MdKey />
        </ListItemIcon>
        Change Password
      </MenuItem>
      <Box px={2} mt={1}>
        <Button
          onClick={() => {
            deleteCookies('token');
            dispatch(setLogout());
            dispatch(resetWishlist());
            setOpen(false);
            toggleLogout();
          }}
          variant="outlined"
          color="inherit"
          startIcon={<LuLogOut />}
          fullWidth
        >
          Logout
        </Button>
      </Box>
    </RootStyled>
  );
}
