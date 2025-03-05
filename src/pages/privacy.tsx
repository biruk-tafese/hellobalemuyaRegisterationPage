import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our Service. We are committed to safeguarding your privacy and ensuring that your personal data is protected.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect various types of information to provide and improve our Service to you, including:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Personal Data:</strong> Information that can be used to identify you, such as your name, email address, and phone number.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Usage Data:</strong> Information on how you access and use the Service, including your IP address, browser type, and pages visited.
            </Typography>
          </li>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Use of Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the collected data for various purposes:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              To provide and maintain our Service.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              To notify you about changes to our Service.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              To provide customer support.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              To monitor the usage of our Service.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              To detect, prevent, and address technical issues.
            </Typography>
          </li>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Legal Considerations
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online. :contentReference
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your Data Protection Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Depending on your location, you may have the following rights regarding your personal data:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              The right to access – You have the right to request copies of your personal data.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
            </Typography>
          </li>
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              By email: info@hellobalemuya.com
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              By phone: +251 93 127 2133
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
