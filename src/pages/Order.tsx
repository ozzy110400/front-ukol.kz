import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import Map from '../components/order/MapN';
import LoginModal from '../components/order/LoginModal';
import NotUnderstand from '../components/order/Notunderstand';
import { serviceOptionsMap } from '../components/order/options/allOptionsMap';
import ArrivalTime from '../components/order/ArrivalTime';
import MapFooter from '../components/order/MapFooter';
import { useLocation } from 'wouter-preact';
//import ServiceCardsList from '../components/order/ServiceCardsList';
import { authAtom } from 'atoms/auth';
import { checkOpenOrder } from 'helpers/api/apiClient';
import { useEffect, useState } from 'preact/hooks';

export default function Order() {
  const [, navigate] = useLocation();

  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [authValue] = useAtom(authAtom);

  const getOptions = () => {
    const options = currentOrder.title ? serviceOptionsMap[currentOrder.title as keyof typeof serviceOptionsMap] : [];
    return (
      <div>
        {options.map(({ component: Component }, index: number) => (
          <Component key={index} />
        ))}
      </div>
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
    if (
      ['waiting', 'taken', 'waiting_rating'].includes(currentOrder.status) &&
      authValue.user.phoneNumber !== '77012111030'
    ) {
      navigate('/waiting');
    }
  }, [currentOrder.status]);

  return (
    <div className="mt-5 bg-transparent">
      <div className="flex justify-between items-center mb-4 px-4">
        <p className="text-center font-extrabold text-lg sm:text-xl md:text-2xl">
          Обратите внимание! Препараты, материалы и другие расходники не входят в стоимость услуг
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-black bg-opacity-10 border-4 border-black rounded-full px-6 py-2 min-w-[120px] hover:bg-opacity-20 transition"
        >
          <span className="text-center text-base sm:text-lg md:text-xl">на главную</span>
        </button>
      </div>
      <Map />
      {/* <ServiceCardsList /> */}
      {getOptions()}
      <ArrivalTime />
      <MapFooter />
      <NotUnderstand />
      <LoginModal />
    </div>
  );
}
