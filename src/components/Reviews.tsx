import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import r1 from "../../img/reviews/r11.webp";
import r2 from "../../img/reviews/r22.webp";
import r3 from "../../img/reviews/r33.webp";
import r4 from "../../img/reviews/r44.webp";
import r5 from "../../img/reviews/r55.webp";
import r6 from "../../img/reviews/r66.webp";
import r7 from "../../img/reviews/r77.webp";
import r8 from "../../img/reviews/r88.webp";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState } from "preact/hooks";

const reviewImages = [
  {
    image: r1,
    text: "У нас случай был сложный, очень довольна результатом Ескендиру большое спасибо",
  },
  {
    image: r2,
    text: "Спасибо вам большое, медбрат приехал вовремя, все сделал аккуратно, благодарны ему и вам",
  },
  {
    image: r3,
    text: "Спасибо большое, очень понравился сервис. Помогли искать лекарство. Отозвались быстро, так как нам нужно было срочно.",
  },
  {
    image: r4,
    text: "Здравствуйте все хорошо, спасибо медсестра Айсулу супер легкая рука, очень ответственная, после укола, еще подождала минут 10, посмотреть реакцию детей спасибо ей большое",
  },
  {
    image: r5,
    text: "Да, мне очень понравился сервис. Маржан очень опытная мед сестра, проконсультировалась с ней по вопросам, очень помогла с ответами. Отношение очень доброжелательное и приехала вовремя, поэтому спасибо большое",
  },
  {
    image: r6,
    text: "Рада, что появился доступный сервис по вызову медсестры на дом. Требовалось сделать укол для младенца, многие медсестры по объявлению отказывались от такого маленького пациента. Выручил ваш сервис, медсестра Акмарал приехала утром и вечером, поставила уколы как надо. Цены приемлемые, успехов вам и процветания!",
  },
  {
    image: r7,
    text: "Добрый день! Нам все понравилось, Меруерт - очень квалифицированный и профессиональный специалист. Всё сделала четко, быстро, безболезненно и постоянно наблюдала за больным, как он себя чувствует во время капельницы и укола. Большое спасибо!",
  },
  {
    image: r8,
    text: "Спасибо обслуживание нормальное, сестра приехала даже раньше назначенного времени. Капельницу поставила хорошо.",
  },
];


export default function Review() {
  const [swiperHeight, setSwiperHeight] = useState("auto");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  // Function to update the height dynamically
  const updateHeight = (swiper: any) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const img = activeSlide.querySelector("img");
      if (img) {
        setSwiperHeight(`${img.clientHeight + 30}px`); // Adjust height with padding (30px for dots spacing)
      }
    }
  };

  return (
    <section id="reviews" className="py-4 px-4 bg-transparent">
      <div className="text-center">
        <p className="mt-10 mb-6 text-3xl font-bold uppercase text-black">
          Отзывы
        </p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.3} // Set to show a part of the next and previous slides
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={10} // Add space between slides
          modules={[EffectCoverflow, Pagination]}
          className="max-w-[500px]"
          onInit={(swiper) => updateHeight(swiper)} // Set height on init
          onSlideChange={(swiper) => updateHeight(swiper)} // Update height on slide change
        >
          {reviewImages.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="items-center justify-start bg-white p-2 rounded-xl shadow-lg mb-10">
                <img
                  src={review.image}
                  alt={`Отзыв ${index + 1}`}
                  loading="lazy"
                  className="rounded-lg"
                />
                <div className="mt-4 text-center border-2 p-2">
                  <p
                    className={`text-md font-semibold text-black rounded-lg overflow-hidden ${
                      expandedIndex === index ? "max-h-full" : "max-h-[100px]"
                    }`}
                  >
                    {review.text}
                  </p>
                  
                  {review.text.length > 90 && (
                    <button
                      className="mt-2 mb-5 px-2 bg-my-green rounded-md text-black text-sm"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedIndex === index ? "Скрыть" : "Раскрыть"}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
