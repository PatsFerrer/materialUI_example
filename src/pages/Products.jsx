import { Box } from '@mui/material';
import React from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';

export default function Products() {
  return (
    <>
    <Navbar />
    <Box height={30}/>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Products</h1>
        </Box>
      </Box>
    </>
  )
}
