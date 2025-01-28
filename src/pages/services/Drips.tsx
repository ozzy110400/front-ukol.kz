import Head from 'preact-head';
import DripImg from '../../../img/services/drips/drip.svg';
import PaperImg from '../../../img/services/drips/paper.svg';
import HeadacheImg from '../../../img/services/drips/headache.svg';
import PoisonImg from '../../../img/services/drips/poison.svg';
import Header from 'components/services/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import { navigate } from 'wouter-preact/use-browser-location';

const faq = [
  {
    question: 'Какие виды капельниц можно поставить на дому?',
    answer:
      'Мы предоставляем все виды инфузионной терапии: детоксикационные, витаминные, восстановительные капельницы, специализированные коктейли. Выезжаем с готовыми растворами или используем ваши препараты по назначению врача.',
  },
  {
    question: 'Как быстро действует капельница?',
    answer:
      'Эффект наступает через 20-40 минут после начала процедуры. Полное действие развивается в течение 2-4 часов в зависимости от состава раствора.',
  },
  {
    question: 'Можно ли комбинировать разные коктейли?',
    answer:
      'Да, наши врачи подберут оптимальную комбинацию препаратов для достижения максимального эффекта с учетом вашего состояния.',
  },
];

export default function Drips() {
  return (
    <main>
      <Head>
        <title>Капельницы на дому | Инфузионная терапия с выездом</title>
        <meta 
          name="description" 
          content="Профессиональная постановка капельниц на дому: детокс, витаминные коктейли, лечение похмелья и абстиненции. Квалифицированные медсестры с сертифицированными препаратами." 
        />
        <meta 
          name="keywords" 
          content="капельница на дому алматы, инфузионная терапия, детокс капельница, витаминные капельницы, лечение похмелья, капельница от запоя, миланский коктейль, капельница золушка" 
        />
      </Head>
      <Header/>

      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
              Все виды капельниц на дому
            </h1>
            <p className="text-lg text-black mb-6">
              Профессиональная помощь при проведении капельниц любой сложности. Квалифицированные медсестры выполнят процедуру в комфортных домашних условиях с использованием современных и безопасных медицинских препаратов.
            </p>
          </div>
        </div>
      </section>

      {/* Навигация по типам капельниц */}
      <nav className="mb-12 text-black grid md:grid-cols-3 gap-4 px-4">
        <p className="text-xl text-black font-bold">Виды капельниц:</p>
        <a href="#custom" className="border-2 border-black p-4 rounded-lg flex items-center gap-3">
          <img src={DripImg} alt="Индивидуальные" className="w-8 h-8" />
          <span className="font-semibold">Индивидуальная капельница</span>
        </a>
        <a href="#hangover" className="border-2 border-black p-4 rounded-lg flex items-center gap-3">
          <img src={HeadacheImg} alt="Похмелье" className="w-8 h-8" />
          <span className="font-semibold">При похмелье</span>
        </a>
        <a href="#poisoning" className="border-2 border-black p-4 rounded-lg flex items-center gap-3">
          <img src={PoisonImg} alt="Отравление" className="w-8 h-8" />
          <span className="font-semibold">При отравлении</span>
        </a>
      </nav>

      {/* Секции для каждого типа капельниц */}
      <section className="space-y-16 px-4 text-black">
    
        <div id="custom" className="scroll-mt-16">
            <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <img src={DripImg} alt="Индивидуальные" className="w-10 h-10" />
                Индивидуальная капельница
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Использование предоставленного вами раствора и препаратов</li>
                    <li>Точный контроль состояния пациента во время процедуры</li>
                    <li>Профессиональное подключение капельницы с соблюдением стандартов</li>
                    <li>Гарантия полной стерильности и безопасности</li>
                </ul>
                </div>
                <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Восстановление после нагрузок или заболеваний</li>
                    <li>Реабилитация после оперативных вмешательств</li>
                    <li>Хронические состояния, требующие капельной терапии</li>
                    <li>Укрепление организма в рамках комплексного лечения</li>
                </ul>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
                <span className="text-xl font-bold">от 7000₸</span>
                <button 
                   className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                   onClick={() => {navigate('/services/drip/custom')}}>
                Заказать
                </button>
            </div>
            </div>
        </div>

        {/* Капельницы от интоксикации */}
        <div id="hangover" className="scroll-mt-16">
            <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <img src={HeadacheImg} alt="Похмелье" className="w-10 h-10" />
                Капельница от похмелья
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-4">Состав раствора:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Физиологический раствор 0.9%</li>
                    <li>Комплекс витаминов B1, B6, B12</li>
                    <li>Гепатопротекторы</li>
                    <li>Антиоксиданты</li>
                </ul>
                </div>
                <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Эффект:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Устранение обезвоживания</li>
                    <li>Снятие интоксикации</li>
                    <li>Восстановление электролитного баланса</li>
                    <li>Устранение головной боли</li>
                </ul>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
                <span className="text-xl font-bold">9500₸</span>
                <button 
                  className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                  onClick={() => {navigate('/services/drip/hangover')}}>
                Заказать
                </button>
            </div>
            </div>
        </div>

        <div id="poisoning" className="scroll-mt-16">
            <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <img src={PoisonImg} alt="Отравление" className="w-10 h-10" />
                Капельница от отравления
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-4">Состав терапии:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Сорбенты нового поколения</li>
                    <li>Регидратационные растворы</li>
                    <li>Ферментные комплексы</li>
                    <li>Спазмолитики</li>
                </ul>
                </div>
                <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Действие:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Быстрая детоксикация</li>
                    <li>Восстановление ЖКТ</li>
                    <li>Предупреждение обезвоживания</li>
                    <li>Снятие болевого синдрома</li>
                </ul>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
                <span className="text-xl font-bold">11000₸</span>
                <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                onClick={() => {navigate('/services/drip/poisoning')}}>
                Заказать
                </button>
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
              <h3 className="font-bold mb-2">🏥 Медицинский контроль</h3>
              <p>Постоянный мониторинг состояния во время процедуры</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">📋 Индивидуальный протокол</h3>
              <p>Подбор состава инфузии по вашим потребностям</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏱ Экономия времени</h3>
              <p>Полноценная терапия без посещения клиники</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16 px-4 overflow-x-auto">
  <div className="text-black rounded-lg p-2 my-8">
    <h2 className="text-2xl font-bold mb-6">Сравнение видов капельниц</h2>
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 text-left">Параметр</th>
          <th className="p-3">Индивидуальная капельница</th>
          <th className="p-3">Капельница от похмелья</th>
          <th className="p-3">Капельница от отравления</th>
        </tr>
      </thead>
      <tbody>
        {/* Основное назначение */}
        <tr>
          <td className="p-3 font-semibold">Основное назначение</td>
          <td className="p-3">Восстановление после нагрузок, заболеваний или операций</td>
          <td className="p-3">Снятие алкогольной интоксикации и похмельного синдрома</td>
          <td className="p-3">Лечение пищевых или химических отравлений</td>
        </tr>

        {/* Состав раствора */}
        <tr className="bg-gray-50">
          <td className="p-3 font-semibold">Состав раствора</td>
          <td className="p-3">Используются предоставленные вами препараты или индивидуальный подбор</td>
          <td className="p-3">Физиологический раствор, витамины B1, B6, B12, гепатопротекторы, антиоксиданты</td>
          <td className="p-3">Сорбенты, регидратационные растворы, ферментные комплексы, спазмолитики</td>
        </tr>

        {/* Продолжительность */}
        <tr>
          <td className="p-3 font-semibold">Продолжительность</td>
          <td className="p-3">1-3 часа</td>
          <td className="p-3">30-60 минут</td>
          <td className="p-3">1-2 часа</td>
        </tr>

        {/* Средняя стоимость */}
        <tr className="bg-gray-50">
          <td className="p-3 font-semibold">Средняя стоимость</td>
          <td className="p-3">от 7 000₸</td>
          <td className="p-3">9 500₸</td>
          <td className="p-3">11 000₸</td>
        </tr>

        {/* Основной эффект */}
        <tr>
          <td className="p-3 font-semibold">Основной эффект</td>
          <td className="p-3">Восстановление организма, укрепление иммунитета</td>
          <td className="p-3">Устранение обезвоживания, снятие интоксикации, восстановление электролитного баланса</td>
          <td className="p-3">Детоксикация, восстановление ЖКТ, предупреждение обезвоживания</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      <FAQ faqItems={faq}/>
      <Footer/>
    </main>
  );
}