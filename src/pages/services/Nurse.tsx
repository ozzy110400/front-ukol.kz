import Head from 'preact-head';
import OldImg from '../../../img/services/nurse/old.svg';
import BedImg from '../../../img/services/nurse/bed.svg';
import BagImg from '../../../img/services/nurse/bag.svg';
import Header from 'components/services/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import { navigate } from 'wouter-preact/use-browser-location';

const faq = [
  {
    question: 'Как быстро может приехать медсестра?',
    answer:
      'Наши квалифицированные медсестры готовы выехать в течение 1-2 часов после заявки. Работаем круглосуточно 7 дней в неделю, включая праздничные дни.',
  },
  {
    question: 'Какие процедуры входят в уход за лежачим больным?',
    answer:
      'Полный гигиенический уход, профилактика пролежней, кормление, контроль приема лекарств, медицинские процедуры по назначению врача, сопровождение на обследования.',
  },
  {
    question: 'Можно ли оформить услуги на ночное время?',
    answer:
      'Да, мы предоставляем услуги как в дневное, так и в ночное время. Стоимость ночного дежурства (с 22:00 до 8:00) +20% к базовой ставке.',
  },
  {
    question: 'Какая квалификация у ваших медсестер?',
    answer:
      'Все специалисты имеют среднее медицинское образование, сертификаты по сестринскому делу и не менее 3 лет практического опыта. Регулярно проходят повышение квалификации.',
  },
  {
    question: 'Что входит в дежурство на мероприятиях?',
    answer:
      'Контроль состояния участников, первая медицинская помощь, измерение давления и пульса, помощь при хронических заболеваниях, сопровождение в туалет для маломобильных.',
  },
];

export default function NurseServices() {
  return (
    <main>
      <Head>
        <title>Услуги медицинской сестры на дому | Уход за лежачими и пожилыми</title>
        <meta 
          name="description" 
          content="Профессиональный медицинский уход на дому: квалифицированные медсестры для лежачих больных, пожилых людей, дежурство на мероприятиях. Круглосуточная помощь." 
        />
        <meta 
          name="keywords" 
          content="уход за лежачим больным, уход за пожилым на дому, медицинская сестра на время, сиделка с медицинским образованием, дежурная медсестра на мероприятия" 
        />
      </Head>
      <Header/>

      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
               Опытный медицинский уход от профильных медсестер
            </h1>
            <p className="text-lg text-black mb-6">
                Круглосуточные услуги по медицинскому уходу на дому. Опытные специалисты 
                с полным комплектом оборудования для профессиональной помощи.
            </p>
          </div>
        </div>
      </section>

      {/* Навигация по услугам */}
      <nav className="mb-12 text-black grid md:grid-cols-3 gap-4 px-4">
        <a href="#bedridden" className="border-2 border-black p-4 rounded-lg flex items-center gap-3 hover:border-blue-400 transition">
          <img src={BedImg} alt="Лежачие больные" className="w-10 h-10" />
          <span className="font-semibold">Уход за лежачим человеком</span>
        </a>
        <a href="#elderly" className="border-2 border-black p-4 rounded-lg flex items-center gap-3 hover:border-blue-400 transition">
          <img src={OldImg} alt="Пожилые люди" className="w-10 h-10" />
          <span className="font-semibold">Уход за пожилым человеком</span>
        </a>
        <a href="#events" className="border-2 border-black p-4 rounded-lg flex items-center gap-3 hover:border-blue-400 transition">
          <img src={BagImg} alt="Мероприятия" className="w-10 h-10" />
          <span className="font-semibold">Дежурство на мероприятиях</span>
        </a>
      </nav>

      {/* Секции услуг */}
      <section className="space-y-16 px-4 text-black">
        {/* Уход за лежачими */}
        <div id="bedridden" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={BedImg} alt="Лежачие больные" className="w-12 h-12" />
               Уход за лежачим человеком
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Основные обязанности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Профилактика и обработка пролежней</li>
                  <li>Гигиенические процедуры полного цикла</li>
                  <li>Контроль жизненных показателей</li>
                  <li>Введение лекарств и инъекций</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Включено в стоимость:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Смена постельного белья</li>
                  <li>Использование противопролежневых средств</li>
                  <li>3-разовое кормление</li>
                  <li>Ежедневный медосмотр</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <div>
                <span className="text-xl font-bold block">20 000₸ / 8 часов</span>
                <small className="text-gray-600">+500₸/час при превышении времени</small>
              </div>
              <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg "
                onClick={() => {navigate('/services/nurse/bed')}}>
                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* Уход за пожилыми */}
        <div id="elderly" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={OldImg} alt="Пожилые люди" className="w-12 h-12" />
              Уход за пожилым человеком
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Основные обязанности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сопровождение на прогулках</li>
                  <li>Помощь в бытовых вопросах</li>
                  <li>Контроль приема лекарств</li>
                  <li>Психологическая поддержка</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Дополнительные услуги:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сопровождение в поликлинику</li>
                  <li>Выполнение медицинских назначений</li>
                  <li>Организация досуга</li>
                  <li>Ночное дежурство</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <div>
                <span className="text-xl font-bold block">20 000₸ / 8 часов</span>
                <small className="text-gray-600">Минимальный заказ 4 часа</small>
              </div>
              <button 
                className="bg-my-green  text-black font-semibold px-6 py-2 rounded-lg "
                onClick={() => {navigate('/services/nurse/old')}}>

                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* Дежурство на мероприятиях */}
        <div id="events" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={BagImg} alt="Мероприятия" className="w-12 h-12" />
              Дежурство на мероприятиях
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Обязанности медсестры:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Экстренная медицинская помощь</li>
                  <li>Контроль состояния участников</li>
                  <li>Обработка ран и травм</li>
                  <li>Транспортировка при необходимости</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Для каких мероприятий:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Корпоративные события</li>
                  <li>Спортивные соревнования</li>
                  <li>Свадьбы и массовые гуляния</li>
                  <li>Детские праздники</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <div>
                <span className="text-xl font-bold block">20 000₸ / 8 часов</span>
                <small className="text-gray-600">+2 медсестры за 35 000₸</small>
              </div>
              <button 
                className="bg-my-green  text-black font-semibold px-6 py-2 rounded-lg"
                onClick={() => {navigate('/services/nurse/event')}}>
                Заказать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <div className="space-y-16 px-4 text-black">
        <div className="rounded-lg p-6 my-8 bg-my-green/30">
          <h2 className="text-2xl font-bold mb-6">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🏥 Медицинская лицензия</h3>
              <p>Все услуги оказываются по официальному договору</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏰ 24/7 Доступность</h3>
              <p>Круглосуточная служба поддержки и выезд</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">📚 Профессиональное обучение</h3>
              <p>Ежегодные курсы повышения квалификации персонала</p>
            </div>
          </div>
        </div>
      </div>

      <FAQ faqItems={faq}/>
      <Footer/>
    </main>
  );
}