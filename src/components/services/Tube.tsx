import StomachImg from '/img/service/stomach.svg';

export default function Tube() {
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
                src={StomachImg}
                alt="Назогастральный зонд"
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                 Назогастральный зонд
              </h2>
            </div>
          </div>
        </div>

        {/* Контент collapse */}
        <div className="collapse-content">
          <p className="text-base font-semibold text-gray-600 mb-4">
          Процедуру выполняют квалифицированные медбратья и медсестры с медицинским образованием и многолетним опытом. Самостоятельная установка зонда опасна и может привести к осложнениям: повреждению слизистой, неправильному положению зонда или аспирации. Наши специалисты используют стерильные инструменты и современные методики, обеспечивая безопасность и безболезненность процедуры. Мы работаем анонимно, выезжаем на дом в удобное для вас время и помогаем в уходе за зондом. Доверьте здоровье близких профессионалам!
          </p>

          {/* Детализация видов уколов с кнопками */}
          <div className="mb-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/uslugi/ukoly/vnutrivenno"
                  className="flex flex-col justify-between items-start border-2 border-black hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span className="text-black font-semibold mb-2">Установка назогастрального зонда</span>
                  <div className="flex justify-between w-full">
                    <span className="text-black font-semibold py-1">30000₸</span>
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}