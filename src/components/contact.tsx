import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: { xs: 3, sm: 6 },
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 600,
        margin: 'auto',
        mt: 5,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: 'darkblue', textAlign: 'center' }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: 'darkblue', textAlign: 'center', mb: 3 }}
      >
        If you have any suggestions or inquiries, please fill out the form below:
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          InputProps={{
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'darkblue',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              color: 'darkblue',
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'darkblue',
              '&.Mui-focused': {
                color: 'orange',
              },
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          InputProps={{
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'darkblue',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              color: 'darkblue',
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'darkblue',
              '&.Mui-focused': {
                color: 'orange',
              },
            },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          InputProps={{
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'darkblue',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'orange',
              },
              color: 'darkblue',
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'darkblue',
              '&.Mui-focused': {
                color: 'orange',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: 'darkblue',
            color: 'white',
            '&:hover': {
              backgroundColor: 'orange',
            },
          }}
          fullWidth
        >
          Submit
        </Button>
      </form>
      <Typography
        variant="body1"
        sx={{ mt: 4, color: 'darkblue', textAlign: 'center' }}
      >
        You can also reach us at: <strong>+251 93 127 2133</strong>
      </Typography>
    </Box>
  );
};

export default Contact;
