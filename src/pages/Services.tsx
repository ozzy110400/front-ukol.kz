import Footer from 'components/Footer';
import Bandage from 'components/services/Bandage';
import Detox from 'components/services/Detox';
import Drip from 'components/services/Drip';
import Header from 'components/Header';
import Injection from 'components/services/Injection';
import LastPhrase from 'components/services/LastPhrase';
import MainPhrase from 'components/services/MainPhrase';
import Nurse from 'components/services/Nurse';

import Head from 'preact-head';
import Order from 'components/Order';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import currentOrderAtom from 'atoms/currentOrder';
import { useEffect } from 'preact/hooks';

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
      <MainPhrase/>
      <Injection/>
      <Drip/>
      <Detox/>
      <Nurse/>
      <Bandage/>
      <Order/>
      <LastPhrase/>
      <Footer/>
     
    </main>
  );
};

