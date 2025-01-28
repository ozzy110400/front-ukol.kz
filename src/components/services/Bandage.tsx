import { navigate } from 'wouter-preact/use-browser-location';
import BandageImg from '/img/service/bandage.svg';

export default function Bandage() {
  return (
    <section className="mx-auto px-2 py-2">
      {/* Компонент collapse с правильной структурой */}
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-black rounded-lg">
        {/* Заголовок collapse */}
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium p-0">
          <div className="bg-transparent  border-black rounded-lg text-start p-4 mx-2">
            <div className="flex items-center gap-4">
              <img
                src={BandageImg}
                alt="Перевязка"
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                 Перевязка
              </h2>
            </div>
          </div>
        </div>

        {/* Контент collapse */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
          Наши квалифицированные медсестры с медицинским образованием и многолетним опытом выполнят перевязку любой сложности. Самостоятельная обработка ран и смена повязок могут привести к осложнениям: инфицированию, повреждению тканей или неправильному заживлению. Мы используем стерильные материалы, современные антисептики и соблюдаем все медицинские протоколы. Услуга доступна в любое удобное для вас время. Доверьте заботу о здоровье профессионалам!
          </p>

          {/* Детализация видов уколов с кнопками */}
          <div className="mb-4">
            <ul className="space-y-2">
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Перевязка</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">8000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={() => {navigate('/services/bandage/regular')}}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </div>
              </li>   
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}