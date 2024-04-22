import React from 'react';
// mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, TableRow, Skeleton, TableCell, Typography, Stack, IconButton, Tooltip } from '@mui/material';
// components
import { IoEye } from 'react-icons/io5';
import Label from 'src/components/label';
import { MdEdit } from 'react-icons/md';
import { useRouter } from 'next-nprogress-bar';
// utils
import { fCurrency } from 'src/utils/formatNumber';
import { fDateShort } from 'src/utils/formatTime';
import PropTypes from 'prop-types';

IncomeList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  row: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        cover: PropTypes.string,
        imageUrl: PropTypes.string,
        cover: PropTypes.string
      })
    ).isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }),
    createdAt: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.oneOf(['delivered', 'ontheway', 'pending']).isRequired,
    total: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired,
  isUser: PropTypes.bool.isRequired
};

const ThumbImgStyle = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  objectFit: 'cover',
  border: '1px solid ' + theme.palette.divider,
  borderRadius: theme.shape.borderRadiusSm,
  position: 'relative',
  overflow: 'hidden'
}));
function getMonthName(monthNumber) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[monthNumber];
}
export default function IncomeList({ isLoading, row, isUser }) {
  const theme = useTheme();
  const router = useRouter();
  return (
    <TableRow hover key={Math.random()}>
      <TableCell>{isLoading ? <Skeleton variant="text" /> : row.orders.length}</TableCell>
      <TableCell>{isLoading ? <Skeleton variant="text" /> : fCurrency(row.totalIncome)}</TableCell>

      <TableCell>{isLoading ? <Skeleton variant="text" /> : '20%'}</TableCell>
      <TableCell>
        {isLoading ? (
          <Skeleton variant="text" />
        ) : (
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={
              (row?.status === 'paid' && 'success') ||
              (row?.status === 'hold' && 'error') ||
              (row?.status === 'pending' && 'info') ||
              'error'
            }
          >
            {row.status}
          </Label>
        )}
      </TableCell>
      <TableCell>{isLoading ? <Skeleton variant="text" /> : <>{fDateShort(row.date).slice(3)}</>}</TableCell>
      <TableCell align="right">
        <Stack direction="row" justifyContent="flex-end">
          {isLoading ? (
            <Skeleton variant="circular" width={34} height={34} sx={{ mr: 1 }} />
          ) : (
            <Tooltip title="Edit">
              <IconButton onClick={() => router.push(`/dashboard/orders/${row._id}`)}>
                <MdEdit />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </TableCell>
    </TableRow>
  );
}