import Box from '@mui/material/Box';

const Main = ({children}) => {
  return (
    <Box component="main" sx={{ minHeight: '100vh' }}>
      {children}
    </Box>
  );
}

export default Main;
