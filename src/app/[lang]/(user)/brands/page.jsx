// react
import React from 'react';

// mui
import { Typography, Grid, Box, Stack, Container } from '@mui/material';

// api
import * as api from 'src/services';
// component
import ShopCard from 'src/components/cards/shop';

export default async function BrandPage() {
  const data = await api.getAllShopsByUser();

  return (
    <Container fixed>
      <Stack
        direction={'column'}
        sx={{
          gap: 3,
          mt: 5
        }}
      >
        <Box>
          <Typography variant="h2" color="text.primary" textAlign="center">
            All Brands
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {(data?.data).map((inner) => (
              <React.Fragment key={Math.random()}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <ShopCard shop={inner} isLoading={false} />
                </Grid>
              </React.Fragment>
            ))}
            {!Boolean(data?.data.length) && (
              <Typography variant="h3" color="error.main" textAlign="center">
                Brands not found
              </Typography>
            )}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
