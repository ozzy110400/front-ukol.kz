import { useEffect, useState } from 'preact/hooks';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';
import modalsOpenAtom from '../../atoms/modalsOpen';
import { authAtom }  from '../../atoms/auth';
import { uploadPhoto, createOrder } from '../../helpers/api/apiClient';
import dayjs from 'dayjs';
import { trackClarityEvent } from 'App';
import { navigate } from 'wouter-preact/use-browser-location';
import { isValidatePhone } from './PhoneInput';

const OrderFooter = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [amount, setAmount] = useState(currentOrder.amount);
  const [modalsOpen, setModalsOpen] = useAtom(modalsOpenAtom);
  const [isPendingOrder, setIsPendingOrder] = useState(false);
  const [isPriceBoost, setIsPriceBoost] = useState(false);
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleSubmit = async () => {
    setLoading(true);
  
    // Validate essential fields
    if (!currentOrder.address) {
      alert('Пожалуйста, введите адрес');
      setLoading(false);
      return;
    }

    if (currentOrder.phone.length != 11) {
      alert('Пожалуйста, введите корректный номер телефона');
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
      navigate('/waiting')
    } catch (error) {
      console.error('Failed to create order:', error);
    } finally {
      setLoading(false); // Always reset loading state
      trackClarityEvent('order'); // Track event
    }
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
      case 'Внутримышечный укол':
      case 'Внутривенный укол':
      case 'Подкожный укол':
        basePrice = currentHour >= 7 && currentHour < 20 ? 5000 
                  : currentHour >= 20 && currentHour < 23 ? 6000 
                  : 10000;
         
          setIsPriceBoost(basePrice!=5000)        
        break;
    
      case 'Капельница':
        
        basePrice = currentHour >= 7 && currentHour < 20 ? 7000 
                  : currentHour >= 20 && currentHour < 23 ? 8000 
                  : 14000;
          
          setIsPriceBoost(basePrice!=7000)        
          
        break;
    
      case 'Капельница от отравления':
        basePrice = currentHour >= 7 && currentHour < 20 ? 15000 
                  : currentHour >= 20 && currentHour < 23 ? 17000 
                  : 20000;
          
          setIsPriceBoost(basePrice!=15000)        
        
        break;
    
      case 'Алкогольная детоксикация':
      case 'Наркотическая детоксикация':
        basePrice = currentHour >= 7 && currentHour < 20 ? 25000 : 30000;
        setIsPriceBoost(basePrice!=25000)        

        break;
    
      case 'Перевязка':
        basePrice = currentHour >= 7 && currentHour < 20 ? 7000 
                  : currentHour >= 20 && currentHour < 23 ? 9000 
                  : 15000;
        setIsPriceBoost(basePrice!=7000)        
        break;
    
      case 'Уход за пожилым человеком':
      case 'Уход за лежачим человеком':
      case 'Медсопровождение мероприятий':
        basePrice = 20000;
        break;
    
      default:
        basePrice = 0;
    }

    if (currentOrder.options.isWithDressingMaterial) {
      basePrice += 2000; 
    }
    if (currentOrder.options.isNeedInjection) {
      basePrice += 1000; 
    }
    if (currentOrder.options.isWithMaterialsPoisoning) {
      basePrice += 5000; 
    }
    // if (currentOrder.options.isWithDrugsCocktail) {
    //   basePrice += currentHour >= 7 && currentHour < 20 ? 8000 : 10000;
    // }
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
    <div className="w-full flex justify-between items-center p-1 bg-transparent">
      <div className="m-2">
        <div className="text-lg font-bold text-black">
          {amount ? amount.toLocaleString('en-US') : '0'}₸
        </div>
        {isPriceBoost && (
          <small className="text-gray-600">цена повышена из-за времени</small>
        )}
        
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`btn btn-ghost ${
          loading ? 'loading' : ''
        } bg-my-green rounded-lg m-2 text-lg text-black`}
      >
        {loading ? '' : 'Заказать'}
      </button>
    </div>
  );
};

export default OrderFooter;
