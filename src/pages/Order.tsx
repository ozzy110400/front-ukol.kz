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
import NotUnderstand from '../components/Notunderstand';
import { serviceOptionsMap } from '../components/order-options/allOptionsMap';
import ArrivalTime from '../components/ArrivalTime';
import MapFooter from '../components/MapFooter';
import { useLocation } from 'wouter-preact';
import ServiceCardsList from '../components/ServiceCardsList';
import { authAtom } from 'atoms/auth';
import { cancelOrder, checkOrder } from 'helpers/api';
import { useEffect } from 'preact/hooks';

export default function Order() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);

  const handleCancelOrder = async () => {

    const res  = await cancelOrder(currentOrder!._id!)

    if(!res.success){
      const phone = '77027776776'; // Replace with the actual phone number
      const message = 'Здравствуйте! Хочу отменить заказ, это ещё возможно сделать?'; // The message you want to send
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank'); // Open in a new tab
    } else {
      setCurrentOrder((prevOrder) => ({
        ...prevOrder,
        status: 'cancel',
      })) 
    }

  };

  const [, navigate] = useLocation();


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

  useEffect(() => {
    // Log or handle updates to authValue
    console.log("authValue updated:", authValue);
    if (currentOrder?.status === 'cancelled') {
      console.log("Order was cancelled.");
    }
  }, [currentOrder.status]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await checkOrder();
        setCurrentOrder((prevOrder) => ({
          ...prevOrder,
          _id: res.order._id,
          status: res.order.status,
        }));
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
  
    fetchOrder();
  }, []);



  if (currentOrder.status == 'waiting' ||  currentOrder.status == 'taken') {
    return (
      <Box sx={{ mt: '5%', textAlign: 'center', backgroundColor: 'transparent' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'green' }}>
          Заказ успешно создан
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
            fontWeight: 'bold',
            color: 'dark',
            mb: 2,
          }}
        >
          Что бы сделать еще один заказ дождитесь выполнения текущего или же отмените созданный
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
          onClick={handleCancelOrder}
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
              margin: 1,
              minWidth: '120px', // Ensures enough width for the text
              padding: '4px 16px', // Adjust padding for better fit
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, 
                whiteSpace: 'nowrap', 
                textAlign: 'center' // Ensures text is centered 
              }}
            >
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

    </Box>
  );
}
