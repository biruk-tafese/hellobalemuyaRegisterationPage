import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import logoImg from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#003366' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logoImg} alt="Logo" style={{ height: '100%', width: 60, backgroundColor: 'whitesmoke' }} />
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ color: 'white' }}>
            About Us
          </Button>
          <Button component={Link} to="/services" sx={{ color: 'white' }}>
            Services
          </Button>
          <Button component={Link} to="/contact" sx={{ color: 'white' }}>
            Contact
          </Button>
          <Button component={Link} to="/privacy" sx={{ color: 'white' }}>
            Privacy Policy
          </Button>
        </Box>
        {/* Hamburger Menu for Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/about">About Us</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/services">Services</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/privacy">Privacy Policy</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;