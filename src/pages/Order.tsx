import {
  Box,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import Map from '../components/order/MapN';
import LoginModal from '../components/order/LoginModal';
import NotUnderstand from '../components/order/Notunderstand';
import { serviceOptionsMap } from '../components/order/options/allOptionsMap';
import ArrivalTime from '../components/order/ArrivalTime';
import MapFooter from '../components/order/MapFooter';
import { useLocation } from 'wouter-preact';
import ServiceCardsList from '../components/order/ServiceCardsList';
import { authAtom } from 'atoms/auth';
import { checkOpenOrder } from 'helpers/api/apiClient';
import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';


export default function Order() {
  const [, navigate] = useLocation();

  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);
  const [isCancelling, setIsCancelling] = useState(false);  // Track the loading state for cancel

  // const handleCancelOrder = async () => {
  //   setIsCancelling(true);  // Start loading when cancel is initiated

  //   const res = await cancelOrder(currentOrder!._id!);

  //   if (!res.success) {
  //     const phone = '77027776776'; // Replace with the actual phone number
  //     const message = 'Здравствуйте! Хочу отменить заказ, это ещё возможно сделать?'; // The message you want to send
  //     const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
      
  //     window.open(whatsappUrl, '_blank'); // Open in a new tab
  //   } else {
  //     setCurrentOrder((prevOrder) => ({
  //       ...prevOrder,
  //       title: '',
  //       amount: 0,
  //       streetAndBuildingNumber: '',
  //       flat: '',
  //       floor: '',
  //       options: {
  //         isNeedPharmacy: false,
  //         isHaveDoctorsAppointment: false,
  //         isWithDrugsCocktail: false,
  //         isPremiumIntoxication: false,
  //         isWithDressingMaterial: false,
  //         isWithMaterialsPoisoning: false,
  //         photoURL: '',
  //         photo: undefined,
  //         daysForNurse: 0,
  //         message: '',
  //       },
  //       arrivalTime: {
  //         hours: dayjs().format('HH'),
  //         minutes: dayjs().format('mm'),
  //         isNearestHour: true,
  //         date: dayjs().format('YYYY-MM-DD')
  //       },  
  //       status: ''
  //     }));
  //   }

  //   setIsCancelling(false);  // Stop loading when the cancellation process is done
  // };

  const getOptions = () => {
    const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
    return (
      <Box>
        {options.map(({ component: Component, /* props*/ }, index: number) => (
          <Component key={index} />
        ))}
      </Box>
    );
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await checkOpenOrder();
        if (res.order) {
          setCurrentOrder((prevOrder) => ({
            ...prevOrder,
            _id: res.order._id,
            status: res.order.status,
          }));
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
  
    fetchOrder();
  }, []);

  useEffect(() => {
    // Ensure we only navigate if conditions are met and prevent endless loops
    if ((currentOrder.status === 'waiting' || currentOrder.status === 'taken' || currentOrder.status === 'waiting_rating') && 
        authValue.user.phoneNumber !== '77012111030') {
      navigate('/waiting');  // Navigate to '/waiting' page
    }
  }, [currentOrder.status]);

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
            backgroundColor: '#0000001f',
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
      <Map />
      <ServiceCardsList />
      {getOptions()}
      <ArrivalTime />
      <MapFooter />
      <NotUnderstand />
      <LoginModal />
    </Box>
  );
}
