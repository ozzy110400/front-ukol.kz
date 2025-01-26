import Footer from 'components/main/Footer';
import Bandage from 'components/services/Bandage';
import Detox from 'components/services/Detox';
import Drip from 'components/services/Drip';
import Injection from 'components/services/Injection';
import Nurse from 'components/services/Nurse';
import Tube from 'components/services/Tube';
import DoctorImg from '../../img/doctor.webp';

import Head from 'preact-head';
import FAQ from 'components/main/FAQ';

export default function Services() {
  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг'; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };
  return (
    <div>
      <Head>
        <title>Все услуги | Укол.kz</title>
        <meta name="description" content="Полный список медицинских услуг на дому: уколы, капельницы, услуги медсестры, перевязки, уход за больными и многое другое." />
        <meta name="keywords" content="медицинские услуги на дому, уколы на дому, капельницы на дому, медсестра на дом, перевязки на дому, уход за больными" />
        <meta property="og:title" content="Все услуги | Укол.kz" />
        <meta property="og:description" content="Полный список медицинских услуг на дому: уколы, капельницы, услуги медсестры, перевязки, уход за больными и многое другое." />
        <meta property="og:url" content="https://ukol.kz/uslugi" />
        <link rel="canonical" href="https://ukol.kz/uslugi" />
      </Head>

      <div className="mx-auto px-4 py-4 border-b-2 flex justify-between">
        <button onClick={handleWhatsAppClick} className="bg-my-green text-black font-semibold py-2 px-4 rounded-lg hover:bg-my-green-dark transition-colors">
          связаться нами
        </button>
        <a href="/" className="bg-my-green text-black font-semibold py-2 px-4 rounded-lg hover:bg-my-green-dark transition-colors">
          на главную
        </a>
      </div>

      <section className="bg-transparent pt-4">
        <div className="container mx-auto px-4 text-center">
           <h1 className="font-bold text-4xl text-black mb-6">
              Наши услуги на дом
            </h1>
            <h2 className="text-lg font-semibold text-black">
              Ваше здоровье — наш приоритет! Мы предлагаем профессиональные медицинские услуги на дому: быстро, удобно и безопасно. Наши опытные специалисты готовы помочь вам в любое время.
            </h2>
           
           <div className="flex items-start mt-4 ">         
              <div className="chat chat-end">
                <div className=" 
                chat-bubble bg-transparent
                text-black text-lg font-semibold 
                border-2 border-solid border-black 
                rounded-bl-lg
                before:bg-black before:top-24">
                <p>
                  Любую услугу теперь можно заказть онлайн в несколько кликов.
                </p>
                <p className="underline decoration-my-green decoration-4 mb-2" >
                  Больше никаких звонков!
                </p>
                </div>
            </div>
            <img
              src={DoctorImg}
              alt="Профессиональная медсестра оказывает медицинские услуги на дому"
              loading="lazy"
              className="h-40 w-22 rounded-md mt-20"
            />
           </div>
        </div>
      </section>

      <Injection/>
      <Drip/>
      <Detox/>
      <Bandage/>
      <Nurse/>
      <Tube/>
      <FAQ/>
      <Footer/>
     
    </div>
  );
};

