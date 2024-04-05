'use client';
// react
import React from 'react';
// mui
import { Typography, Grid, Box, Stack, Paper } from '@mui/material';
// api
import * as api from 'src/services';
import { useQuery } from 'react-query';
// component
import ShopCard from 'src/components/cards/shop';

export default function ShopComponent() {
  const { data, isLoading } = useQuery(['get-home-shops-all'], () => api.getAllShops());
  console.log(data, 'shops');
  return (
    <Paper elevation={0}>
      <Stack
        direction={'column'}
        sx={{
          gap: 3,
          mt: 5
        }}
      >
        <Box>
          <Typography variant="h2" color="text.primary" textAlign="center">
            All Shops
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {(isLoading ? Array.from(new Array(6)) : data?.data).map((inner) => (
              <React.Fragment key={Math.random()}>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <ShopCard shop={inner} isLoading={isLoading} />
                </Grid>
              </React.Fragment>
            ))}
            {!isLoading && !Boolean(data?.data.length) && (
              <Typography variant="h3" color="error.main" textAlign="center">
                Shop not found
              </Typography>
            )}
          </Grid>
        </Box>
      </Stack>
    </Paper>
  );
}
