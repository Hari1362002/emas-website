// src/components/OfferBanner.jsx

import React from "react";

const OfferBanner = ({ image }) => {
  return (
    <div className="w-full flex justify-center">

      <img
        src={image}
        alt="Offer Banner"
        className="
          w-full
          max-w-7xl

          /* Height responsive */
          h-[200px]        /* mobile */
          sm:h-[260px]     /* small devices */
          md:h-[330px]     /* tablets */
          lg:h-[420px]     /* laptop */
          xl:h-[480px]     /* big screens */

          /* Fit behavior */
          object-contain   /* mobile: perfect image fit */
          sm:object-cover  /* bigger screens: premium cover */

          rounded-xl
          shadow-md
          mx-auto
          transition
          duration-300
          hover:scale-[1.01]
          bg-white
        "
      />
    </div>
  );
};

export default OfferBanner;
