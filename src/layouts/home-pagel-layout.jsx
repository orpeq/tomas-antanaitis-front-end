import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const HomePageLayout = ({ children }) => (
  <Box component="main">
    {children}
    <Outlet />
  </Box>
);

export default HomePageLayout;
