import React from 'react';
import PropTypes from 'prop-types';
// materil ui + styling components
import { styled, useTheme, alpha, useMediaQuery, Fab, Box } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
// icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsShop } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { IoSettingsOutline } from 'react-icons/io5';

// next
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Scrollbar from 'src/components/Scrollbar';
// Dashboard Side NevLinks
export const navlinks = [
  {
    id: 1,
    title: 'Dashboard',
    slug: '/dashboard',
    icon: <LuLayoutDashboard />
  },

  {
    id: 2,
    title: 'Products',
    slug: '/products',
    icon: <BsShop />,
    isSearch: true
  },

  {
    id: 3,
    title: 'Orders',
    slug: '/orders',
    icon: <BsCart3 />,
    isSearch: true
  },
  {
    id: 4,
    title: 'Shop',
    slug: '/shop',
    icon: <HiOutlineShoppingBag />,
    isSearch: false
  },
  {
    id: 5,
    title: 'Settings',
    slug: '/settings',
    icon: <IoSettingsOutline />,
    isSearch: false
  }
];

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
  borderRadius: 0,
  [theme.breakpoints.down('md')]: {
    position: 'fixed'
  }
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `0px`,
  borderRadius: 0,
  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  },
  [theme.breakpoints.down('md')]: {
    position: 'fixed'
  }
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  zIndex: 11,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

export default function Sidebar({ handleDrawerClose, handleDrawerOpen, open }) {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = React.useState('/dashboard');
  const [initial, setInitial] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  React.useEffect(() => {
    setActive(pathname);
    setInitial(true);
  }, [pathname]);
  console.log('/dashboard/' + pathname.split('/')[2], "'/dashboard/' + pathname.split('/')[1]");
  return (
    <div>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          '&.MuiDrawer-root': {
            '.MuiPaper-root': {
              overflow: { xs: 'hidden', md: 'unset' },
              zIndex: 998 + '!important'
            }
          }
        }}
      >
        <DrawerHeader />
        <Box
          sx={{
            position: 'absolute',
            right: -15,
            top: 85,
            zIndex: 9999999,
            display: { xs: 'none', md: 'flex' }
          }}
        >
          <Fab
            size="small"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              bgcolor: theme.palette.background.paper,
              border: '1px solid' + theme.palette.divider,
              boxShadow: 'none',
              height: 25,
              minHeight: 25,
              width: 25,
              ':hover': {
                bgcolor: theme.palette.background.paper
              },
              svg: {
                color: theme.palette.text.primary
              }
            }}
          >
            {open ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </Fab>
        </Box>
        <Scrollbar
          sx={{
            height: 1,
            '& .simplebar-content': {
              height: 1,
              display: 'flex',
              flexDirection: 'column'
            }
          }}
        >
          <List
            sx={{
              px: 1.5,
              gap: 1,
              display: 'flex',
              flexDirection: 'column',
              py: 2
            }}
          >
            {navlinks.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                sx={{
                  display: 'block',
                  borderRadius: '8px',
                  border: `1px solid transparent`,
                  ...((pathname.split('/')?.length > 3 ? '/vendor/' + pathname.split('/')[2] : active) ===
                    '/vendor' + item.slug &&
                    initial && {
                      bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
                      border: (theme) => `1px solid ${theme.palette.primary.main}`,
                      color: theme.palette.primary.main,
                      '& .MuiTypography-root': {
                        fontWeight: 600
                      }
                    })
                }}
              >
                <Tooltip title={open ? '' : item.title} placement="left" arrow leaveDelay={200}>
                  <ListItemButton
                    onClick={() => {
                      setActive('/vendor' + item.slug);
                      router.push('/vendor' + item.slug);
                      isMobile && handleDrawerClose();
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      borderRadius: '8px'
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : 'auto',
                        justifyContent: 'center'
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={item.title}
                      sx={{
                        overflow: 'hidden',
                        height: open ? 'auto' : 0,
                        textTransform: 'capitalize'
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </div>
  );
}
Sidebar.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};