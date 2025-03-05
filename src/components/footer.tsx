import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        backgroundColor: '#fafs12',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1" color="textSecondary">
        Contact us:  +251 93 127 2133
      </Typography>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} <Button sx={{backgroundColor:'white'}} target='_blank' href='https://hellobalemuya.com/'>Hellobalemuya</Button>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;