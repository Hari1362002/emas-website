import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import HealthProducts from "./pages/HealthProducts";
import HomeCareProducts from "./pages/HomeCareProducts";
import OfferBanner from "./components/OfferBanner";
import PremiumProducts from "./pages/PremiumProducts";
import Slider2 from "./components/Slider2";
import Certification from "./components/Certification";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div data-aos="fade-up"></div>

      
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE SECTIONS */}
      <main className="pt-4 space-y-16">

        {/* 🔰 MAIN HERO SLIDER */}
        <HeroSlider />

        {/* 🟢 Health Products */}
        <HealthProducts />

        {/* 🏠 Home Care Products */}
        <HomeCareProducts />

        {/* ⭐ Offer Banner */}
        <OfferBanner image="/src/assets/packages.jpeg" />

        {/* 🌟 Premium Products */}
        <PremiumProducts />
        
         {/* 🔰 SECOND SLIDER (Slider2) */}
        <Slider2 />

        {/* 🏅 Certifications */}
        <Certification />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
