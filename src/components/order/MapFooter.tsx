import { useEffect, useState } from 'preact/hooks';
import { Box, Button, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';
import modalsOpenAtom from '../../atoms/modalsOpen';
import { authAtom }  from '../../atoms/auth';
import { uploadPhoto, createOrder } from '../../helpers/api';
import dayjs from 'dayjs';
import { trackClarityEvent } from 'App';

const MapFooter = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [amount, setAmount] = useState(currentOrder.amount);
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);
  const [isPendingOrder, setIsPendingOrder] = useState(false); 

  const handleSubmit = async () => {
    if (!auth.user) {
        setIsPendingOrder(true);
        setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: true }));
    } else {
      try {
        setCurrentOrder(prevOrder => ({
          ...prevOrder,
          amount: amount!,
        }));
        currentOrder.amount = amount!

        if (currentOrder.options.isHaveDoctorsAppointment && currentOrder.options.photo) {
          const formData = new FormData();
          formData.append('file', currentOrder.options.photo);
          const uploadResponse = await uploadPhoto(formData);

          const updatedOrder = {
            ...currentOrder,
            options: {
              ...currentOrder.options,
              photoURL: uploadResponse.data.photoURL,
            },
          };
          setCurrentOrder(updatedOrder); 

          const result = await createOrder(updatedOrder);
          setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));
          console.log('Order created successfully:', result);
        } else {
          const result = await createOrder(currentOrder);
          setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));

          setCurrentOrder((prevAuth) => ({
            ...prevAuth,
            _id: result.data._id,
            status: result.data.status
          }));
  
          console.log('Order created successfully:', result);
        }
      } catch (error) {
        console.error('Failed to create order:', error);
      }
    }
    trackClarityEvent('order')
  };

  // Effect to close the login modal and submit order if authentication succeeds
  useEffect(() => {
    if (auth.user && isPendingOrder) {
      setIsPendingOrder(false);
      setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: false }));
      handleSubmit(); // Re-attempt order submission
    }
  }, [auth.user, isPendingOrder]);

  const calculateAmount = () => {
    const selectedTime = currentOrder.arrivalTime.hours;
    const currentHour = selectedTime ? parseInt(selectedTime, 10) : parseInt(dayjs().format('HH'), 10);
    let basePrice = 0;

    switch (currentOrder.title) {
      case 'Укол':
        basePrice = currentHour >= 7 && currentHour < 20 ? 5000 : currentHour < 23 ? 6000 : 10000;
        break;
      case 'Капельница':
        basePrice = currentHour >= 7 && currentHour < 20 ? 7000 : currentHour < 23 ? 8000 : 14000;
        break;
      case 'Укол + Капельница':
        basePrice = currentHour >= 7 && currentHour < 20 ? 8000 : currentHour < 23 ? 9000 : 15000;
        break;
      case 'Детоксикация':
        basePrice = currentHour >= 7 && currentHour < 20 ? 25000 : 30000;
        break;
      case 'Золушка (коктейли)':
        basePrice = currentHour >= 7 && currentHour < 20 ? 12000 : currentHour < 23 ? 15000 : 20000;
        break;
      case 'Перевязки':
        basePrice = currentHour >= 7 && currentHour < 20 ? 7000 : currentHour < 23 ? 9000 : 15000;
        break;
      case 'Пищевые отравления (капельница)':
        basePrice = currentHour >= 7 && currentHour < 20 ? 15000 : currentHour < 23 ? 17000 : 20000;
        break;
      case 'Медсестра на время':
        basePrice = 20000;
        break;
      case 'Врач на дом':
        basePrice = 20000;
        break;
      default:
        basePrice = 0;
    }

    if (currentOrder.options.isWithDressingMaterial) {
      basePrice += 2000; 
    }
    if (currentOrder.options.isWithMaterialsPoisoning) {
      basePrice += 5000; 
    }
    if (currentOrder.options.isWithDrugsCocktail) {
      basePrice += currentHour >= 7 && currentHour < 20 ? 8000 : 10000;
    }
    if (currentOrder.options.isPremiumIntoxication) {
      basePrice += 30000;
    }
    if (currentOrder.options.isNeedPharmacy) {
      basePrice += 1000; 
    }
    if (currentOrder.options.daysForNurse != 0) {
      basePrice *= currentOrder.options.daysForNurse; 
    }

    return basePrice;
  };

  useEffect(() => {
    const newAmount = calculateAmount();
    setAmount(newAmount);
  }, [currentOrder]);

  return (
    <Box>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        backgroundColor: 'transparent',
      }}
    >
      <Button
        disabled
        variant="contained"
        sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          margin: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
          {amount}₸
        </Typography>
      </Button>
      <Button
        disabled={!currentOrder.title || !currentOrder.streetAndBuildingNumber}
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          margin: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
          Заказать
        </Typography>
      </Button>
    </Box>
    </Box>
  );
};

export default MapFooter;
