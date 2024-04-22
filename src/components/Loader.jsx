import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = ({ size = 80, thickness = 4, color = "#3f51b5" }) => (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress size={size} thickness={thickness} color={color} />
    </Stack>
  </Box>
);

export default Loader;
