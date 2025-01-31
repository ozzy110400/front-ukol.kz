import Review from 'components/Reviews';
import AlcoholDetoxImg from '../../../img/services/detox/alcohol.svg';
import DrugDetoxImg from '../../../img/services/detox/drug.svg';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import Order from 'components/Order';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import currentOrderAtom from 'atoms/currentOrder';
import { useEffect } from 'preact/hooks';
import Certification from 'components/Certificates';
import Breadcrumbs from 'components/Breadcrumbs';

const faq = [
  {
    question: 'Как быстро приезжает специалист для детоксикации?',
    answer:
      'Наши специалисты приезжают в течение 40-60 минут после заявки. Мы работаем круглосуточно, включая выходные и праздничные дни. Время приезда зависит от вашего местоположения и текущей загрузки специалистов.',
  },
  {
    question: 'В чем отличие алкогольной и наркотической детоксикации?',
    answer:
      'Алкогольная детоксикация направлена на выведение этанола и его метаболитов, стабилизацию сердечной деятельности. Наркотическая детоксикация требует особого подхода в зависимости от типа вещества, включает специфические антидоты и более длительный мониторинг состояния.',
  },
  {
    question: 'Какие препараты используются при детоксикации?',
    answer:
      'Мы используем сертифицированные растворы для регидратации, витаминные комплексы, гепатопротекторы, седативные препараты. Все медикаменты подбираются индивидуально с учетом состояния пациента и противопоказаний.',
  },
  {
    question: 'Можно ли проводить детоксикацию при хронических заболеваниях?',
    answer:
      'Да, наши медики имеют опыт работы с пациентами с сопутствующими заболеваниями. Перед процедурой проводится экспресс-диагностика, при необходимости корректируется состав капельницы.',
  },

  {
    question: 'Оказываете ли вы помощь при запое?',
    answer:
      'Да, мы специализируемся на выведении из запоя любой продолжительности. Процедура включает инфузионную терапию, восстановление электролитного баланса и симптоматическое лечение.',
  },
  {
    question: 'Гарантируете ли вы анонимность?',
    answer:
      'Абсолютно. Все процедуры проводятся конфиденциально, медицинская документация не передается третьим лицам.',
  },
];

export default function Detox() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Детоксикация на дому - ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "ukol.kz - профессиональная детоксикация на дому. Очищение организма от токсинов, капельницы для детоксикации, помощь при отравлениях и похмелье. Быстро, анонимно и качественно.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "детоксикация на дому, капельницы для детоксикации, очищение организма, вывод токсинов, помощь при отравлении, лечение похмелья, детокс на дому";
    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.content = "ukol.kz - Детоксикация на дому";
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.setAttribute('property', 'og:description');
    metaOgDescription.content = "Профессиональная детоксикация на дому от ukol.kz. Очищение организма от токсинов, помощь при отравлениях и похмелье. Доверьтесь нашим сертифицированным специалистам.";
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    metaOgUrl.content = "https://ukol.kz/services/detox";
    document.head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.content = "https://ukol.kz/images/detox-preview.jpg";
    document.head.appendChild(metaOgImage);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz/services/detox";
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


      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
              Экстренная детоксикация на дому
            </h1>
            <p className="text-lg text-black mb-6">
              Круглосуточный выезд опытного специалиста для быстрого очищения организма 
              от алкоголя или наркотических веществ. Восстановление организма за 1-3 часа.
            </p>
          </div>
        </div>
      </section>
      <Order/> 

      {/* Секции детоксикации */}
      <section className="space-y-16 px-4 text-black">
        {/* Алкогольная */}
        <div id="alcohol" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={AlcoholDetoxImg} alt="Алкогольная" className="w-10 h-10" />
              Алкогольная детоксикация
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Инфузионная терапия физрастворами с витаминами</li>
                  <li>Восстановление электролитного баланса</li>
                  <li>Профилактика осложнений (отек мозга, остановка сердца)</li>
                  <li>Купирование абстинентного синдрома</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Запой любой продолжительности</li>
                  <li>Острое алкогольное отравление</li>
                  <li>Подготовка к кодированию</li>
                  <li>Похмельный синдром с осложнениями</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">25,000₸</span>
              <a 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                href='/services/detox/alcohol'
                    >
                Перейти
              </a>
            </div>
          </div>
        </div>

        {/* Наркотическая */}
        <div id="drug" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={DrugDetoxImg} alt="Наркотическая" className="w-10 h-10" />
              Наркотическая детоксикация
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ускоренное выведение токсинов</li>
                  <li>Специфические антидоты при опиатной интоксикации</li>
                  <li>Стабилизация психоэмоционального состояния</li>
                  <li>Круглосуточный мониторинг в первые сутки</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Передозировка психоактивными веществами</li>
                  <li>Ломка (абстинентный синдром)</li>
                  <li>Комплексное лечение зависимости</li>
                  <li>Экстренное выведение из состояния интоксикации</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">25,000₸</span>
              <a 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg"
               href='/services/detox/drug'
                >
                Перейти
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Преимущества */}
      <div className="space-y-16 px-4 text-black">
        <div className="rounded-lg p-6 my-8 bg-my-green/30">
          <h2 className="text-2xl font-bold mb-6">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏱ Круглосуточный выезд</h3>
              <p>Медик приедет в течение часа в любое время суток</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🩺 Оборудование экспертного класса</h3>
              <p>Портативные ЭКГ, пульсоксиметры, экспресс-тесты</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🔒 Полная анонимность</h3>
              <p>Никакой постановки на учет и передач данных</p>
            </div>
          </div>
        </div>
      </div>

      {/* Таблица сравнения */}
      <div className="space-y-16 px-4 overflow-x-auto">
        <div className="text-black rounded-lg p-2 my-8">
          <h2 className="text-2xl font-bold mb-6">Сравнение методов детоксикации</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Параметр</th>
                <th className="p-3">Алкогольная</th>
                <th className="p-3">Наркотическая</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-semibold">Средняя продолжительность</td>
                <td className="p-3">2-4 часа</td>
                <td className="p-3">4-8 часов</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-semibold">Основной метод</td>
                <td className="p-3">Инфузионная терапия</td>
                <td className="p-3">УБОД (при опиатах)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Критический срок оказания</td>
                <td className="p-3">До 72 часов после последнего приема</td>
                <td className="p-3">До 12-24 часов</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Review/> 
      <FAQ faqItems={faq}/>
      <Certification/>
      <Footer/>
    </main>
  );
}