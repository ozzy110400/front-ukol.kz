import earsBigImd from '/img/main/ears-big.webp';
import earsSmallImg from '/img/main/ears-small.webp';
import injectionImg from '/img/main/injection.webp';
import pillsImg from '/img/main/tablets.webp';

export default function MainPhrase() {
  return (
    <section 
      className="py-6 m-4"
      itemScope
      itemType="https://schema.org/MedicalClinic"
    >
      <meta itemProp="medicalSpecialty" content="Домашняя медицинская помощь" />
      <div className="max-w-screen-lg mx-auto">
        <article className="flex flex-col md:flex-row items-center">
          <div className="text-center md:mr-12">
            <header>
              <h1 
                className="font-bold mb-8 text-4xl text-black"
                itemProp="name"
              >
                Профессиональные медицинские услуги на дому в Алматы
              </h1>
            </header>

            <div 
              role="group" 
              className="flex justify-between mb-8"
              itemProp="description"
            >
              <img 
                src={earsSmallImg} 
                alt="Медсестра с фонендоскопом для вызова на дом" 
                className="w-auto h-28 md:hidden mt-5 ml-2" 
                itemProp="image"
                loading="lazy"
              />
              <img 
                src={pillsImg} 
                alt="Лекарственные препараты для лечения на дому" 
                className="w-auto h-28 md:hidden mb-1" 
                itemProp="image"
                loading="lazy"
              />
              <img 
                src={injectionImg} 
                alt="Медицинские процедуры на дому в Алматы" 
                className="w-auto h-28 md:hidden mt-3 mr-2" 
                itemProp="image"
                loading="lazy"
              />
            </div>

            <ul 
              className="space-y-2 mb-4"
              itemProp="makesOffer"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <li 
                className="font-bold text-2xl text-black p-1"
                itemProp="description"
              >
                Заказ в 3 клика
              </li>
              <li 
                className="font-bold text-2xl text-black p-1"
                itemProp="availability"
              >
                Приезжаем в течение часа
              </li>
              <li 
                className="font-bold text-2xl text-black p-1"
                itemProp="openingHours"
                content="Mo-Su 00:00-23:59"
              >
                Работаем 24/7
              </li>
            </ul>
          </div>

          <nav 
            className="flex mt-8 w-full justify-center"
            aria-label="Основная навигация"
          >
            <a
              href="/services"
              className="bg-my-green w-full font-bold rounded-xl px-4 py-2 text-2xl text-black uppercase text-center"
              aria-label="Перейти к разделу услуг и цен"
              itemProp="url"
            >
              услуги и цены
            </a>
          </nav>

          <figure 
            className="max-w-full object-cover rounded-2xl md:block hidden ml-12"
            itemProp="image"
          >
            <img
              src={earsBigImd}
              alt="Профессиональная медсестра оказывает медицинские услуги на дому в Алматы"
              loading="eager"
              itemProp="image"
            />
            <figcaption className="sr-only" itemProp="caption">
              Медицинский работник с оборудованием для оказания услуг на дому
            </figcaption>
          </figure>
        </article>
      </div>
  
    </section>
  );
}