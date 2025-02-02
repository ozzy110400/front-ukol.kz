import { useAtom } from 'jotai';
import currentOrderAtom from '../atoms/currentOrder';
import { serviceOptionsMap } from '../components/order/options/allOptionsMap';
import ArrivalTime from '../components/order/ArrivalTime';
import { useLocation, useParams } from 'wouter-preact';
import { useEffect } from 'preact/hooks';
import AddressInput from 'components/order/AddressInput';
import PhoneInput from 'components/order/PhoneInput';

import Header from 'components/Header';
import OrderFooter from 'components/order/OrderFooter';
import LoginModal from 'components/order/LoginModal';
import Footer from 'components/Footer';
import dayjs from 'dayjs';
import Head from 'preact-head';
import FAQ from 'components/FAQ';
import Certification from 'components/Certificates';
import Doctor1Img from '/img/experts/doctorNN1.webp';
import Doctor2Img from '/img/experts/doctor2N.webp';
import { serviceMapping } from 'helpers/servicesValue';
import Review from 'components/Reviews';
import Breadcrumbs from 'components/Breadcrumbs';


export default function Order() {
  const [, navigate] = useLocation();
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  const { type, code } = useParams();
  const serviceDetails = type && code 
    ? serviceMapping[type]?.[code] 
    : null;

  
    useEffect(() => {
      // Динамически обновляем содержимое <head>
      if (!serviceDetails) return;
      document.title = serviceDetails.seoTitle
  
      const metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = serviceDetails.seoDescription
      document.head.appendChild(metaDescription);
  
      const linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      linkCanonical.href = `https://ukol.kz/services/${type}/${code}`;
      document.head.appendChild(linkCanonical);
  
      // Очистка при размонтировании компонента
      return () => {
        document.head.removeChild(metaDescription);
        document.head.removeChild(linkCanonical);
      };
    }, []);

  useEffect(() => {
    const setServiceDetails = async () => {
      setCurrentOrder({
        _id: '',
        title: '',
        address: '',
        flat: '',
        floor: '',
        amount: 0,
        phone: '',
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
          hours: dayjs().add(1, 'hour').format('HH'),
          minutes: dayjs().format('mm'),
          date: dayjs().format('YYYY-MM-DD'),
          isNearestHour: true
        },
        status: '',
      });

      if (type && serviceMapping[type]) {
        const serviceCategory = serviceMapping[type];
        if (code && serviceCategory[code]) {
          const { title, description } = serviceCategory[code];
          setCurrentOrder(prev => ({
            ...prev,
            title
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
    const options = serviceOptionsMap[code as keyof typeof serviceOptionsMap]
    return (
      <div>
        {options.map(({ component: Component }, index: number) => (
          <Component key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-transparent">

      <Header/>
      <Breadcrumbs/>

      <section className="mb-6 mt-4 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
            {serviceDetails?.seoH1}
            </h1>
            <p className="text-lg text-black mb-6">
                {serviceDetails?.description}
              </p>
          </div>
        </div>
      </section>


      <section className="mb-6 ">
        <div id="order" className=" rounded-lg pt-4 bg-black/10 mx-4">
        <h2 className="text-3xl text-center font-bold text-black mb-4">Оформление заказа</h2>

        <PhoneInput />
        <AddressInput />
        {getOptions()}
        <ArrivalTime />
        <OrderFooter />
        </div>
      </section>

      <div className="flex items-center mb-10">
            <img
              src={Doctor1Img}
              alt="Профессиональная медсестра оказывает медицинские услуги на дому"
              loading="lazy"
              className="h-28 w-12 rounded-md"
              aria-hidden="true"
            />
              <div 
              role="region"
              aria-labelledby="professionalism-heading"
              className="chat-bubble bg-transparent text-black text-lg font-semibold 
                border-2 border-solid border-black rounded-bl-lg mr-16 ml-4"
            >
                  <h2 class="text-2xl font-bold text-black mb-4">
                    Нам доверились более 10 000 пациентов
                  </h2>
                  <p class="text-lg text-gray-700 mb-4">
                     За 2 года работы мы помогли тысячам людей получить качественную медицинскую помощь 
                     без посещения клиники. 98% пациентов рекомендуют нас своим близким.
                  </p>
                  
                  <div className="flex items-center gap-4 border-t-2 border-black  pt-4">
                    <div className="font-bold text-my-green " >4.9/5</div>
                    <div className="text-sm text-black">Средняя оценка по отзывам</div>
                  </div>
              </div>
      </div>

           <div className="flex items-center mb-10">         
           <div 
              role="region"
              aria-labelledby="comfort-heading"
              className="chat-bubble bg-transparent text-black text-lg font-semibold 
                border-2 border-solid border-black rounded-bl-lg ml-16 mr-4"
            >
                 <h2 class="text-2xl font-bold text-black mb-4">Безупречный подход</h2>
                 <p className="text-lg text-gray-700 mb-4">
                Наши специалисты - сертифицированные медсестры с клиническим опытом работы от 5 лет. 
                Ежегодно проходим повышение квалификации и обучаемся новым методикам введения препаратов.
              </p>
                 
            </div>
            <img
                src={Doctor2Img}
                alt="Медсестра делает укол пациенту"
                loading="lazy"
                className="h-24 w-12 rounded-md"
                aria-hidden="true"
              />
           </div>

      <Review/>
      <FAQ faqItems={serviceDetails?.faq}/>
      <Certification/>
      <Footer/>
      <LoginModal /> 
    </div>
  );
}