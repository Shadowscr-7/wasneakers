'use client';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Grid, Typography, Box, Stack, IconButton, TextField, Button } from '@mui/material';
import Image from 'next/image';
// images and Icons
import { MdClear } from 'react-icons/md';
import subscriptionImg from '../../../../public/images/subscription-img.png';
// react
import { useMutation } from 'react-query';
// formik
import { Form, FormikProvider, useFormik } from 'formik';
// api
import * as api from 'src/services';
// toast
import { toast } from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';

export default function Subscription() {
  const [open, setOpen] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect to open the dialog when the component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000); // 10 seconds delay

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  //   api integrate
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: async (values) => {
      if (
        values.email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setloading(true);
        mutate(values);
        handleClose();
      } else {
        toast.error('Invalid email!');
      }
    }
  });

  const { mutate } = useMutation(api.sendNewsletter, {
    onSuccess: (data) => {
      toast.success(data.message);
      setloading(false);
      formik.resetForm();
    },
    onError: (err) => {
      setloading(false);
      toast.error(err.response.data.message);
    }
  });

  const { handleSubmit, getFieldProps } = formik;

  return (
    <React.Fragment>
      <Dialog open={open} fullWidth maxWidth="md" onClose={handleClose}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                height: 400,
                width: '100%',
                display: { xs: 'none', md: 'block' }
              }}
            >
              <Image
                src={subscriptionImg}
                alt="subscribe"
                fill
                objectFit="cover"
                static
                placeholder="blur"
                priority
                sizes="100vh"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <DialogContent>
              <Box
                sx={{
                  position: 'absolute',
                  top: 5,
                  right: 5
                }}
              >
                <IconButton onClick={handleClose}>
                  <MdClear size={20} />
                </IconButton>
              </Box>
              <Stack spaceing={2} textAlign="center" mb={4}>
                <Typography variant="h4">Sign up to Nextgater</Typography>
                <DialogContentText>
                  Enter your email address to subscribe our notification of our new post & features by email.
                </DialogContentText>
              </Stack>
              <FormikProvider value={formik}>
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField size="large" placeholder="Enter your Email" {...getFieldProps('email')} />

                    <LoadingButton
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                      loading={loading}
                      sx={{ marginTop: 8, paddingX: 4 }}
                    >
                      Subscribe
                    </LoadingButton>
                    <Button variant="text" size="large" color="inherit" onClick={handleClose}>
                      No Thanks
                    </Button>
                  </Stack>
                </Form>
              </FormikProvider>
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}