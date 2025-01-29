import  Head  from 'preact-head';
import VeinImg from '../../../img/services/injections/vein.svg';
import MuscleImg from '../../../img/services/injections/muscle.svg';
import SkinImg from '../../../img/services/injections/skin.svg';
import Header from 'components/services/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import { navigate } from 'wouter-preact/use-browser-location';

const faq = [
  {
    question: 'Какие виды уколов можно сделать на дому?',
    answer:
      'Наши медсестры выполняют все виды инъекций на дому: внутривенные, внутримышечные и подкожные уколы. Мы работаем с различными препаратами, включая антибиотики, витамины, гормональные средства и обезболивающие. Все процедуры проводятся с соблюдением медицинских стандартов и стерильности.',
  },
  {
    question: 'Как вызвать медсестру для укола на дом ?',
    answer:
      'Чтобы вызвать медсестру для укола на дом, оставьте заявку на нашем сайте или позвоните по указанному номеру. Укажите тип укола, адрес и удобное время. Наш специалист приедет в течение 30-40 минут с необходимыми материалами и препаратами.',
  },
  {
    question: 'Сколько стоит сделать укол на дому ?',
    answer:
      'Стоимость укола на дому  начинается от 5000 тенге. Цена зависит от типа инъекции, количества процедур и необходимости использования дополнительных медицинских услуг. Мы предлагаем прозрачное ценообразование без скрытых комиссий.',
  },
  {
    question: 'Какие препараты используются для уколов на дому?',
    answer:
      'Мы используем только сертифицированные препараты, назначенные лечащим врачом. Перед процедурой медсестра проверяет срок годности и целостность упаковки. Если у вас есть собственные препараты, мы можем использовать их при условии наличия рецепта.',
  },
  {
    question: 'Безопасно ли делать уколы на дому?',
    answer:
      'Да, делать уколы на дому безопасно, если процедуру выполняет квалифицированная медсестра. Наши специалисты имеют медицинское образование и опыт работы в стационаре. Мы используем только одноразовые стерильные материалы и соблюдаем все правила асептики.',
  },
  {
    question: 'Можно ли заказать курс уколов на дому?',
    answer:
      'Да, мы предоставляем услугу курсового лечения на дому. Медсестра будет приезжать к вам в удобное время для выполнения инъекций. Курс может включать внутривенные капельницы, внутримышечные или подкожные уколы по назначению врача.',
  },
  {
    question: 'Можно ли сделать укол ребенку на дому?',
    answer:
      'Да, наши медсестры имеют опыт работы с детьми и могут сделать укол ребенку на дому. Мы используем специальные детские шприцы с тонкими иглами, чтобы минимизировать болевые ощущения. Процедура проводится под наблюдением родителей.',
  },
];


export default function Injections() {
  return (
    <main>
      <Head>
        <title>Укол на дому | Профессиональные медсестры</title>
        <meta 
          name="description" 
          content="Полный спектр инъекционных услуг на дому: внутривенные, внутримышечные и подкожные уколы. Квалифицированные медсестры с выездом на дом." 
        />
        <meta 
          name="keywords" 
          content="уколы на дому, внутривенные инъекции, внутримышечные уколы, подкожные инъекции, вызов медсестры" 
        />
      </Head>
      <Header/>

      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
              Все виды уколов на дому
            </h1>
            <p className="text-lg text-black mb-6">
              Профессиональное выполнение уколов любой сложности квалифицированными 
              медсестрами в комфортных домашних условиях
            </p>
          </div>

        </div>
      </section>

      {/* Навигация по типам инъекций */}
      <nav className="mb-12  text-black grid md:grid-cols-3 gap-4 px-4">
        <p className="text-xl text-black font-bold ">
             Виды уколов:
        </p>
        <a href="#intravenous" className="border-2 border-black p-4 rounded-lg flex items-center gap-3">
          <img src={VeinImg} alt="Внутривенные" className="w-8 h-8" />
          <span className="font-semibold">Внутривенный укол</span>
        </a>
        <a href="#intramuscular" className="border-2 border-black p-4 rounded-lg  flex items-center gap-3">
          <img src={MuscleImg} alt="Внутримышечные" className="w-8 h-8" />
          <span className="font-semibold">Внутримышечный укол</span>
        </a>
        <a href="#subcutaneous" className="border-2 border-black p-4 rounded-lg  flex items-center gap-3">
          <img src={SkinImg} alt="Подкожные" className="w-8 h-8" />
          <span className="font-semibold">Подкожный укол</span>
        </a>
      </nav>

      {/* Секция для каждого типа инъекций */}
      <section className="space-y-16 px-4 text-black">
        {/* Внутривенные */}
        <div id="intravenous" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <img src={VeinImg} alt="Внутривенные" className="w-10 h-10" />
              Внутривенный укол
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Введение препаратов непосредственно в вену</li>
                  <li>Быстрое действие лекарственных средств</li>
                  <li>Требует высокой квалификации медсестры</li>
                  <li>Используется для капельниц и быстрого введения препаратов</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Экстренная помощь при острых состояниях</li>
                  <li>Введение антибиотиков</li>
                  <li>Инфузионная терапия</li>
                  <li>Химиотерапия</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">5,000₸</span>
              <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                onClick={() => {navigate('/services/injection/intravenous')}}>
                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* Внутримышечные */}
        <div id="intramuscular" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <img src={MuscleImg} alt="Внутримышечные" className="w-10 h-10" />
              Внутримышечный укол
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Введение в крупные мышцы (ягодичная, бедренная)</li>
                  <li>Медленное всасывание препарата</li>
                  <li>Минимальный риск повреждения сосудов</li>
                  <li>Подходит для масляных растворов</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Введение витаминов группы B</li>
                  <li>Антибактериальная терапия</li>
                  <li>Гормональные инъекции</li>
                  <li>Вакцинация</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">5,000₸</span>
              <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                onClick={() => {navigate('/services/injection/intramuscularly')}}>
              
                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* Подкожные */}
        <div id="subcutaneous" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <img src={SkinImg} alt="Подкожные" className="w-10 h-10" />
              Подкожный укол
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Введение в подкожную жировую клетчатку</li>
                  <li>Медленное равномерное всасывание</li>
                  <li>Используются короткие тонкие иглы</li>
                  <li>Минимальная болезненность</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Инсулинотерапия</li>
                  <li>Введение гепарина</li>
                  <li>Некоторые виды вакцин</li>
                  <li>Косметологические препараты</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">5,000₸</span>
              <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                onClick={() => {navigate('/services/injection/subcutaneous')}}>

                Заказать
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 px-4 text-black">
        <div className="rounded-lg p-6 my-8 bg-my-green/30">
          <h2 className="text-2xl font-bold mb-6">Преимущества наших услуг</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">✅ Профессионализм</h3>
              <p>Медсестры с опытом работы в стационаре от 5 лет</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🩺 Безопасность</h3>
              <p>Стерильные одноразовые материалы и инструменты</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏱ Удобство</h3>
              <p>Выезд в любое время суток, включая выходные</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16 px-4 overflow-x-auto">
        <div className=" text-black  rounded-lg p-2 my-8 overflow-x-auto">
          <h2 className="text-2xl font-bold text-black mb-6">Сравнение видов инъекций</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Параметр</th>
                <th className="p-3">Внутривенные</th>
                <th className="p-3">Внутримышечные</th>
                <th className="p-3">Подкожные</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-semibold">Глубина введения</td>
                <td className="p-3">В вену</td>
                <td className="p-3">Мышечная ткань</td>
                <td className="p-3">Подкожная клетчатка</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-semibold">Скорость действия</td>
                <td className="p-3">Мгновенная</td>
                <td className="p-3">10-30 минут</td>
                <td className="p-3">30-60 минут</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Объем препарата</td>
                <td className="p-3">До 100 мл</td>
                <td className="p-3">До 5 мл</td>
                <td className="p-3">До 2 мл</td>
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