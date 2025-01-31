import MainPhrase from '../components/main/MainPhrase';
import FAQ from '../components/FAQ';
import Header from 'components/Header';
import Experts from 'components/main/Experts';
import LastPhrase from 'components/main/LastPhrase';
import Review from 'components/Reviews';
import Service from 'components/main/Service';
import Footer from 'components/Footer';
import Head from 'preact-head';
import { useEffect } from 'preact/hooks';
import Order from 'components/Order';
import dayjs from 'dayjs';
import currentOrderAtom from '../atoms/currentOrder';
import { useAtom } from 'jotai';
import Certification from 'components/Certificates';
import OrderShort from 'components/main/OrderShort';

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

export default function Main() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
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


  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Медицинские услуги на дому - ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "ukol.kz - предоставляем профессиональные медицинские услуги на дому в вашем городе. Капельницы, уколы, перевязки, уход за больными и многое другое. Быстро, анонимно и качественно.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "медицинские услуги на дому, уколы на дому, капельницы на дому, медсестра на дом, уход за больными, перевязки, вызов врача на дом";
    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.content = "ukol.kz - Медицинские услуги на дому";
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.setAttribute('property', 'og:description');
    metaOgDescription.content = "Закажите медицинские услуги на дому от ukol.kz. Мы гарантируем профессионализм, анонимность и комфорт. Доверьтесь нашим сертифицированным специалистам.";
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    metaOgUrl.content = "https://ukol.kz";
    document.head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.content = "https://ukol.kz/images/preview.jpg";
    document.head.appendChild(metaOgImage);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz";
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

  return (
    <main>
      <Header />
      <MainPhrase />
      <OrderShort />
      <Experts />
      <Service/>
      <Review/>
      <Order/>
      <FAQ faqItems={faqItems} />
      <Certification/>
      <LastPhrase />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Лучшие медицинские услуги на дому",
            "description": "Профессиональные медицинские услуги на дому: уколы, капельницы, перевязки и уход за пациентами",
            "medicalSpecialty": "Домашняя медицинская помощь",
            "openingHours": "Mo-Su 00:00-23:59",
            "makesOffer": {
              "@type": "Offer",
              "name": "Медицинские услуги на дому",
              "description": "Услуги включают: выполнение уколов, установка капельниц, перевязки, уход за лежачими больными",
              "availability": "InStock"
            },
            "areaServed": {
              "@type": "City",
              "name": "Алматы"
            }
          })
        }}
      />
    </main>
  );
}
