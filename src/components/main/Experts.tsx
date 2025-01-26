import Doctor1Img from '/img/experts/doctor.webp';
import Doctor2Img from '/img/experts/doctor2.webp'; 
import Doctor3Img from '/img/experts/doctor3.webp'; 


export default function Experts() {
  
  return (
    <section id="about" >
      <div className="text-center">
        <div className="flex items-center mb-10">
          <img
            src={Doctor1Img}
            alt="Профессиональная медсестра оказывает медицинские услуги на дому"
            loading="lazy"
            className="h-40 w-22 rounded-md"
          />
              <div className="chat chat-start">
                <div className="
                chat-bubble bg-transparent
                text-black text-lg font-semibold 
                border-2 border-solid border-black 
                rounded-bl-lg
                before:bg-black before:top-14">
                  <p className="underline decoration-my-green decoration-4 uppercase mb-2">профессионализм</p>
                  <h2>Наша команда — это <strong className="font-semibold">опытные врачи и медсёстры</strong> с сертификацией и многолетним опытом <strong className="font-semibold">оказания медицинских услуг на дому</strong>. Мы следим за новыми стандартами и гарантируем профессиональный подход.</h2>
                </div>

            </div>
           </div>
           <div className="flex items-center mb-10">         
              <div className="chat chat-end">
                <div className="
                chat-bubble bg-transparent
                text-black text-lg font-semibold 
                border-2 border-solid border-black 
                rounded-bl-lg
                before:bg-black before:top-14">
                <p className="underline decoration-my-green decoration-4 uppercase mb-2">комфорт</p>
                <h2>
                  Предлагаем <strong className="font-semibold">квалифицированную медицинскую помощь</strong> на дому, 
                  обеспечивая <strong className="font-semibold">максимальный комфорт</strong> для пациентов.
                </h2>
                </div>
            </div>
            <img
              src={Doctor2Img}
              alt="Профессиональная медсестра оказывает медицинские услуги на дому"
              loading="lazy"
              className="h-40 w-22 rounded-md"
            />
           </div>

           <div className="relative flex items-center ">
          <img
            src={Doctor3Img}
            alt="Профессиональная медсестра оказывает медицинские услуги на дому"
            loading="lazy"
            className="h-40 w-22 rounded-md"
          />
            <div className="relative">
              <div className="chat chat-start">
                <div className="
                chat-bubble bg-transparent
                text-black text-lg font-semibold 
                border-2 border-solid border-black 
                rounded-bl-lg
                before:bg-black before:top-14">
                  <p className="underline decoration-my-green decoration-4 uppercase mb-2">анонимность</p>
                  <h2>Мы обеспечиваем <strong className="font-semibold">полную конфиденциальность</strong> и <strong className="font-semibold">анонимность</strong> оказания медицинских услуг на дому, соблюдая строгие этические нормы и стандарты.</h2>
                </div>
              </div>

            </div>
           </div> 
        </div>
    </section>
  );
}
