import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import c1 from "../../img/certificates/c1.webp";
import c2 from "../../img/certificates/c2.webp";
import c3 from "../../img/certificates/c3.webp";
import c4 from "../../img/certificates/c4.webp";
import c5 from "../../img/certificates/c5.webp";
import c6 from "../../img/certificates/c6.webp";
import c7 from "../../img/certificates/c7.webp";
import c8 from "../../img/certificates/c8.webp";
import c9 from "../../img/certificates/c9.webp";
import c10 from "../../img/certificates/c10.webp";
import c11 from "../../img/certificates/c11.webp";
import c12 from "../../img/certificates/c12.webp";
import c13 from "../../img/certificates/c13.webp";
import c14 from "../../img/certificates/c14.webp";
import c15 from "../../img/certificates/c15.webp";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState } from "preact/hooks";

const certImgs = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
];


export default function Certification() {
  const [swiperHeight, setSwiperHeight] = useState("auto");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
    <section id="reviews" className="pb-4 px-4 bg-transparent">
      <div className="text-center">
        <p className="mt-10 mb-6 text-3xl font-bold uppercase text-black">
          Сертификаты специалистов
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
          {certImgs.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="items-center justify-start bg-white p-2 rounded-xl shadow-lg mb-10">
                <img
                  src={review}
                  alt={`Сертифика ${index + 1}`}
                  loading="lazy"
                  className="rounded-lg"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
