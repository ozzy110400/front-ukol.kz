import DoctorImg from '/img/doctor.webp';


export default function LastPhrase() {
  return (
    <div className="flex items-start mt-4 ">         
    <div className="chat chat-end">
      <div className=" 
      chat-bubble bg-transparent
      text-black text-lg font-semibold text-center
      border-2 border-solid border-black 
      rounded-bl-lg
      before:bg-black before:top-24">
      <p>
        Любую услугу теперь можно заказть онлайн в несколько кликов.
      </p>
      <p className="underline decoration-my-green decoration-4 mb-2" >
        Больше никаких звонков!
      </p>
      </div>
  </div>
  <img
    src={DoctorImg}
    alt="Профессиональная медсестра оказывает медицинские услуги на дому"
    loading="lazy"
    className="h-40 w-22 rounded-md mt-20"
  />
 </div>
  );
}
