import Doctor1Img from '/img/experts/doctorNN1.webp';
import Doctor2Img from '/img/experts/doctor2N.webp'; 
import Doctor3Img from '/img/experts/doctor3N.webp'; 

export default function Experts() {
  return (
    <section id="about" aria-labelledby="experts-heading">
      <h2 id="experts-heading" className="sr-only">О наших специалистах</h2>
      
      <ul className="text-center space-y-8">
        {/* Профессионализм */}
        <li className="flex items-center mb-5">
          <figure className="flex items-center">
            <img
              src={Doctor1Img}
              alt="Врач в белом халате с табличкой пациента"
              loading="lazy"
              className="h-28 w-12 rounded-md"
              aria-hidden="true"
            />
            <div 
              role="region"
              aria-labelledby="professionalism-heading"
              className="chat-bubble bg-white text-black text-lg font-semibold 
                border-2 border-solid border-black rounded-bl-lg mr-16 ml-4"
            >
              <h3 id="professionalism-heading" className="underline decoration-my-green decoration-4 uppercase mb-2">
                Профессионализм
              </h3>
              <p>
                Наша команда — это <strong>опытные врачи и медсёстры</strong> с сертификацией и многолетним опытом 
                <strong> оказания медицинских услуг на дому</strong>
              </p>
            </div>
          </figure>
        </li>

        {/* Комфорт */}
        <li className="flex items-center mb-5">
          <figure className="flex items-center flex-row-reverse">
            <img
                src={Doctor2Img}
                alt="Медсестра делает укол пациенту"
                loading="lazy"
                className="h-24 w-12 rounded-md"
                aria-hidden="true"
              />
            <div 
              role="region"
              aria-labelledby="comfort-heading"
              className="chat-bubble bg-white text-black text-lg font-semibold 
                border-2 border-solid border-black rounded-bl-lg ml-16 mr-4"
            >
              <h3 id="comfort-heading" className="underline decoration-my-green decoration-4 uppercase mb-2">
                Комфорт
              </h3>
              <p>
                Предлагаем <strong> квалифицированную медицинскую помощь</strong> на дому, 
                обеспечивая <strong> максимальный комфорт</strong> для пациентов.
              </p>
            </div>
          </figure>
        </li>

        {/* Анонимность */}
        <li className="relative flex items-center">
          <figure className="flex items-center">
            <img
              src={Doctor3Img}
              alt="Врач заполняет медицинскую карту"
              loading="lazy"
              className="h-20 w-12 rounded-md"
              aria-hidden="true"
            />
            <div 
              role="region"
              aria-labelledby="anonymity-heading"
              className="chat-bubble bg-white text-black text-lg font-semibold 
                border-2 border-solid border-black rounded-bl-lg mr-16 ml-4"
            >
              <h3 id="anonymity-heading" className="underline decoration-my-green decoration-4 uppercase mb-2">
                Анонимность
              </h3>
              <p>
                Мы обеспечиваем <strong>полную конфиденциальность</strong> и 
                <strong> анонимность</strong> оказания медицинских услуг на дому, 
                соблюдая строгие этические нормы и стандарты.
              </p>
            </div>
          </figure>
        </li>
      </ul>
    </section>
  );
}