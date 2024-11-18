import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';

import MainPhrase from '../components/MainPhrase';
import FAQ from 'components/FAQ';

export default function Main() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг '; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };

  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' , justifyContent: 'center', textAlign: 'center',}}>
      <MainPhrase/>

      <Typography variant="h5">
        Нужна помощь? 
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
        <Box 
          component="img" 
          src={'/img/wa.png'} 
          alt="WhatsApp Icon" 
          sx={{
            width: 24,    // Set the width and height as desired
            height: 24,
            marginRight: 1, // Adjust spacing between icon and text
          }}
        />
        <Typography variant="h5"  sx={{
              fontSize: {
                xs: '1rem',   // Font size for small screens
                sm: '1.2rem',     // Font size for medium screens
                md: '1.4rem',   // Font size for large screens
              },
             }}>
          Нажмите для консультация 
        </Typography>
          </Button>
          <FAQ/>
    </Box>
  );
}


