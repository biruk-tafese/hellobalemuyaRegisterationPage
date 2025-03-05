import React from 'react';
import { Box, Button, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        backgroundColor: '#003366', // Dark blue background
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        color: 'white', // Change text color to white for better contrast
      }}
    >
      <Typography variant="body1" color="inherit">
        Contact us: +251 93 127 2133
      </Typography>
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} 
        <Button 
          sx={{ backgroundColor: 'transparent', color: 'white', textTransform: 'none', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} 
          target='_blank' 
          href='https://hellobalemuya.com/'
        >
          Hellobalemuya
        </Button>. All rights reserved.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="#about" color="inherit" sx={{ mx: 2 }}>
          About Us
        </Link>
        <Link href="#services" color="inherit" sx={{ mx: 2 }}>
          Services
        </Link>
        <Link href="#contact" color="inherit" sx={{ mx: 2 }}>
          Contact
        </Link>
        <Link href="#privacy" color="inherit" sx={{ mx: 2 }}>
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;