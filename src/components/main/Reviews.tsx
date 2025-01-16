import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import r1 from "../../../img/reviews/r1.webp"
import r2 from "../../../img/reviews/r2.webp";
import r3 from "../../../img/reviews/r3.webp";
import r4 from "../../../img/reviews/r4.webp";
import r5 from "../../../img/reviews/r5.webp";
import r6 from "../../../img/reviews/r6.webp";
import r7 from "../../../img/reviews/r7.webp";
import r8 from "../../../img/reviews/r8.webp";

import { EffectCoverflow, Pagination } from "swiper/modules";

const reviewImages = [
  r1,
  r2,
  r3,
  r4,
  r5,
  r6,
  r7,
  r8,
];

export default function ReviewCarousel() {
  const [swiperHeight, setSwiperHeight] = useState("auto");

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
    <section id="reviews">

    <Box
      sx={{
        padding: "16px",
        backgroundColor: "transparent",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mt: 10,
          mb: 2,
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: '30px',
        }}
      >
        Отзывы
      </Typography>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.3} // Set to show a part of the next and previous slides
        loop={true}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: true,
            // }}
        pagination={{ clickable: true }}
        spaceBetween={10} // Add space between slides
        modules={[EffectCoverflow, Pagination]}
        style={{
          width: "100%",
          maxWidth: "600px",
         // height: swiperHeight, // Dynamically set height
        }}
        onInit={(swiper) => updateHeight(swiper)} // Set height on init
        onSlideChange={(swiper) => updateHeight(swiper)} // Update height on slide change
      >
        {reviewImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={img}
              alt={`Review ${index + 1}`}
              loading="lazy"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </section>
  );
}
