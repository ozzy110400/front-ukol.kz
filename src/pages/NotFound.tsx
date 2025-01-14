import { Box, Button, Typography, Container } from '@mui/material';
import { useLocation } from 'wouter-preact';

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7F7F1' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h1" sx={{ fontWeight: 700, color: '#3A4157' }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500, color: '#555' }}>
          страница не найдена
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#76d776',
          },
        }}
      >
        <Typography variant="h6" sx={{ color: '#3A4157'}}>
         на главную
        </Typography>
      </Button>
    </Container>
  );
}


