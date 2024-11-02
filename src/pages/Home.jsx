import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import Navbar from '../components/Navbar';
import Sidenav from './../components/Sidenav';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash';

export default function Home() {
  return (
    <>
      <Box
        minHeight={'100vh'}
        bgcolor={'#ECEFF1'}
        sx={{
          background: 'linear-gradient(158deg, rgb(224,224,224) 0%, rgb(233,237,254) 100%)',
        }}
      >
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid size={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: 'linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,40,141,1) 100%)',
                    }}
                  >
                    <CardContent>
                      <CreditCardIcon sx={{ color: 'aliceblue' }} />
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#FFF' }}
                      >
                        $500.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: 'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%)',
                    }}
                  >
                    <CardContent>
                      <ShoppingBagIcon sx={{ color: 'aliceblue' }} />
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#FFF' }}
                      >
                        $900.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid size={4}>
                <Stack spacing={2}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      background: 'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%)',
                    }}
                  >
                    {/* <CardContent> */}
                    <Stack
                      spacing={2}
                      direction="row"
                      alignItems={'center'}
                      ml={3}
                    >
                      <StorefrontIcon
                        sx={{ color: 'aliceblue' }}
                      />
                      <Box padding={'10px'}>
                        <Typography
                          variant="body1"
                          component="span"
                          fontWeight={600}
                          sx={{ color: '#FFF' }}
                        >
                          $203K
                        </Typography>
                        <br />
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{ color: '#FFF' }}
                        >
                          Total Income
                        </Typography>
                      </Box>
                    </Stack>
                    {/* </CardContent> */}
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 345
                    }}
                  >
                    {/* <CardContent> */}
                    <Stack spacing={2} direction="row" alignItems={'center'} ml={3}>
                      <StorefrontIcon />
                      <Box padding={'10px'}>
                        <Typography variant="body1" component="span" fontWeight={600}>
                          $203K
                        </Typography>
                        <br />
                        <Typography variant="body2" component="span">
                          Total Income
                        </Typography>
                      </Box>
                    </Stack>
                    {/* </CardContent> */}
                  </Card>
                </Stack>
              </Grid>
            </Grid> {/* grid da esquerda */}
            <Box height={20} />
            {/* grid da direita */}
            <Grid container spacing={2}>
              <Grid size={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>

                  </CardContent>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Box paddingBottom={'10px'}>
                      <Typography
                        variant="body1"
                        component="span"
                        fontWeight={600}
                      >
                        Popular Products
                      </Typography>
                    </Box>

                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box >
      </Box>
    </>
  )
}
