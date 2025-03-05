import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use our Service. We will not use or share Your information with anyone except as described in this Privacy Policy.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Information Collection and Use
      </Typography>
      <Typography variant="body1" paragraph>
        We collect several different types of information for various purposes to provide and improve our Service to you.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Types of Data Collected
      </Typography>
      <Typography variant="body1" paragraph>
        - Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.
      </Typography>
      <Typography variant="body1" paragraph>
        - Usage Data: We may also collect information on how the Service is accessed and used.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Legal Considerations
      </Typography>
      <Typography variant="body1" paragraph>
        We are committed to ensuring that your privacy is protected. If we ask you to provide certain information by which you can be identified, you can be assured that it will only be used in accordance with this privacy statement.
      </Typography>

      <Typography variant="h6" gutterBottom>
        User Rights
      </Typography>
      <Typography variant="body1" paragraph>
        You have the right to request copies of your personal data, to request that we correct any information you believe is inaccurate, and to request that we erase your personal data under certain conditions.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about this Privacy Policy, please contact us at: <strong>+251 93 127 2133</strong>
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        የግል መረጃ ፖሊሲ
      </Typography>

      <Typography variant="body1" paragraph>
        ይህ የግል መረጃ ፖሊሲ የእኛን የመረጃ ማስተዳደር ፖሊሲን እና የእኛን አገልግሎት ሲጠቀሙ የተጠቃሚዎች መረጃ ማስተዳደር ዝርዝር ይገልጻል።
      </Typography>

      <Typography variant="h6" gutterBottom>
        የመረጃ ማስተዳደር እና አገልግሎት
      </Typography>
      <Typography variant="body1" paragraph>
        የእኛ አገልግሎት ላይ የተጠቃሚዎች መረጃ ይሰበስባል። ይህ መረጃ የተጠቃሚዎች ዝርዝር ይወዳድር።
      </Typography>

      <Typography variant="h6" gutterBottom>
        የተጠቃሚ መብቶች
      </Typography>
      <Typography variant="body1" paragraph>
        የተጠቃሚዎች መብቶች ይህን ይወዳድር። የእኛ የግል መረጃ ፖሊሲ ይህንን መረጃ ለማስተዳደር ወደኛ ይጠቀሙ።
        </Typography>
       </Box>
    );
};
export default PrivacyPolicy;