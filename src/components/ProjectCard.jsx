// src/components/ProjectCard.jsx

/* -----------------------------------
   PREMIUM CARD COMPONENT
------------------------------------ */
export const PremiumCard = ({ title, text, bg, textColor }) => {
  return (
    <div
      className={`
        relative 
        rounded-xl 
        p-10 
        shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        overflow-hidden
        ${bg}
        ${textColor}
      `}
    >
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      {/* Description */}
      <p className="leading-relaxed text-[16px]">
        {text}
      </p>

      {/* EMAS Styled Decorative Circle */}
      <div
        className="
          absolute 
          bottom-0 
          right-0 
          translate-x-1/4 
          translate-y-1/4
          w-[300px] 
          h-[300px] 
          bg-[#2E3A31]/40
          rounded-full
        "
      ></div>
    </div>
  );
};


/* -----------------------------------
   PREMIUM HEADING COMPONENT
------------------------------------ */
export const PremiumHeading = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mt-10 mb-16">

      {/* Small Label */}
      <p className="text-emas-green font-semibold mb-3 tracking-wide">
        Premium Products
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
        Elevate your lifestyle with <br />
        premium products tailored <br />
        for your health.
      </h1>

    </div>
  );
};


/* -----------------------------------
   SECTION CONTAINER COMPONENT
------------------------------------ */
export const PremiumSectionContainer = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {children}
    </div>
  );
};
