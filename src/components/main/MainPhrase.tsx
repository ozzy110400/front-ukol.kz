import { Box, Typography, Container, Button, Paper } from '@mui/material';
import LinkToMakeOrderButton from './LinkToMakeOrderButton';
import mainImg from '/img/main-img.png'; 
import earsImg from '/img/ears1.png'; 
import injectionImg from '/img/injection1.png';
import secondImg from '/img/second.png';
import heartImg from '/img/heart4.svg';
import Carousel from 'react-material-ui-carousel'

interface MainPhraseProps {}

const MainPhrase = (props: MainPhraseProps) => {

  var items = [
    {
        name: "Удобство",
        description: "Заказывайте онлайн в 3 клика",
    },
    {
        name: "Скорость", 
        description: "Приезжаем в течении 1 часа",
    },
    {
      name: "Доступность", 
      description: "Мы работаем 24/7 без выходных",
  }
]

  return (
    <Box sx={{ backgroundColor: '#F7F7F1', paddingY: 4, mb:4 }}>
      <Container maxWidth='lg' >
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
                mb: 4,
                fontSize: '40px' , // Adjust font size for responsiveness
              }}
            >
              Лучшие медспециалисты на дом!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>            
              <Box component="img" src={earsImg} alt="Ears Image" sx={{ width: 'auto', height: '110px',  display: { xs: 'block', md: 'none' }, mt:5, ml:2}} />
              <Box component="img" src={secondImg} alt="Third Image" sx={{ width: 'auto', height: '110px', display: { xs: 'block', md: 'none' }, mb:1,}} /> 
              <Box component="img" src={injectionImg} alt="Third Image" sx={{ width: 'auto', height: '110px', display: { xs: 'block', md: 'none' }, mt:3, mr:2 }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Box component="img" src={heartImg} alt="Second Image" sx={{ width: '150px', height: 'auto', mx: 1, display: { xs: 'block', md: 'none' }, }} />
            </Box>
            <Carousel interval={3000}>
            {
                items.map( (item, i) =>
              <Box>
                <Typography
                       variant="h3"
                       sx={{
                         background: 'transparent',
                         textAlign: 'center',
                         fontSize: '25px' , 
                       }}
                     >    
                      {item.name}
                     </Typography>
                   <Typography
                       variant="h3"
                       sx={{
                         background: 'transparent',
                         textAlign: 'center',
                         fontSize: '20px' , 
                       }}
                     >    
                      {item.description}
                     </Typography>
               </Box> )
            }
             </Carousel>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Box sx={{  m: 2, mb: 1 ,  width: '100%'}}>
            <Button
                fullWidth
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
                  borderRadius: '10px',
                }}
              >
                <Typography variant="h5" >
                 выбрать услугу
                </Typography>
              </Button>
              </Box>
            </Box>
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
