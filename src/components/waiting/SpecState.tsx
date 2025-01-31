import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { currentSpecAtom } from '../../atoms/currentSpecialists';
import currentOrderAtom from '../../atoms/currentOrder';
import { DotsAnimation } from 'components/DotsAnimation';
import { checkOpenOrder } from '../../helpers/api/apiClient';
import { useLocation } from 'wouter-preact';

const SpecState = () => {
  const [, navigate] = useLocation();

  const [currentSpecs] = useAtom(currentSpecAtom);
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [replyCount, setReplyCount] = useState(0);
  const [timeToArrive, setTimeToArrive] = useState(0);
  const [specPhoneNumber, setSpecPhoneNumber] = useState('');
  const [isOrderTaken, setIsOrderTaken] = useState(false);

  useEffect(() => {
    const checkOrderStatus = async () => {
      try {
        const { order } = await checkOpenOrder();
        if (!order) {
          navigate('/');
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

    checkOrderStatus();
    const interval = setInterval(checkOrderStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isOrderTaken) {
    return (
      <div className="p-4 text-center">
        <h5 className="text-lg font-semibold text-black">
          {currentOrder.arrivalTime.isNearestHour 
            ? `Специалист подтвердил ваш заказ и уже выехал! Ожидайте через ${timeToArrive} минут`
            : `Специалист подтвердил ваш заказ и будет у вас в ${currentOrder.arrivalTime.hours} часа ${currentOrder.arrivalTime.minutes} минут ${currentOrder.arrivalTime.date}`
          }
        </h5>
      </div>
    );
  }

  return (
    <h5 className="p-4 text-center text-lg font-semibold">
      Подбираем подходящего для Вас специалиста, ожидайте <DotsAnimation />
    </h5>
  );
};

export default SpecState;
