import React from 'react';
import { Box, Typography, useTheme, Container } from '@mui/material';

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center" sx={{ color: theme.palette.primary.main }}>
          About Us
        </Typography>
        <Typography variant="body1" paragraph align="center">
          HelloBalemuya is a technology-driven platform designed to seamlessly connect service providers (SPs) with clients, fostering efficient and effective collaborations. Our mission is to streamline the process of finding and offering services by leveraging advanced technology to create a user-friendly and reliable environment.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          At HelloBalemuya, we envision a world where accessing and providing services is simplified through innovation. We aim to bridge the gap between service providers and clients, ensuring that both parties can connect with ease and confidence.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>For Service Providers:</strong> We offer a platform to showcase your skills and services to a broad audience, enabling growth and increased visibility.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>For Clients:</strong> We provide a curated list of qualified service providers, ensuring you find the right professional for your needs.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          HelloBalemuya caters to a diverse range of services, including but not limited to:
        </Typography>
        <ul>
          <Typography component="li" variant="body1" paragraph>
            Home Maintenance
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Personal Care
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Professional Services
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Event Planning
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Technology Support
          </Typography>
            <Typography component="li" variant="body1" paragraph>
            ... Many More Services <a href="https://hellobalemuya.com" target="_blank" rel="noopener noreferrer" role="img" aria-label="sparkles"> Visit our official website <span style={{color:"darkblue"}}>hellobalemuya.com</span> &#8599;</a>
            </Typography>
        </ul>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Why Choose HelloBalemuya?
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>User-Friendly Platform:</strong> Our intuitive interface ensures a seamless experience for both service providers and clients.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Verified Professionals:</strong> We prioritize quality by verifying the credentials of service providers, ensuring clients receive top-notch services.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Secure Transactions:</strong> Our platform incorporates secure payment gateways, safeguarding your financial information.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Join Us Today
        </Typography>
        <Typography variant="body1" paragraph>
          We are currently inviting service providers and clients to register on our platform and become part of the HelloBalemuya community. To register, please visit our <a href="/" style={{ color: theme.palette.primary.main }}>Home Page</a> and select the appropriate registration option.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          For inquiries or support, feel free to reach out to us:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Address:</strong> Bole Wollosefer, Addis Ababa, Ethiopia
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> +251 93 127 2133
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> info@hellobalemuya.com
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
