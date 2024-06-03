import React from 'react';
import { Container, Box } from '@mui/material';
import Image from 'next/image';

const NewsLetter = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box>
        <Image src="/images/News_letter.jpg" alt="Centered Image" width={500} height={500} />
      </Box>
    </Container>
  );
};

export default NewsLetter;
