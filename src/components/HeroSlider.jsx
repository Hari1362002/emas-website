// src/components/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    "/src/assets/1.jpeg",
    "/src/assets/2.jpeg",
    "/src/assets/3.jpeg",
    "/src/assets/4.jpeg",
    "/src/assets/5.jpeg",
    "/src/assets/6.jpeg",
    "/src/assets/7.jpeg",
    "/src/assets/8.jpeg",
    "/src/assets/9.jpeg",
    "/src/assets/10.jpeg",
    "/src/assets/11.jpeg",
    "/src/assets/12.jpeg",
    "/src/assets/13.jpeg",
    "/src/assets/14.jpeg",
  ];

  return (
    <div className="w-full backdrop-blur-md bg-white/60 rounded-xl">

      {/* Custom Fancy Arrows */}
      <style>{`
        /* Hide arrows until hover */
        .swiper-button-next,
        .swiper-button-prev {
          opacity: 0;
          transition: opacity 0.25s ease;
          width: auto;
          height: auto;
        }

        /* Show arrows on hover */
        .swiper:hover .swiper-button-next,
        .swiper:hover .swiper-button-prev {
          opacity: 1;
        }

        /* Fancy EMAS Arrows */
        .swiper-button-next::after {
          content: '❯';
          font-size: 32px !important;
          font-weight: 600;
          color: #007a3d !important;
        }

        .swiper-button-prev::after {
          content: '❮';
          font-size: 32px !important;
          font-weight: 600;
          color: #007a3d !important;
        }

        /* Mobile: Always Visible */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 1;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px !important;
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="
          h-[280px]    /* Mobile */
          sm:h-[340px] /* Tablets */
          md:h-[480px] /* Medium screens */
          lg:h-[560px] /* Large screens */
          rounded-xl 
          overflow-hidden
        "
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="
                w-full 
                h-full 
                object-contain      /* Perfect fit for mobile */
                sm:object-cover     /* Full style on larger screens */
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
