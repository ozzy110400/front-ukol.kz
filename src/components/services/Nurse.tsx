import { navigate } from 'wouter-preact/use-browser-location';
import NurseImg from '/img/service/nurse.svg';

export default function Nurse() {
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
                src={NurseImg}
                alt="Медсестра"
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                 Медсестра на время
              </h2>
            </div>
          </div>
        </div>

        {/* Контент collapse */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
          Наши квалифицированные медсестры с медицинским образованием и большим опытом работы обеспечат качественный уход за вашими близкими. Самостоятельный уход за тяжелобольными или пожилыми людьми требует специальных навыков и может привести к осложнениям: пролежням, неправильному приему лекарств или ухудшению состояния. Мы предлагаем помощь в выполнении медицинских процедур, гигиеническом уходе, кормлении и сопровождении. Работаем круглосуточно, с выездом на дом, обеспечивая комфорт и безопасность ваших близких. Доверьте заботу профессионалам!
          </p>

          {/* Детализация видов уколов с кнопками */}
          <div className="mb-4">
          <h3 className="text-lg font-semibold text-black mb-2">С чем могут помочь:</h3>
            <ul className="space-y-2">
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Уход за лежачим человеком</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">20000₸ за 8 часов</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={() => {navigate('/services/nurse/bed')}}

                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </div>
              </li> 
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Уход за пожилым человеком</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">20000₸ за 8 часов</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={() => {navigate('/services/nurse/old')}}

                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Дежурство на мероприятии</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">20000₸ за 8 часов</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={() => {navigate('/services/nurse/event')}}
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