import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import Navbar from '../components/Navbar';
import Sidenav from './../components/Sidenav';
import GeoChart from '../charts/GeoChart';
import PieChart from '../charts/PieChart';
import HBarChart from '../charts/HBarChart';
import CountUp from 'react-countup';

export default function Analytics() {
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

              <Grid size={3}>
                <Stack spacing={2} >
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: 'linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,40,141,1) 100%)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#FFF' }}
                      >
                        {/* 24,630 */}
                        <CountUp delay={0.2} end={22000} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: 'linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,40,141,1) 100%)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#FFF' }}
                      >
                        <CountUp delay={0.4} end={32000} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid size={3}>
                <Stack spacing={2} >
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: 'linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%)',
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#FFF' }}
                      >
                        <CountUp delay={0.4} end={12000} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Since last week
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
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#FFF' }}
                      >
                        <CountUp delay={0.4} end={22500} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#CCD1D1' }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid size={6} >
                {/* <Stack spacing={2}> */}

                <Card
                  sx={{
                    height: '100%'
                    // maxWidth: 345
                  }}
                >
                  <HBarChart />
                </Card>
                {/* </Stack> */}

              </Grid>
            </Grid> {/* grid da esquerda */}

            <Box height={20} />
            {/* grid da direita */}
            <Grid container spacing={2}>
              <Grid size={8}>
                <Card
                  sx={{
                    // height: 40 + "vh",
                    height: '100%',
                  }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card
                  sx={{
                    // height: 40 + "vh",
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <PieChart />

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
