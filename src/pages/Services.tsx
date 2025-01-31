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
      'В Ukol.kz работают только квалифицированные и сертифицированные медсестры и врачи с опытом работы. Каждый специалист проходит обязательное обучение и аттестацию перед началом работы. После оказания услуги вы сможете оставить отзыв и оценку, что помогает нам поддерживать высокий уровень сервиса.',
  },
];

export default function Services() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Все медицинские услуги на дому - ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "ukol.kz - полный перечень медицинских услуг на дому. Капельницы, уколы, перевязки, уход за больными, вызов врача и многое другое. Профессионально, анонимно и качественно.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "все медицинские услуги на дому, уколы на дому, капельницы на дому, медсестра на дом, уход за больными, перевязки, вызов врача на дом, полный список услуг";
    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.content = "Укол.kz - Все медицинские услуги на дому";
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.setAttribute('property', 'og:description');
    metaOgDescription.content = "Полный список медицинских услуг на дому от ukol.kz. Мы гарантируем профессионализм, анонимность и комфорт. Доверьтесь нашим сертифицированным специалистам.";
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    metaOgUrl.content = "https://ukol.kz/services";
    document.head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.content = "https://ukol.kz/images/services-preview.jpg";
    document.head.appendChild(metaOgImage);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz/services";
    document.head.appendChild(linkCanonical);

    // Очистка при размонтировании компонента
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaOgTitle);
      document.head.removeChild(metaOgDescription);
      document.head.removeChild(metaOgUrl);
      document.head.removeChild(metaOgImage);
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
          Наши услуги на дом
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

