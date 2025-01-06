import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import Typography from '@mui/material/Typography';
import { currentSpecAtom } from '../../atoms/currentSpecialists';
import currentOrderAtom from '../../atoms/currentOrder';
import { DotsAnimation } from 'components/DotsAnimation';
import { checkOrder } from '../../helpers/api/apiClient';
import { Box, Button, CircularProgress } from '@mui/material';
import { useLocation } from 'wouter-preact';

const SpecState = () => {
  const [, navigate] = useLocation();

  const [currentSpecs] = useAtom(currentSpecAtom);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [replyCount, setReplyCount] = useState(0);

  const [timeToArrive, setTimeToArrive] = useState(0);
  const [specPhoneNumber, setSpecPhoneNumber] = useState('');


  const [isOrderTaken, setIsOrderTaken] = useState(false);

  // const handleCancelOrder = async () => {
  //   setIsPressingBtn(true);  // Start loading when cancel is initiated
  //     const phone = specPhoneNumber; // Replace with the actual phone number
  //     const message = ''; // The message you want to send
  //     const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  //     window.open(whatsappUrl, '_blank'); // Open in a new tab
  //     setIsPressingBtn(false);  // Stop loading when the cancellation process is done
  // };

  useEffect(() => {
    const updateReplyCount = () => {
      const randomMultiplier = Math.floor(Math.random() * 13) + 1;
      setReplyCount(currentSpecs.length > 0 ? currentSpecs.length * randomMultiplier : randomMultiplier);
    };

    const checkOrderStatus = async () => {
      try {

        const { order } = await checkOrder();
        if(!order){
          console.log('we are here')
          navigate('/')
        }
        if (order.status === 'taken' && !isOrderTaken) {
          setCurrentOrder((prev) => ({ ...prev, status: order.status }));
          setIsOrderTaken(true);
          setTimeToArrive(order.bestBit + 10);
          setSpecPhoneNumber(order.ownerBestBit);
        }
        if (order.status === 'waiting_rating' && !isOrderTaken) {
          setCurrentOrder((prev) => ({ ...prev, status: order.status }));
        }

      } catch (error) {
        console.error('Failed to check order status:', error);
      }
    };

    updateReplyCount();
    checkOrderStatus();

    const interval = setInterval(() => {
      updateReplyCount();
      checkOrderStatus();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (isOrderTaken) {
    return (
      <Box>
        <Typography variant="h5" sx={{ mt: 2, ml: 2, mr: 2, textAlign: 'center' }}>
          {currentOrder.arrivalTime.isNearestHour 
            ? `Специалист подтвердил ваш заказ и уже выехал! Ожидайте через ${timeToArrive} минут`
            : `Специалист подтвердил ваш заказ и будет у вас в ${currentOrder.arrivalTime.hours} часа ${currentOrder.arrivalTime.minutes} минут ${currentOrder.arrivalTime.date}`
          }
        </Typography>
      </Box>
    );
  }

  return (
    <Typography variant="h5" sx={{  mt: 2, ml: 2, mr: 2, textAlign: 'center' }}>
        Подбираем подходящего для Вас специалиста, ожидайте<DotsAnimation />     
    </Typography>
  );
};

export default SpecState;
