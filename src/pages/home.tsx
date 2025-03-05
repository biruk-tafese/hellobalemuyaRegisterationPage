import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import logoImg from '../assets/logo.png';

const StyledButton = styled(Button)({
  borderRadius: "10px",
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  width: "100%",
  maxWidth: "300px",
  textTransform: "none",
});

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, sm: 4 }, // Add horizontal padding for small and medium screens
      }}
    >
      {/* Background Box with Blur */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${logoImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", // Apply blur effect only to the background
          zIndex: 0,
        }}
      />
      
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: Add a white overlay for better text visibility
          zIndex: 1,
        }}
      />
      
      {/* Foreground Content */}
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4, 
          color: 'blue', 
          zIndex: 2, 
          position: 'relative', 
          fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
          "&:hover": { color: "darkblue" } 
        }}
      >
        Welcome to Hello Balemuya Registration Page
      </Typography>
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" }, // Stack buttons on small screens
          justifyContent: "center", 
          gap: 2, 
          width: "100%", 
          alignItems: "center", 
          zIndex: 2, 
          position: 'relative' 
        }}
      >
        <StyledButton
          sx={{ bgcolor: "blue", "&:hover": { bgcolor: "darkblue" } }}
        >
          <a href="https://fgceu03q.forms.app/hellobalemoya-client-registeration-form" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
            Register As Client
          </a>
        </StyledButton>

        <StyledButton
          sx={{ bgcolor: "orange", "&:hover": { bgcolor: "darkorange" } }}
        >
          <a href="https://fgceu03q.forms.app/service-provider-registration-form" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
            Register As Service Provider
          </a>
        </StyledButton>
      </Box>
    </Box>
  );
};

export default HomePage;