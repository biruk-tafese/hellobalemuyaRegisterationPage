import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        We are HelloBalemuya, located at Bole Wollosefer. We provide various services and invite you to come visit us!
      </Typography>
    </Box>
  );
};

export default About;