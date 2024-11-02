import { Box } from '@mui/material'
import React from 'react'
import Sidenav from '../components/Sidenav'

export default function Settings() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Settings</h1>
      </Box>
    </Box>
  )
}
