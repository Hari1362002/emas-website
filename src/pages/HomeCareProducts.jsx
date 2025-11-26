import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";

// Import all local images correctly
import Oil from "../assets/homeproducs/natural-oil.jpeg";
import CowGhee from "../assets/homeproducs/cow-ghee.jpeg";
import PoojaOil from "../assets/homeproducs/pooja-oil.jpeg";
import MasalaPowder from "../assets/homeproducs/masala-powder.jpeg";
import DalGrains from "../assets/homeproducs/dal-grains.jpeg";
import TeaInfusions from "../assets/homeproducs/tea-infusions.jpeg";
import DryNuts from "../assets/homeproducs/dryfruties-nuts.jpeg";
import FlourSemolina from "../assets/homeproducs/flours-semolina.jpeg";
import Millets from "../assets/homeproducs/millets.jpeg";
import Jaggery from "../assets/homeproducs/organic-jaggeryfoods.jpeg";
import Pickles from "../assets/homeproducs/Hand-pickls.jpeg";
import IdliPodi from "../assets/homeproducs/herbls-idly.jpeg";
import Spices from "../assets/homeproducs/species.jpeg";

const homeCareCategories = [
  { title: "PREMIUM NATURAL EDIBLE OILS", icon: Oil },
  { title: "PREMIUM NATURAL PURE COW GHEE", icon: CowGhee },
  { title: "POOJA OIL – EUPPAL PANJADEEPAM", icon: PoojaOil },
  { title: "MASALA POWDERS", icon: MasalaPowder },
  { title: "DAL AND GRAINS", icon: DalGrains },
  { title: "TEA AND INFUSIONS", icon: TeaInfusions },
  { title: "DRY FRUITS & NUTS", icon: DryNuts },
  { title: "FLOURS AND SEMOLINA", icon: FlourSemolina },
  { title: "CEREALS AND MILLETS", icon: Millets },
  { title: "ORGANIC JAGGERY FOODS", icon: Jaggery },
  { title: "NATURAL HAND MADE PICKLES", icon: Pickles },
  { title: "HERBALS IDLI PODI", icon: IdliPodi },
  { title: "SPICES", icon: Spices },
];

const HomeCareProducts = () => {
  return (
    <div className="bg-white w-full pt-10 pb-10 max-w-7xl mx-auto px-4">

      {/* OORI Logo */}
      <div className="flex justify-center mt-6 mb-4">
        <h1 className="text-5xl font-serif font-bold text-emas-green tracking-wide">
          OoRi
        </h1>
        <span className="text-sm ml-1 mt-8 text-gray-500">™</span>
      </div>

      <p className="text-center text-emas-green/70 font-medium -mt-3 mb-8">
        Celebrating Purity, Everyday
      </p>

     <div data-aos="fade-up">
  <SectionTitle title="Home Care Products" />
</div>


      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {homeCareCategories.map((cat, i) => (
          <CategoryCard key={i} icon={cat.icon} title={cat.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeCareProducts;
