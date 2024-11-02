import { Box } from '@mui/material';
import React from 'react';
import Sidenav from './../components/Sidenav';

export default function About() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  )
}
