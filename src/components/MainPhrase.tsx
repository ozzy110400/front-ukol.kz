import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

interface MainPhraseProps {

}

const MainPhrase: React.FC<MainPhraseProps> = () => {
    
    const handleWhatsAppClick = () => {
        const phone = '77027776776'; // Replace with the actual phone number
        const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг '; // The message you want to send
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank'); // Open in a new tab
      };

    return (
        <Card sx={{ minWidth: 275, justifyContent: 'center', textAlign: 'center', backgroundColor: 'transparent' }} elevation={0}>
        <CardContent>
          <Typography variant="h6" component="div" sx={{ mb: '5%', fontSize: '3rem' }}>
            Ukol.kz это медицина на дом!
          </Typography>
          <Typography variant="h5">
            Мы предоставляем квалифицированные медицинские услуги с выездом на дом!
            Стаж наших специалистов свыше 7 лет. Доверьте свое здоровье настоящим профессионалам, вам не нужно никуда ехать!
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
        </CardContent>
        <CardActions sx={{ flexDirection: 'column', alignItems: 'center' }}>
        </CardActions>
      </Card>
    );
  };

export default MainPhrase;