import { Box, Typography, Button, CircularProgress } from '@mui/material';
import SyringeIcon from '/img/syringe-icon.svg';
import DropletIcon from '/img/droplet-icon.svg';
import UtensilsIcon from '/img/utensils-solid.svg';
import DripIcon from '/img/drip.svg';
import OtherIcon from '/img/other.svg';
import DoctorIcon from '/img/doctor.svg';
import NurseIcon from '/img/nurse.svg';
import CocktailIcon from '/img/cocktail-solid.svg';
import PillsIcon from '/img/pills-solid.svg';
import BandAidIcon from '/img/bandage-solid.svg';
import { useLocation } from 'wouter-preact';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';
import { trackClarityEvent } from 'App';
import { TOrder } from 'atoms/currentOrder';
import { services } from 'helpers/default';


const ServiceCards = () => {
  const [, navigate] = useLocation();
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);

  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг'; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };

  const handleCardClick = (code: string) => {  
    trackClarityEvent('redirect_from_lending_we_help')
    navigate(`/service/${code}`);
  };

  return (
    <section id="services" >

    <Box sx={{ backgroundColor: 'transparent',  }}>
      {/* Header Section */}
      <Typography
        variant="h1"
        sx={{
          
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize:'30px' ,
          marginBottom: '40px',
        }}
      >
        Услуги и цены
      </Typography>

      {/* Service Cards Section */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            onClick={() => handleCardClick(service.code)}
            sx={{
              backgroundColor: 'transparent',
              border: '3px solid black',
              borderRadius: 2,
              textAlign: 'center',
              mx: 2,
              padding: 1,
              width: '400px',
              transition: 'transform 0.3s ease',
              position: 'relative', // Set position to relative for button positioning

            }}
          >
            <Box
              component="img"
              src={service.icon}
              alt={service.title}
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography variant="h6" sx={{ fontSize: '25px', fontWeight: 700 }}>
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: '16px',fontWeight: 800, color: '#555' }}>{service.description}</Typography> 
            <Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'end',
                padding: 0,
                backgroundColor: 'transparent',
              }}
            >
              
              <Typography variant="h5" sx={{ mt:2,ml:1, fontSize: { xs: '20px', sm: '1.2rem', md: '1.4rem' } }}>
                 цена: {new Intl.NumberFormat('en-US').format(service.price)}₸
                </Typography>
              
              <Button
                variant="contained"
                //onClick={handleSubmit}
                sx={{
                  backgroundColor: '#88e788',
                  border: '2px solid black',
                  borderRadius: '140px',
                  mt: 2,
                  position: 'relative',
                }}
              >
          
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
              выбрать
            </Typography>
        </Button>
      </Box>
     </Box>
    </Box>
          
          
        ))}
        <Box
           
           // onClick={() => handleCardClick(service.short_name, service.msg)}
            sx={{
              backgroundColor: 'transparent',
              border: '3px solid black',
              borderRadius: 2,
              textAlign: 'center',
              mx: 2,
              padding: 1,
              width: '400px',
              transition: 'transform 0.3s ease',
              position: 'relative', // Set position to relative for button positioning

            }}
          >
            <Box
              component="img"
              src={OtherIcon}
              alt={'Другое'}
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Typography variant="h6" sx={{ fontSize: '25px', fontWeight: 700 }}>
               Другое
            </Typography>
            <Typography sx={{ fontSize: '16px',fontWeight: 800, color: '#555' }}>
             Не нашли подходящую услугу?  Свяжитесь с нашей поддержкой и они проконсультируют вас по вашему вопросу
              </Typography> 
            <Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'end',
                padding: 0,
                backgroundColor: 'transparent',
              }}
            >
              
              <Typography variant="h5" sx={{ mt:2,ml:1, fontSize: { xs: '20px', sm: '1.2rem', md: '1.4rem' } }}>
                 
                </Typography>
              
              <Button
                variant="contained"
                onClick={handleWhatsAppClick}
                sx={{
                  backgroundColor: '#88e788',
                  border: '2px solid black',
                  borderRadius: '140px',
                  mt: 2,
                  position: 'relative',
                }}
              >
          
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
              связаться
            </Typography>
        </Button>
      </Box>
    </Box>
          </Box>
      </Box>
      

    </Box>
    </section>
  );
};

export default ServiceCards;
