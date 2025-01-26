import InjectionImg from '/img/service/injection.svg';

export default function Injection() {
  return (
    <section className="mx-auto px-2 pb-2">
      {/* Компонент collapse с правильной структурой */}
      <div tabIndex={0} className="collapse collapse-arrow border-2 border-black rounded-lg">
        {/* Заголовок collapse */}
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium p-0">
          <div className="bg-transparent  border-black rounded-lg text-start p-4 mx-2">
            <div className="flex items-center gap-4">
              <img
                src={InjectionImg}
                alt="Укол"
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                Уколы
              </h2>
            </div>
          </div>
        </div>

        {/* Контент collapse */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
            Постановку уколов выполняют квалифицированные медсестры с медицинским образованием. Самостоятельные инъекции опасны и могут привести к осложнениям: повреждению тканей, инфекциям или неправильному введению препарата. Наши медсестры — действующие работники стационара с многолетним стажем. Мы делаем как разовые уколы, так и курсовое лечение на дому.
          </p>

          {/* Детализация видов уколов с кнопками */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black mb-2">Виды уколов:</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/uslugi/ukoly/vnutrivenno"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Внутривенный укол</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">5000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault(); // Предотвращаем переход по ссылке
                        console.log("Заказано: Внутривенные уколы");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/ukoly/vnutrimyshechno"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Внутримышечный укол</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">5000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault(); // Предотвращаем переход по ссылке
                        console.log("Заказано: Внутримышечные уколы");
                      }}
                    >
                      <span className="text-black font-semibold">Заказать</span>
                    </button>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/uslugi/ukoly/podkozhnue"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Подкожный укол</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">5000₸</span>
                    <button
                      className="bg-my-green rounded-lg px-2 py-1"
                      onClick={(e) => {
                        e.preventDefault(); // Предотвращаем переход по ссылке
                        console.log("Заказано: Подкожные уколы");
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