import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography, Grid } from '@mui/material';

const servicesData = [
  {
    title: 'Professional Services',
    description: 'Providing professional services for anyone using our application.',
  },
  {
    title: 'Job Opportunities',
    description: 'Giving service providers job opportunities.',
  },
  {
    title: 'Problem Solving',
    description: 'Helping to solve problems effectively.',
  },
];

const Services: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={2}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: 'white',
                border: '1px solid #003366', // Black blue border
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardHeader
                title={service.title}
                sx={{
                  backgroundColor: '#003366', // Black blue background
                  color: 'white',
                }}
              />
              <CardContent>
                <Typography variant="body1">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;