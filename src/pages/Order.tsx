import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import LoginModal from '../components/order/LoginModal';
import NotUnderstand from '../components/order/Notunderstand';
import { serviceOptionsMap } from '../components/order/options/allOptionsMap';
import ArrivalTime from '../components/order/ArrivalTime';
import MapFooter from '../components/order/MapFooter';
import { useLocation, useParams } from 'wouter-preact';
import { authAtom } from 'atoms/auth';
import { checkOpenOrder } from 'helpers/api/apiClient';
import { useEffect } from 'preact/hooks';
import AddressInput from 'components/order/AddressInput';
import Header from 'components/services/Header';

type ServiceDetails = {
  title: string;
  description: string;
}

const serviceMapping: Record<string, Record<string, ServiceDetails>> = {
  injection: {
    intramuscularly: {
      title: 'Внутримышечный укол',
      description: 'Профессиональное выполнение внутримышечных инъекций на дому'
    },
    intravenous: {
      title: 'Внутривенный укол',
      description: 'Безопасное внутривенное введение препаратов'
    },
    subcutaneous: {
      title: 'Подкожный укол',
      description: 'Подкожные инъекции с минимальным дискомфортом'
    }
  },
  drip: {
    hangover: {
      title: 'Капельница от похмелья',
      description: 'Эффективное восстановление после алкогольной интоксикации'
    },
    poisoning: {
      title: 'Капельница от отравления',
      description: 'Быстрое выведение токсинов из организма'
    },
    custom: {
      title: 'Капельница',
      description: 'Индивидуальный подбор состава капельницы'
    }
  },
  nurse: {
    old: {
      title: 'Присмотр за пожилым человеком',
      description: 'Профессиональный уход за пациентами пожилого возраста'
    },
    bed: {
      title: 'Присмотр за лежачим больным',
      description: 'Специализированный уход за лежачими пациентами'
    },
    event: {
      title: 'Дежурство на мероприятии',
      description: 'Медицинское сопровождение мероприятий'
    },
  },
  detox: {
    alcohol: {
      title: 'Алкогольная детоксикация',
      description: 'Комплексная очистка организма от алкоголя'
    },
    drug: {
      title: 'Наркотическая детоксикация',
      description: 'Профессиональная помощь при наркотической интоксикации'
    },
  },
  bandage: {
    regular: {
      title: 'Перевязка',
      description: 'Профессиональная перевязка ран и послеоперационных швов'
    },
  },
};

export default function Order() {
  const [, navigate] = useLocation();
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const [authValue] = useAtom(authAtom);
  const { type, code } = useParams();

  useEffect(() => {
    const setServiceDetails = async () => {
      // Сброс предыдущих значений перед проверкой
      setCurrentOrder(prev => ({
        ...prev,
        title: '',
        description: ''
      }));

      if (type && serviceMapping[type]) {
        const serviceCategory = serviceMapping[type];
        if (code && serviceCategory[code]) {
          const { title, description } = serviceCategory[code];
          setCurrentOrder(prev => ({
            ...prev,
            title,
            description
          }));
        } else {
          navigate('/404');
        }
      } else {
        navigate('/404');
      }
    };

    setServiceDetails();
  }, [type, code, setCurrentOrder, navigate]);

  const getOptions = () => {
    const options = serviceOptionsMap[type as keyof typeof serviceOptionsMap]
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
          setCurrentOrder(prev => ({
            ...prev,
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
    <div className="bg-transparent">
      <Header/>
      <div className="mt-2 px-4 px-4">
        <h1 className="text-3xl text-black font-bold mb-4">{currentOrder.title}</h1>
        
      </div>

      <AddressInput />
      {getOptions()}
      {/* <ArrivalTime />
      <MapFooter />
      <NotUnderstand />
      <LoginModal /> */}
    </div>
  );
}