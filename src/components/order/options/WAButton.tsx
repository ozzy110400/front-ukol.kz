import { Box, Button, Typography } from '@mui/material';

interface WAButtonProps {}

const WAButton= (props:WAButtonProps) => {

  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Хочу вызвать медсестру на дом'; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };

  return (
    <Box sx={{ m: 2, mb: 1 }}>
    <Typography variant="h5" sx={{ mb: 2 }}>
        Или сразу напишите нашему менеджеру
      </Typography>
      <Button
        variant="contained"
        onClick={handleWhatsAppClick}
        sx={{ 
            textTransform: 'none',
            backgroundColor: '#88e788', 
            border: '3px solid black', 
            borderRadius: '140px',
            margin: 2,
         }}
      >
        <Typography variant="h5"  sx={{
              fontSize: {
                xs: '1rem',   // Font size for small screens
                sm: '1.2rem',     // Font size for medium screens
                md: '1.4rem',   // Font size for large screens
              },
             }}>
        Консультация в WhatsApp
        </Typography>
      </Button>
    </Box>
  );
};

export default WAButton;
