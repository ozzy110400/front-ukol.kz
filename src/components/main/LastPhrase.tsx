import quoteImg from '/img/footer/quote.webp';
import doctorImg from '/img/footer/doctor.webp';

export default function LastPhrase() {
  return (
      <div class="relative">    
        <img
          src={quoteImg}
          alt="Более 10,000 клиентов уже доверились нам и получили квалифицированную помощь"
          className="rounded-lg justify-end h-36 w-22 ml-12"
        />
        <img
          src={doctorImg}
          alt="Более 10,000 клиентов уже доверились нам и получили квалифицированную помощь"
          className="rounded-lg h-40 w-22 "
        />     
      </div>
  );
}
