import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import HerbCapsule from "../assets/healthproducts/herb-capsule.jpeg";
import HoneyHealthy from "../assets/healthproducts/honey-healthy.jpeg";
import HoneyVerties from "../assets/healthproducts/honey-verties.jpeg";
import WheyProtein from "../assets/healthproducts/whey-protein.jpeg";
import HealthBeavargs from "../assets/healthproducts/health-beavargs.jpeg";
import FoodHERBS from "../assets/healthproducts/food-herbs.jpeg";
import HearbleTab from "../assets/healthproducts/hearble-tab.jpeg";
import SkinCare from "../assets/healthproducts/skin-care.jpeg";

const categories = [
  { title: "HERBS EXTRACT CAPSULES", icon: HerbCapsule },
  { title: "HONEY HEALTH FOODS", icon: HoneyHealthy },
  { title: "HONEY VARIETIES", icon: HoneyVerties },
  { title: "WHEY PROTEIN SUPPLEMENTS", icon: WheyProtein },
  { title: "HEALTH BEVERAGES", icon: HealthBeavargs },
  { title: "FOOD HERBS POWDERS", icon: FoodHERBS },
 
  { title: "HERBAL TABLETS", icon: HearbleTab },
  { title: "SKIN & HAIR CARE HERBS", icon: SkinCare },
];

const HealthProducts = () => {
  return (
    <div className="bg-white w-full pt-10 pb-10 m-0">

      {/* EMAS Name */}
      <div className="flex justify-center mt-2 mb-1">
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-emas-green tracking-wide">
          EMAS
        </h1>
      </div>

      <div data-aos="fade-up">
  <SectionTitle title="Health Care Products" />
  ...
</div>


      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-0 mb-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {categories.map((cat, i) => (
          <CategoryCard key={i} icon={cat.icon} title={cat.title} />
        ))}
      </div>

    </div>
  );
};

export default HealthProducts;
