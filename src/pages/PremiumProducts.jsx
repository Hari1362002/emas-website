// src/pages/PremiumProducts.jsx

import {
  PremiumCard,
  PremiumHeading,
  PremiumSectionContainer
} from "../components/ProjectCard";

const PremiumProducts = () => {
  return (
    <div
      className="bg-white w-full pt-12 pb-4 m-0"
      data-aos="fade-up"
    >
      {/* HEADING */}
      <PremiumHeading />

      {/* FIRST ROW --- TWO CARDS */}
      <PremiumSectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <PremiumCard
            title="Quality Standard"
            text="Our commitment to quality is unwavering. Each product undergoes rigorous testing and adheres to the highest industry standards, ensuring purity, potency, and safety. We source only the finest ingredients, meticulously selected for their quality and efficacy, to deliver products you can trust for your well-being."
            bg="bg-[#DDD3BD]"
            textColor="text-black"
          />

          <PremiumCard
            title="Product Uniqueness"
            text="Discover unparalleled innovation and efficacy with our unique products crafted to complement your healthy lifestyle. From cutting-edge formulations to exclusive ingredients sourced from around the globe, each product is designed to offer you a truly exceptional experience, setting us apart in the realm of wellness."
            bg="bg-[#3F4A3C]"
            textColor="text-white"
          />

        </div>
      </PremiumSectionContainer>

      {/* SECOND ROW --- FULL WIDTH CARD */}
      <PremiumSectionContainer>
        <div className="mt-10 mb-0">
          <PremiumCard
            title="Production Management"
            text="At the heart of our operations lies a seamless production management system dedicated to precision and excellence. From sourcing raw materials to manufacturing and packaging, every step is meticulously monitored to ensure consistency, quality, and sustainability. With state-of-the-art facilities and stringent protocols, we guarantee products of the highest caliber, produced with utmost care and integrity."
            bg="bg-[#DDD3BD]"
            textColor="text-black"
          />
        </div>
      </PremiumSectionContainer>
    </div>
  );
};

export default PremiumProducts;
