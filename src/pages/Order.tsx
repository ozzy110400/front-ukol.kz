import {
  Box,
  Button,
  Divider,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import MapComponent from '../components/Map';
import LoginModal from '../components/LoginModal';
import { serviceOptionsMap } from '../components/order-options/allOptionsMap';
import ArrivalTime from '../components/ArrivalTime';
import SuccesOrderModal from '../components/SuccesOrderModal';
import MapFooter from '../components/MapFooter';
import { useLocation } from 'wouter-preact';
import ServiceCardsList from 'components/ServiceCardsList';
import { authAtom } from 'atoms/auth';
import NotUnderstand from 'components/Notunderstand';

export default function Order() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);

  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Хочу отменить заказ, это ещё возможно сделать?'; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };

  const [, navigate] = useLocation();

  console.log(authValue)

  const getOptions = () => {
    const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
    
    return (
      <Box>
        {options.map(({ component: Component, /* props*/ }, index:number) => (
          <Component key={index} />
        ))}
      </Box>
    );
  };

  if (authValue.haveActualOrder) {
    return (
      <Box sx={{ mt: '5%', textAlign: 'center', backgroundColor: 'transparent' }}>
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
            fontWeight: 'bold',
            color: 'dark',
            mb: 2,
          }}
        >
          У вас уже есть текущий заказ. Дождитесь его выполнения или отмените текущий заказ.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            backgroundColor: '#88e788',
            border: '3px solid black',
            borderRadius: '140px',
            padding: 1,
           mr:2
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}
          >
            На главную
          </Typography>
        </Button>
        <Button
          variant="contained"
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: '#ff8585',
            border: '3px solid black',
            borderRadius: '140px',
            padding: 1,
             ml:2
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}
          >
            Отменить
          </Typography>
        </Button>
      </Box>
    );
  }
  
  return (
    <Box sx={{ mt: '5%', backgroundColor: 'transparent' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography
          sx={{
            ml: 2,
            fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem' },
            fontWeight: '1500',
            textAlign: 'center',
          }}
        >
          Обратите внимание! Препараты, материалы и другие расходники не входят в стоимость услуг
        </Typography>
        <Button
        variant="contained"
        onClick={() => navigate('/')} 
         sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          margin: 2,

        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },  padding:1, }}>
          на главную
        </Typography>
      </Button>
      </Box>  
          <MapComponent />
          <ServiceCardsList/>
          <Divider /> 
          {getOptions()}   
          <Divider /> 
          <ArrivalTime/> 
          <MapFooter/>

          <NotUnderstand/>
       
       <LoginModal />
       <SuccesOrderModal />

    </Box>
  );
}
