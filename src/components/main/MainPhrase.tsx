import { Box, Typography, Container } from '@mui/material';
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
          <Box sx={{ textAlign: 'center', mb: 4, mr: { md: 12 } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                marginBottom: '15%',
                fontSize: '40px' , // Adjust font size for responsiveness
              }}
            >
              Ukol.kz <br /> это медспециалисты <br /> на дом!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontSize: '25px' , 
              }}
            >    
              Приезжаем в течении 1 часа <br /> <br />

              Онлайн заказы принимаются 24/7 опытными специалистами со стажем <br /> <br />

              Наши услуги и цены можно посмотреть нажав кнопку ниже <br />
            </Typography>
            {/* <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontSize: '17px' , 
              }}
            >
              Мы предоставляем квалифицированные <br /> медицинские услуги с выездом на дом! <br />
              Стаж наших специалистов свыше 7 лет. <br />
              Доверьте свое здоровье настоящим <br /> профессионалам, вам не нужно никуда <br /> ехать!
            </Typography> */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <LinkToMakeOrderButton />
            </Box>
          </Box>

          <Box
            component="img"
            src={mainImg}
            alt="main-image"
            sx={{
              maxWidth: '100%',
              height: '550px',
              objectFit: 'cover',
              borderRadius: 2,
              display: { xs: 'none', md: 'block' }, // Hide on mobile
              ml: { md: 12 }, // Add margin-left on larger screens
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MainPhrase;
