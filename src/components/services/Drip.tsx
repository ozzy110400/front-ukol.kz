import DripImg from '/img/service/drip.svg';

export default function Drip() {
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

        {/* Контент collapse */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
            Постановку капельниц выполняют квалифицированные медсестры с медицинским образованием. Самостоятельное проведение процедур опасно и может привести к осложнениям: неправильному введению препарата, инфекциям или повреждению вен. Наши медсестры — действующие работники стационара с многолетним стажем. Мы предоставляем как разовые капельницы, так и курсовое лечение на дому.
          </p>

          {/* Капельницы от интоксикации */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-black mb-2">Капельницы от интоксикации:</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/uslugi/kapelnitsy/ot-pohmelya"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Капельница от похмелья</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Капельница от похмелья");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/kapelnitsy/ot-zapoya"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Капельница от запоя</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Капельница от запоя");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/kapelnitsy/ot-otravleniya"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Капельница от отравления</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Капельница от отравления");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Витаминные капельницы */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-black mb-2">Витаминные капельницы:</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/uslugi/kapelnitsy/milanskii-kokteyl"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Миланский коктейль</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Миланский коктейль");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/kapelnitsy/kokteyl-mayersa"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Коктейль майерса</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Коктейль майерса");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/kapelnitsy/cinderella"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Золушка</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Золушка");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/kapelnitsy/vitaminnyi-kokteyl"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Витаминный коктейль</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Витаминный коктейль");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Другие капельницы */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-black mb-2">Другие:</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/uslugi/kapelnitsy/po-naznacheniyu"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Капельница по назначению</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Капельница по назначению");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/kapelnitsy/s-vashim-rastvorom"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Капельница с вашим раствором</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">7000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Заказано: Капельница с вашим раствором");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}