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
    <Typography sx={{ mb: 2 }}>
     У нас идивидуальный подход к каждому клиенту, из-за этого мы не можем вам назвать точную цену, так как каждый вызов идивидуальный.
      Опишите, пожалуйста, с чем вам нужна помощь в поле выше. И после нажатия кнопки "заказать" с вами свяжется наш менеджер в WhatsApp для уточнения деталей    
    </Typography>   
    </Box>
  );
};

export default WAButton;
