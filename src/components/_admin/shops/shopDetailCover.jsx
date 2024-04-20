'use client';
import NextLink from 'next/link';
// mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Card, Skeleton, Toolbar, Stack, alpha } from '@mui/material';
// components
import MyAvatar from 'src/components/myAvatar';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { BiMap } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import { fDateShort } from 'src/utils/formatTime';
import { MdVerified } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const RootStyle = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  height: 300,
  position: 'relative',
  overflow: 'hidden',
  borderWidth: 0,
  borderBottomWidth: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const InfoStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: 'absolute',
  bottom: '35px !important',
  [theme.breakpoints.up('md')]: {
    right: 'auto',
    display: 'flex',
    alignItems: 'center',
    left: theme.spacing(3),
    bottom: theme.spacing(3)
  }
}));

const CoverImgStyle = styled('div')({
  zIndex: 8,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

export default function ShopDetailCover({ data, isLoading, isUser }) {
  return (
    <RootStyle>
      <Image
        src={data?.cover?.url}
        alt={data?.title}
        // placeholder="blur"
        // blurDataURL={data?.cover?.blurDataURL}
        objectFit="cover"
        fill
      />
      <div>
        <Container fixed>
          <InfoStyle>
            <MyAvatar
              data={{ cover: data?.logo?.url, fullName: data?.title }}
              sx={{
                mx: 'auto',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: 'common.white',
                width: { xs: 80, md: 128 },
                height: { xs: 80, md: 128 },
                boxShadow: (theme) => `inset -1px 1px 2px ${alpha(theme.palette.common.black, 0.24)}`
              }}
            />
            <Box
              sx={{
                ml: { md: 3 },
                mt: { xs: 1, md: 0 },
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography variant="h4">{isLoading ? <Skeleton variant="text" width={220} /> : data?.title}</Typography>
              {isUser ? (
                <Stack direction="row" alignItems="center" justifyContent="end" spacing={0.5}>
                  <Typography variant="body1" component={NextLink} href="/" color="common.white">
                    Home
                  </Typography>
                  <IoIosArrowForward size={12} />
                  <Typography variant="body1" component={NextLink} href="/shops" color="common.white">
                    Shops
                  </Typography>
                  <IoIosArrowForward size={12} />
                  <Typography variant="body1">{data?.title}</Typography>
                </Stack>
              ) : (
                <Typography variant="body1">
                  {isLoading ? <Skeleton variant="text" width={220} /> : data?.description}
                </Typography>
              )}
            </Box>
          </InfoStyle>
          <CoverImgStyle />
        </Container>
      </div>
      <Toolbar
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          bgcolor: 'background.paper',
          minHeight: `48px !important`
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          spacing={3}
          sx={{
            width: '100% !important',
            '.MuiTypography-root': {
              display: 'flex !important'
            }
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="end" spacing={1}>
            <MdVerified color="#3F95FE" />
            <Typography variant="body2">
              {isLoading ? <Skeleton variant="text" width={80} /> : fDateShort(data?.createdAt)}
            </Typography>
          </Stack>
          {!isUser && (
            <>
              <Stack direction="row" alignItems="center" justifyContent="end" spacing={1}>
                <BiMap />
                <Typography variant="body2">
                  {isLoading ? (
                    <Skeleton variant="text" width={100} />
                  ) : (
                    data?.address?.streetAddress +
                    ' ' +
                    data?.address?.city +
                    ' ' +
                    data?.address?.state +
                    ' ' +
                    data?.address?.country
                  )}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="end" spacing={1}>
                <IoCall />
                <Typography variant="body2">
                  {isLoading ? <Skeleton variant="text" width={100} /> : data?.phone}
                </Typography>
              </Stack>
            </>
          )}
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}

// Add PropTypes
ShopDetailCover.propTypes = {
  data: PropTypes.shape({
    cover: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    logo: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),

    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};
