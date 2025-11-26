// src/components/Certification.jsx

import SectionTitle from "./SectionTitle";

// Import all certification images
import s1 from "../assets/certifications/s1.jpg";
import s2 from "../assets/certifications/s2.jpg";
import s3 from "../assets/certifications/s3.jpg";
import s4 from "../assets/certifications/s4.jpg";
import s5 from "../assets/certifications/s5.jpg";
import s6 from "../assets/certifications/s6.jpg";
import s7 from "../assets/certifications/s7.jpg";
import s8 from "../assets/certifications/s8.jpg";
import s9 from "../assets/certifications/s9.jpg";
import s10 from "../assets/certifications/s10.jpg";
import s11 from "../assets/certifications/s11.jpg";
import s12 from "../assets/certifications/s12.jpg";
import s13 from "../assets/certifications/s13.jpg";

const images = [
  s1, s2, s3, s4, s5, s6, s7,
  s8, s9, s10, s11, s12, s13
];

const Certification = () => {
  return (
    <div className="w-full flex flex-col items-center mt-16  max-w-7xl mx-auto px-4">

      {/* Section Heading */}
      <SectionTitle title="Our Certifications" />

      {/* MAIN BORDER BOX */}
      <div
        className="
          w-full 
          max-w-7xl 
          border-2
         border-emas-green
          rounded-2xl 
          p-6 
          shadow-sm 
          bg-white
          mt-6
        "
      >
        {/* GRID INSIDE BORDER BOX */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 place-items-center">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Certification ${i + 1}`}
              className="w-20 md:w-28 object-contain"
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Certification;
