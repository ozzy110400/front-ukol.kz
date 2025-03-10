import DripImg from '/img/service/drip.svg';

export default function Drip() {
  return (
    <section className="mx-4 py-2">
      {/* Компонент collapse с правильной структурой */}
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-black rounded-lg">
        {/* Заголовок collapse */}
        <input type="checkbox" />

        <div className="collapse-title text-xl font-medium p-0">
          <div className="bg-transparent  border-black rounded-lg text-start p-4 mx-2">
            <div className="flex items-center gap-4">
              <img
                src={DripImg}
                alt="Капельница"
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                Капельницы
              </h2>
            </div>
          </div>
        </div>

        {/* Индивидуальные */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
            Постановку капельниц выполняют квалифицированные медсестры с медицинским образованием. Самостоятельное проведение процедур опасно и может привести к осложнениям: неправильному введению препарата, инфекциям или повреждению вен. Наши медсестры — действующие работники стационара с многолетним стажем. Мы предоставляем как разовые капельницы, так и курсовое лечение на дому.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-black mb-2">Виды капельниц:</h3>
            <ul className="space-y-2">
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Капельница</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7,000₸</span>
                    <a
                      className="bg-my-green rounded-lg px-2 py-1"
                      href='/services/drips/custom'

                    >
                      <span className="text-black font-semibold">Перейти</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
             
              </li>
              <li>
              <div className="flex flex-col justify-between items-start border-2 border-black rounded-lg px-4 py-2 ">

                  <span className="text-black font-semibold mb-2">Капельница от отравления</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">15,000₸</span>
                    <a
                    className="bg-my-green rounded-lg px-2 py-1"
                     href='/services/drips/poisoning'

                    >
                      <span className="text-black font-semibold">Перейти</span>
                    </a>
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