import React from 'react';
import { useTranslations } from 'next-intl';
import { Box, Typography, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NoAccessPage = () => {
  const t = useTranslations();
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          {t('noAccessPage')}
        </Typography>
      </Box>
    </Container>
  );
};

export default NoAccessPage;
