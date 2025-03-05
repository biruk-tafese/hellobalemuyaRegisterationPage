import { Image } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import logoImg from '../assets/logo.png'

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
        px: 2,
        textAlign: "center",
      }}
      
    >
        <img src={logoImg} alt="logo" style={{width:'30%', height:'20%', alignItems:'left'}}/>

      <Typography  variant="h4" sx={{ mb: 4 , color:'blueblack', "&:hover": { color: "darkblue" }}}>
        Welcome to Hello Balemuya Registration Page
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" , gap: 2, width: "100%", alignItems: "center" }}>
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
