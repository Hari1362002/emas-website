// src/components/OfferBanner.jsx

import React from "react";

const OfferBanner = ({ image }) => {
  return (
    <div className="w-full flex justify-center px-4">

      <img
        src={image}       // example: "/packages.jpeg"
        alt="Offer Banner"
        className="
          w-full
          max-w-7xl

          /* Responsive height */
          h-[200px]        /* mobile */
          sm:h-[260px]     /* small devices */
          md:h-[330px]     /* tablets */
          lg:h-[420px]     /* laptop */
          xl:h-[480px]     /* big screens */

          /* Fit behavior */
          object-contain    /* mobile: no crop */
          sm:object-cover   /* desktop/tablet: premium full cover */

          rounded-xl
          shadow-md
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
