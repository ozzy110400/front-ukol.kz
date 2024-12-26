import { useEffect, useState } from 'preact/hooks';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
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
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleSubmit = async () => {
    setLoading(true); // Set loading state to true when the button is clicked
  
    // Validate essential fields
    if (!currentOrder.title || !currentOrder.streetAndBuildingNumber) {
      alert('Введите адрес и выбирите услугу');
      setLoading(false);
      return;
    }
  
    // Check authentication
    if (!auth.user) {
      setIsPendingOrder(true);
      setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: true }));
      setLoading(false); // Ensure loading is reset here
      return;
    }
  
    try {
      // Update the currentOrder with the amount
      setCurrentOrder((prevOrder) => ({
        ...prevOrder,
        amount: amount!,
      }));
  
      const updatedOrder = {
        ...currentOrder,
        amount: amount!,
      };
  
      if (updatedOrder.options.isHaveDoctorsAppointment && updatedOrder.options.photo) {
        // Handle photo upload if required
        const formData = new FormData();
        formData.append('file', updatedOrder.options.photo);
  
        const uploadResponse = await uploadPhoto(formData);
  
        updatedOrder.options.photoURL = uploadResponse.data.photoURL;
      }
  
      // Create the order
      const result = await createOrder(updatedOrder);
  
      // Update the current order state with response data
      setCurrentOrder((prevOrder) => ({
        ...prevOrder,
        _id: result.data._id,
        status: result.data.status,
      }));
  
      // Show success modal if the operation was successful
      setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));
      console.log('Order created successfully:', result);
    } catch (error) {
      console.error('Failed to create order:', error);
    } finally {
      setLoading(false); // Always reset loading state
      trackClarityEvent('order'); // Track event
    }
  };
  
  // const handleSubmit = async () => {
  //   setLoading(true); // Set loading state to true when the button is clicked
  //   if(!currentOrder.title || !currentOrder.streetAndBuildingNumber ){
  //     alert('Введите адрес и выбирите услугу')
  //     setLoading(false);
  //     return
  //   }

  //   if (!auth.user) {
  //       setIsPendingOrder(true);
  //       setModalsOpen((prev) => ({ ...prev, isLoginModalOpen: true }));
  //   } else {
  //     try {
  //       setCurrentOrder(prevOrder => ({
  //         ...prevOrder,
  //         amount: amount!,
  //       }));
  //       currentOrder.amount = amount!;

  //       if (currentOrder.options.isHaveDoctorsAppointment && currentOrder.options.photo) {
  //         const formData = new FormData();
  //         formData.append('file', currentOrder.options.photo);
  //         const uploadResponse = await uploadPhoto(formData);

  //         const updatedOrder = {
  //           ...currentOrder,
  //           options: {
  //             ...currentOrder.options,
  //             photoURL: uploadResponse.data.photoURL,
  //           },
  //         };
  //         setCurrentOrder(updatedOrder);

  //         const result = await createOrder(updatedOrder);
  //         setCurrentOrder((prevAuth) => ({
  //           ...prevAuth,
  //           _id: result.data._id,
  //           status: result.data.status
  //         }));
  //         setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));
  //         console.log('Order created successfully:', result);
  //       } else {
  //         const result = await createOrder(currentOrder);
  //         setModalsOpen((prev) => ({ ...prev, isSuccesModalOpen: result.success }));

  //         setCurrentOrder((prevAuth) => ({
  //           ...prevAuth,
  //           _id: result.data._id,
  //           status: result.data.status
  //         }));
  
  //         console.log('Order created successfully:', result);
  //       }
  //     } catch (error) {
  //       console.error('Failed to create order:', error);
  //     }
  //   }
  //   setLoading(false); // Reset loading state after the operation
  //   trackClarityEvent('order');
  // };

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
          // disabled={!currentOrder.title || !currentOrder.streetAndBuildingNumber } // Disable button while loading
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#88e788',
            border: '3px solid black',
            borderRadius: '140px',
            margin: 2,
            position: 'relative',
          }}
        >
          {loading ? (
            <CircularProgress size={24}  /> // Show loader if loading is true
          ) : (
            <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}>
              Заказать
            </Typography>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default MapFooter;
