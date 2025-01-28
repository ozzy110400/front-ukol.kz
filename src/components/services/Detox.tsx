import { navigate } from 'wouter-preact/use-browser-location';
import PillsImg from '/img/service/pills.svg';

export default function Detox() {
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
                src={PillsImg}
                alt="Детоксикации"
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                 Детоксикации
              </h2>
            </div>
          </div>
        </div>

        {/* Контент collapse */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
            Услугу оказывают опытные медики-наркологи с медицинским образованием и многолетним стажем. Самостоятельное выведение токсинов опасно и может привести к осложнениям: нарушениям работы сердца, печени, почек или обострению хронических заболеваний. Наши специалисты используют современные препараты и проверенные методики, обеспечивая безопасность и эффективность процедуры. Мы работаем анонимно, срочно выезжаем на дом и помогаем вернуть здоровье в комфортных условиях.
          </p>

          {/* Детализация видов уколов с кнопками */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black mb-2">Виды детоксикации:</h3>
            <ul className="space-y-2">
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Алкогольная детоксикация</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">30000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={() => {navigate('/services/detox/alcohol')}}

                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Наркотическая детоксикация</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">30000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={() => {navigate('/services/detox/drug')}}
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