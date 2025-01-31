import { useAtom } from 'jotai';
import currentOrderAtom from '../../atoms/currentOrder';
import { serviceOptionsMap } from '../../components/order/options/allOptionsMap';
import ArrivalTime from '../../components/order/ArrivalTime';
import { useLocation } from 'wouter-preact';
import AddressInput from 'components/order/AddressInput';
import PhoneInput from 'components/order/PhoneInput';
import OrderFooter from 'components/order/OrderFooter';
import LoginModal from 'components/order/LoginModal';
import dayjs from 'dayjs';
import { serviceMapping } from 'helpers/servicesValue';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';

const services = {
  injection: {
    title: 'Укол',
    price: 5000,
  },
  drip: {
    title: 'Капельница',
    price: 7000,
  },
  poisoning: {
    title: 'Капельница от отравления',
    price: 15000,
  },
  detox: {
    title: 'Детоксикация',
    price: 25000,
  },
};

export default function OrderShort() {
  const renderCount = useRef(0)
  useEffect(() => {
    console.log('Render count:', ++renderCount.current)
  }, [])
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [currentSelection, setCurrentSelection] = useState('');

  let selectOptions: Array<{ value: string; label: string; price: number }> = [];

  selectOptions = Object.entries(services).map(([key, service]) => ({
    value: key,
    label: service.title,
    price: service.price,
  }));
 


  const handleSelect = (value: string, title: string) => {

    setCurrentSelection(value);

    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      title,
      options: {
        isChild: false,
        isNeedInjection: false,
        isNeedWoman: false,
        isNeedPharmacy: false,
        isHaveDoctorsAppointment: false,
        isWithDrugsCocktail: false,
        isPremiumIntoxication: false,
        isWithDressingMaterial: false,
        isWithMaterialsPoisoning: false,
        photoURL: '',
        photo: undefined,
        daysForNurse: 0,
        message: '',
      },
      arrivalTime: {
        hours: dayjs().format('HH'),
        minutes: dayjs().format('mm'),
        isNearestHour: true,
        date: dayjs().format('YYYY-MM-DD'),
      },
    }));
  };

  const OptionsRenderer = useMemo(() => {
    const options = currentSelection 
      ? serviceOptionsMap[currentSelection as keyof typeof serviceOptionsMap]
      : [];

    
    return () => (
      <div>
        {options.map(({ component: Component }, index) => (
          <Component key={index} />
        ))}
      </div>
    );
  }, [currentSelection]);

  return (
    <div className="pt-4 my-4 bg-black/10 mx-4 rounded-lg">
      <p className="text-2xl text-center font-bold text-black mb-4 text-black">Оформление заказа</p>

      <PhoneInput />
      <AddressInput />

      <div className="mt-4 mx-4 text-black">
        <label className="label">
          <span className="label-text text-black required">Выберите услугу*</span>
        </label>
        <ul className="space-y-3 max-h-[340px] overflow-y-auto">
          {selectOptions.map((option) => (
            <li
              key={option.value}
              data-clarity-mask="true"
              onClick={() => handleSelect(option.value, option.label)}
              className={`
                p-4 border-2 border-black rounded-lg cursor-pointer
                transition-colors duration-300
                ${
                  currentOrder.title === option.label
                    ? 'bg-my-green'
                    : 'bg-white'
                }
              `}
            >
              <div className="flex justify-between items-center">
                <span className="text-md font-medium">{option.label}</span>
                <span className="text-md font-bold select-none">
                  {new Intl.NumberFormat('en-US').format(option.price)}₸
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {OptionsRenderer()}
      <ArrivalTime />
      <OrderFooter />
      <LoginModal />
    </div>
  );
}