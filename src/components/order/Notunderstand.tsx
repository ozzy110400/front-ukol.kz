import { Box, Button, Typography } from '@mui/material';

export default function NotUnderstand() {
  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг'; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        textAlign: 'center',
        backgroundColor: 'transparent',
        borderRadius: 2,
        
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        Есть вопросы? Ничего не понятно?
      </Typography>
      <Button
        variant="contained"
        onClick={handleWhatsAppClick}
        sx={{
          backgroundColor: '#88e788', // WhatsApp green color
          color: '#fff',
          padding: '10px 20px',
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          fontWeight: 'bold',
          borderRadius: '50px',
          textTransform: 'none',
          border: '3px solid black',
          '&:hover': {
            backgroundColor: '#1da851',
          },
        }}
      >
         <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
         Нажмите для консультации   
        </Typography>
      </Button>
    </Box>
  );
}
