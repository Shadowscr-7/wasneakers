import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { TfiWorld } from 'react-icons/tfi';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { MdClear } from 'react-icons/md';
import Typography from '@mui/material/Typography';
import { Grid, Button, Stack, alpha, Skeleton } from '@mui/material';
import { locales } from 'i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as api from 'src/services';
// usequery
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeCurrency } from 'src/redux/slices/settings';

export default function LanguageSelect() {
  const dispatch = useDispatch();
  const { currency } = useSelector(({ settings }) => settings);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const pathName = usePathname();
  const { data, isLoading } = useQuery(['get-currencies'], () => api.getCurrencies());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const redirectedPathName = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  const segments = pathName?.split('/');

  return (
    <React.Fragment>
      <IconButton
        aria-label="lang-curr-select"
        onClick={handleClickOpen}
        color="primary"
        sx={{
          borderColor: 'primary',
          borderWidth: 1,
          borderStyle: 'solid',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2)
        }}
      >
        <TfiWorld />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 5,
            top: 5,
            zIndex: 111
          }}
        >
          <MdClear />
        </IconButton>
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="language and region" value="1" />
                  <Tab label="currency" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography variant="h5" mb={2}>
                  Choose a language and region
                </Typography>
                <Grid container spacing={2}>
                  {locales.map((locale) => (
                    <Grid key={locale} item xs={12} md={3}>
                      <Button
                        fullWidth
                        component={Link}
                        onClick={() => setOpen(false)}
                        href={redirectedPathName(locale.code)}
                        size="large"
                        variant={segments[1] === locale.code ? 'outlined' : 'text'}
                        color={segments[1] === locale.code ? 'primary' : 'inherit'}
                        sx={{
                          textAlign: 'left',
                          justifyContent: 'start'
                        }}
                      >
                        <Stack>
                          <Typography variant="subtitle2">{locale.title}</Typography>
                          <Typography variant="body2">{locale.country}</Typography>
                        </Stack>
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Typography variant="h5" mb={2}>
                  Choose a currency
                </Typography>
                <Grid container spacing={2}>
                  {(isLoading ? Array.from(new Array(12)) : data?.data).map((cur) => (
                    <Grid key={Math.random()} item xs={12} md={3}>
                      <Button
                        onClick={() =>
                          dispatch(
                            handleChangeCurrency({
                              currency: cur.code,
                              rate: cur.rate
                            })
                          )
                        }
                        fullWidth
                        size="large"
                        variant={'outlined'}
                        color={currency === cur?.code ? 'primary' : 'inherit'}
                        sx={{
                          textAlign: 'left',
                          justifyContent: 'start'
                        }}
                      >
                        <Stack>
                          <Typography variant="subtitle2" noWrap>
                            {isLoading ? <Skeleton variant="text" width={120} /> : `${cur.name}-${cur.code}`}
                          </Typography>
                          <Typography variant="body2" noWrap>
                            {isLoading ? <Skeleton variant="text" width={60} /> : cur.country}
                          </Typography>
                        </Stack>
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
