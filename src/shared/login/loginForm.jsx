import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const LoginForm = ({ handleClose }) => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mt: 2
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Button onClick={handleClose} color="secondary">
        Cancel
      </Button>
    </Box>
  );
};

export default LoginForm;
