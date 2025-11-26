// src/components/Slider2.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// 💚 Import Slider-2 Images
import Img15 from "../assets/slider2/15.jpeg";
import Img16 from "../assets/slider2/16.jpeg";
import Img17 from "../assets/slider2/17.jpeg";
import Img18 from "../assets/slider2/18.jpeg";
import Img19 from "../assets/slider2/19.jpeg";
import Img20 from "../assets/slider2/20.jpeg";

// Slider images array
const sliderImages = [Img15, Img16, Img17, Img18, Img19, Img20];

const Slider2 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4 rounded-xl overflow-hidden shadow-md">

      {/* Animation wrapper */}
      <div data-aos="fade-up" className="rounded-xl overflow-hidden">

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500 }}
          loop={true}
          slidesPerView={1}
          className="slider2-swiper"
        >
          {sliderImages.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="
                  w-full 
                  h-[260px]        /* mobile */
                  sm: h- [320px]     /* small devices */
                  md:h-[450px]     /* tablets */
                  lg:h-[520px]     /* laptops */
                  object-contain   /* mobile fit */
                  sm:object-cover  /* big screen premium look */
                  bg-white
                "
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom EMAS Arrow Styling */}
        <style>{`
          .slider2-swiper .swiper-button-next,
          .slider2-swiper .swiper-button-prev {
            color: #007a3d !important;      /* EMAS Green */
            opacity: 0;
            transition: opacity 0.25s ease;
            width: auto;
            height: auto;
          }

          /* Show arrows on hover (desktop) */
          .slider2-swiper:hover .swiper-button-next,
          .slider2-swiper:hover .swiper-button-prev {
            opacity: 1;
          }

          /* Fancy minimal arrows */
          .slider2-swiper .swiper-button-next::after {
            content: '❯';
            font-size: 34px !important;
            font-weight: 600;
          }

          .slider2-swiper .swiper-button-prev::after {
            content: '❮';
            font-size: 34px !important;
            font-weight: 600;
          }

          /* Mobile — always visible */
          @media (max-width: 640px) {
            .slider2-swiper .swiper-button-next,
            .slider2-swiper .swiper-button-prev {
              opacity: 1;
            }
          }
        `}</style>

      </div>
    </div>
  );
};

export default Slider2;
