import {
  Box,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useAtom } from 'jotai';
import { authAtom } from 'atoms/auth';
import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import { useLocation } from 'wouter-preact';
import currentOrderAtom from '../../atoms/currentOrder';

export default function Order() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [authValue, setAuthValue] = useAtom(authAtom);
  const [isCancelling, setIsCancelling] = useState(false); 
  

  const [, navigate] = useLocation();

  
  const handleCancelOrder = async () => {
    setIsCancelling(true);  // Start loading when cancel is initiated

    // const res = await cancelOrder(currentOrder!._id!);

    // if (!res.success) {
      const phone = '77027776776'; // Replace with the actual phone number
      const message = 'Здравствуйте! У меня вопрос по текущему заказу'; // The message you want to send
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank'); // Open in a new tab
    // } else {
    //   setCurrentOrder((prevOrder) => ({
    //     ...prevOrder,
    //     title: '',
    //     amount: 0,
    //     streetAndBuildingNumber: '',
    //     flat: '',
    //     floor: '',
    //     options: {
    //       isNeedPharmacy: false,
    //       isHaveDoctorsAppointment: false,
    //       isWithDrugsCocktail: false,
    //       isPremiumIntoxication: false,
    //       isWithDressingMaterial: false,
    //       isWithMaterialsPoisoning: false,
    //       photoURL: '',
    //       photo: undefined,
    //       daysForNurse: 0,
    //       message: '',
    //     },
    //     arrivalTime: {
    //       hours: dayjs().format('HH'),
    //       minutes: dayjs().format('mm'),
    //       isNearestHour: true,
    //       date: dayjs().format('YYYY-MM-DD')
    //     },
    //     status: ''
    //   }));
    // }

    setIsCancelling(false);  // Stop loading when the cancellation process is done
  };

  return (
    <div className="mt-10 text-center bg-transparent">
      <h2 className="text-2xl font-bold text-black mb-4">
        Заказ успешно создан
      </h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="btn  btn-ghost  bg-my-green text-black rounded-lg px-6  text-lg"
        >
          На главную
        </button>
        <button
          onClick={handleCancelOrder}
          className="btn btn-ghost bg-my-green text-black rounded-lgl px-6 text-lg flex items-center justify-center"
        >
          {isCancelling ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            'Связаться с поддержкой'
          )}
        </button>
      </div>
    </div>
  );

  return (
    <Box sx={{ mt: '5%',  textAlign: 'center', backgroundColor: 'transparent' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', color: 'green', mb: '2%', }}>
        Заказ успешно создан
      </Typography>
      {/* <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
          fontWeight: 'bold',
          color: 'dark',
          mb: 2,
        }}
      >
        Что бы сделать еще один заказ дождитесь выполнения текущего или же отмените созданный
      </Typography> */}
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          padding: 1,
          mr: 2
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
          backgroundColor: '#88e788',
          border: '3px solid black',
          borderRadius: '140px',
          padding: 1,
          ml: 2
        }}
      >
        {isCancelling ? (
            <CircularProgress size={24} color="primary" />  // Show the spinner while cancelling
          ) : (
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' } }}
            >
              Связаться с поддержкой 
            </Typography>
          )}
        </Button>
      </Box>
    );
  }
