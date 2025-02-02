import Footer from 'components/Footer';
import Bandage from 'components/services/Bandage';
import Detox from 'components/services/Detox';
import Drip from 'components/services/Drip';
import Header from 'components/Header';
import Injection from 'components/services/Injection';
import LastPhrase from 'components/services/LastPhrase';
import MainPhrase from 'components/services/MainPhrase';
import Nurse from 'components/services/Nurse';
import Review from 'components/Reviews';
import Order from 'components/Order';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import currentOrderAtom from 'atoms/currentOrder';
import { useEffect } from 'preact/hooks';
import FAQ from 'components/FAQ';
import Certification from 'components/Certificates';
import Breadcrumbs from 'components/Breadcrumbs';

const faqItems = [
  {
    question: 'Можно ли вызвать медсестру или врача на дом для оказания медицинских услуг?',
    answer:
      'Да, специалисты Ukol.kz предоставляют профессиональные медицинские услуги на дому, включая инъекции, капельницы, перевязки и другие медицинские манипуляции. Мы оказываем помощь при обезвоживании, восстановлении после интоксикации, витаминной поддержке и других медицинских показаниях. Все процедуры выполняются строго в соответствии с медицинскими стандартами и рекомендациями врачей.',
  },
  {
    question: 'Как быстро медсестра может приехать на дом после оформления заказа?',
    answer:
      'Медсестры Ukol.kz прибывают на дом в течение 30-40 минут после подтверждения заявки. Время прибытия зависит от загруженности специалистов и расстояния до вашего адреса. Мы стремимся предоставлять медицинские услуги максимально оперативно и качественно.',
  },
  {
    question: 'В каких случаях требуется постановка капельницы или инъекций на дому?',
    answer:
      'Постановка капельниц и инъекций на дому необходима при таких состояниях, как обезвоживание, восстановление после алкогольной интоксикации, укрепление иммунитета, лечение хронических заболеваний и срочная медицинская помощь. Все процедуры выполняются квалифицированными специалистами Ukol.kz с использованием сертифицированных медикаментов.',
  },
  {
    question: 'Как Ukol.kz обеспечивает конфиденциальность оказания медицинских услуг?',
    answer:
      'Мы гарантируем полную конфиденциальность и безопасность при предоставлении медицинских услуг на дому. Вся информация о пациентах хранится в зашифрованном виде, а персонал строго соблюдает врачебную тайну и этические нормы.',
  },
  {
    question: 'Как рассчитать стоимость медицинских услуг на дому?',
    answer:
      'Стоимость медицинских услуг Ukol.kz рассчитывается автоматически на основе вашего местоположения, времени заказа и выбранного типа процедуры. Наши цены прозрачны и конкурентоспособны, что позволяет получать качественные медицинские услуги по доступным тарифам.',
  },
  {
    question: 'Какие специалисты оказывают медицинские услуги на дому?',
    answer:
      'В Ukol.kz работают только квалифицированные и сертифицированные медсестры и врачи с опытом работы.',
  },
];

export default function Services() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Список платных услуг на дому в Алматы от сервиса Ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Список платных медицинских услуг на дому в Алматы от ukol.kz: вызов медсестры, уколы, капельницы и другие процедуры. Профессиональные медработники, доступные цены, срочный выезд";
    document.head.appendChild(metaDescription);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz/services";
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


    };
    setServiceDetails();

    
  }, []);
  return (
    <main>

      <Header/>
      <Breadcrumbs/>
      <MainPhrase/>

     <Order/>
      <h1 className="font-bold text-center text-3xl text-black mb-2">
           Наши услуги и цены в Алматы
        </h1>
      <Injection/>
      <Drip/>
      <Detox/>
      <Nurse/>
      <Bandage/>
      <Review/> 
      <FAQ faqItems={faqItems}/>
      <Certification/>
      <LastPhrase/>
      <Footer/>
     
    </main>
  );
};

