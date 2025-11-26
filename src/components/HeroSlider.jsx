// src/components/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    "/assets/1.jpeg",
    "/assets/2.jpeg",
    "/assets/3.jpeg",
    "/assets/4.jpeg",
    "/assets/5.jpeg",
    "/assets/6.jpeg",
    "/assets/7.jpeg",
    "/assets/8.jpeg",
    "/assets/9.jpeg",
    "/assets/10.jpeg",
    "/assets/11.jpeg",
    "/assets/12.jpeg",
    "/assets/13.jpeg",
    "/assets/14.jpeg",
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden bg-white">

      {/* ==== CUSTOM ARROWS ==== */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* Show on hover */
        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          opacity: 1;
        }

        /* Arrow Icons */
        .swiper-button-next::after {
          content: '❯';
          font-size: 34px;
          font-weight: 600;
          color: #007a3d;
        }

        .swiper-button-prev::after {
          content: '❮';
          font-size: 34px;
          font-weight: 600;
          color: #007a3d;
        }

        /* Mobile — always visible */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 1;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 26px;
          }
        }
      `}</style>

      {/* ==== MAIN SWIPER ==== */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
        className="
          h-[260px]        /* very small phones */
          sm:h- [320px]     /* phones */
          md:h-[450px]     /* tablets */
          lg:h-[540px]     /* large desktop */
          xl:h-[620px]     /* big screen */
        "
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="
                w-full h-full 
                object-contain     /* Mobile — no cut */
                sm:object-cover    /* Tablet/Desktop — full fit */
                bg-white
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
