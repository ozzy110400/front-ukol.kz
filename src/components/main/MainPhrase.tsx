import earsBigImd from '/img/main/ears-big.webp'; 
import earsSmallImg from '/img/main/ears-small.webp'; 
import injectionImg from '/img/main/injection.webp';
import pillsImg from '/img/main/tablets.webp';
import heartImg from '/img/main/heart.svg';
import Carousel from 'react-material-ui-carousel'
import { navigate } from 'wouter-preact/use-browser-location';

interface MainPhraseProps {}

const MainPhrase = (props: MainPhraseProps) => {
  const items = [
    {
        name: "Удобство",
        description: "Заказывайте онлайн в 3 клика",
    },
    {
        name: "Скорость", 
        description: "Приезжаем в течении 1 часа",
    },
    {
      name: "Доступность", 
      description: "Мы работаем 24/7 без выходных",
    }
  ];

  return (
    <div className="py-6 m-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="text-center md:mr-12">
            <h1 className="font-bold mb-8 text-4xl text-black">
              Лучшие медицинские услуги на дому
            </h1>
            <div className="flex justify-between mb-8">
              <img src={earsSmallImg} alt="платные медицинские услуги на дому" className="w-auto h-28 md:hidden mt-5 ml-2" />
              <img src={pillsImg} alt="платные медицинские услуги на дому" className="w-auto h-28 md:hidden mb-1" />
              <img src={injectionImg} alt="платные медицинские услуги на дому" className="w-auto h-28 md:hidden mt-3 mr-2" />
            </div>
            <div className="flex justify-center mb-8">
              <img src={heartImg} alt="Second Image" className="w-36 h-auto mx-2 md:hidden" />
            </div>

            <Carousel interval={2000}>
            {
                items.map( (item, i) =>
              <div className="mb-5">
                <p className="font-bold text-2xl text-black">{item.name}</p>
                <p className="font-bold  text-black">{item.description}</p>

               </div> )
            }
             </Carousel>

            <div className="flex justify-center">
              <div className="mt-8 w-full cursor-pointer">
                <button
                  onClick={() => navigate('/services')} 
                  className="bg-my-green w-full font-bold rounded-xl px-4 py-2 text-2xl text-black uppercase"
                >
                  услуги и цены
                </button>
              </div>
            </div>
          </div>
          <img
            src={earsBigImd}
            alt="Профессиональная медсестра оказывает медицинские услуги на дому"
            loading="lazy"
            className="max-w-full h-[550px] object-cover rounded-2xl md:block hidden ml-12"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPhrase;
