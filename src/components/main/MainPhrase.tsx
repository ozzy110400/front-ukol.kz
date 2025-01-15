import { Box, Typography, Container, Button } from '@mui/material';
import LinkToMakeOrderButton from './LinkToMakeOrderButton';
import mainImg from '/img/main-img.png'; // Import the main image

interface MainPhraseProps {}

const MainPhrase = (props: MainPhraseProps) => {
  return (
    <Box sx={{ backgroundColor: '#F7F7F1', paddingY: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Text Section */}
          <Box sx={{ textAlign: 'center', mr: { md: 12 } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 6,
                fontSize: '40px' , // Adjust font size for responsiveness
              }}
            >
              Ukol.kz - это медспециалисты <br /> на дом!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontSize: '25px' , 
              }}
            >    
              Заказывайте онлайн в 3 клика  <br /> <br />

              Приезжаем в течении 1 часа <br /> <br />

              Мы работаем 24/7 без выходных  
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Box sx={{ m: 2, mb: 1 }}>
            <Button
                variant="contained"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#88e788',
                  border: '3px solid black',
                  borderRadius: '140px',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 54px 55px, rgba(0, 0, 0, 0.15) 0px -12px 30px, rgba(0, 0, 0, 0.15) 0px 4px 6px, rgba(0, 0, 0, 0.20) 0px 12px 13px, rgba(0, 0, 0, 0.11) 0px -3px 5px',
                  },
                }}
              >
                <Typography variant="h5" >
                 выбрать услугу
                </Typography>
              </Button>
              </Box>
            </Box>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <LinkToMakeOrderButton />
            </Box> */}
          </Box>

          <Box
            component="img"
            src={mainImg}
            alt="Профессиональная медсестра оказывает медицинские услуги на дому"
            loading="lazy"
            sx={{
              maxWidth: '100%',
              height: '550px',
              objectFit: 'cover',
              borderRadius: 2,
              display: { xs: 'none', md: 'block' },
              ml: { md: 12 },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MainPhrase;
