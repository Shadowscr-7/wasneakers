'use client';
import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
// mui
import { Stack, Drawer } from '@mui/material';
import { IconButton, Typography, Skeleton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// next
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// icon
import { MdTune } from 'react-icons/md';
// lodash
import { isString } from 'lodash';
//  component
const Filter = dynamic(() => import('src/components/_main/products/filters'), {
  loading: () => <Skeleton variant="rounded" width={'100%'} height={185} />
});

export default function SortBar({ fetchFilters, productData, shop, isLoading, sortData, category, subCategory }) {
  // filterData
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [itemsPerPage, setItemsPerPage] = useState('12');
  const top = searchParams.get('top');
  const name = searchParams.get('name');
  const date = searchParams.get('date');
  const price = searchParams.get('price');
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

  const [state, setState] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const createQueryString = useCallback(
    (name, value, key) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      if (name !== key) {
        params.delete(key);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (event) => {
    const filtered = sortData.find((item) => item.title === event.target.value);

    if (state) {
      const sortedData = sortData.find((item) => item.title === state);
      const key = sortedData?.key;

      router.push(`${pathname}?${createQueryString([filtered.key], filtered.value, key)}`);
      setState(filtered.title);
    } else {
      router.push(`${pathname}?${createQueryString([filtered.key], filtered.value)}`);
      setState(filtered.title);
    }
  };
  useEffect(() => {
    setItemsPerPage(isString(limit) ? limit : '12');
    setState(
      top === '-1'
        ? 'Top Rated'
        : name === '1'
          ? 'Asceding'
          : name === '-1'
            ? 'Desceding'
            : date === '1'
              ? 'Oldest'
              : date === '-1'
                ? 'Newest'
                : price === '1'
                  ? 'Price low to high'
                  : price === '-1'
                    ? 'Price high to low'
                    : 'Top Rated'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name || date || price || limit || top]);
  return (
    <>
      <Stack
        pt={2}
        alignItems="center"
        justifyContent={'space-between'}
        sx={{
          flexDirection: { md: 'row', xs: 'column-reverse' },
          button: {
            mr: 1,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: '4px',
            '&.active': {
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              svg: {
                color: 'primary.main'
              }
            }
          }
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: { md: 0, xs: 1.5 },
            fontSize: {
              sm: '1rem',
              xs: '12px'
            }
          }}
        >
          {isLoading ? (
            <Skeleton variant="text" width={150} />
          ) : (
            productData !== 0 && (
              <>
                Showing {page ? `${(Number(page) - 1) * Number(itemsPerPage) + 1}` : 1}-
                {productData?.total < Number(itemsPerPage) * (Number(page) || 1)
                  ? productData?.total
                  : Number(itemsPerPage) * (Number(page) || 1)}{' '}
                of {productData?.total} items
              </>
            )
          )}
        </Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{
              display: { md: 'none', xs: 'flex' },
              bgcolor: 'background.neutral',
              height: 40,
              width: 40
            }}
          >
            <MdTune />
          </IconButton>
          <FormControl
            size="small"
            fullWidth
            sx={{
              minWidth: 150
            }}
          >
            {state || state === '' ? (
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={state} onChange={handleChange}>
                {sortData.map((item) => (
                  <MenuItem key={Math.random()} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Skeleton variant="rounded" width={150} height={40} />
            )}
          </FormControl>
          <FormControl size="small" fullWidth sx={{ maxWidth: 150 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(e.target.value);

                router.push(`${pathname}?${createQueryString('limit', e.target.value)}`);
              }}
              sx={{
                '& .MuiSelect-select': {
                  textTransform: 'capitalize'
                }
              }}
            >
              {['12', '18', '24', '30'].map((item) => (
                <MenuItem
                  key={Math.random()}
                  value={item}
                  sx={{
                    textTransform: 'capitalize'
                  }}
                >
                  Show: {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            borderRadius: '0px !important',
            bgcolor: (theme) => theme.palette.background.paper
          }
        }}
      >
        <Filter
          category={category}
          subCategory={subCategory}
          shop={shop}
          fetchFilters={fetchFilters}
          pathname="/products"
          isMobile
          onClose={() => setOpenDrawer(false)}
        />
      </Drawer>
    </>
  );
}
// add propTypes
SortBar.propTypes = {
  fetchFilters: PropTypes.func.isRequired,
  productData: PropTypes.object.isRequired,
  sortData: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
  subCategory: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};
