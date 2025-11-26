// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-14">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6">

        {/* EMAS LOGO */}
        <div className="flex justify-center mb-6">
          <h1 className="text-4xl font-serif font-bold text-emas-green">
            EMAS
          </h1>
        </div>

        {/* Description */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 hover:text-emas-green transition tracking-wide">

          Explore our selection of health care products known for their purity, exceptional quality,
          and affordability. Each item is carefully crafted to meet the highest standards,
          ensuring you receive effective solutions for your well-being. With our commitment
          to excellence, you can trust that our products will support your health goals
          without breaking the bank.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* COMPANY SECTION */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>

            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-emas-green">About Us</li>
              <li className="cursor-pointer hover:text-emas-green">Terms & Conditions</li>
              <li className="cursor-pointer hover:text-emas-green">Privacy Policy</li>
              <li className="cursor-pointer hover:text-emas-green">Rules and Regulations</li>
              <li className="cursor-pointer hover:text-emas-green">Code of Ethics</li>
              <li className="cursor-pointer hover:text-emas-green">Lofty Goal</li>
              <li className="cursor-pointer hover:text-emas-green">Contact Us</li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

            <div className="text-gray-700 leading-relaxed">
              <p className="font-bold">EMAS Natural Health Care</p>

              <p className="mt-2">
                <strong>Register Office:</strong><br />
                Old No.225 New No.218,<br />
                First Floor, Thambu Chetty Street,<br />
                Parry's, Chennai - 600001
              </p>

              <p className="mt-4">
                <strong>Admin Office & Factory:</strong><br />
                No: 639/1B & 641/1A, M.P. Thottam,<br />
                Natham Main Road, Koovanuthu,<br />
                Dindigul 624 304, Tamil Nadu
              </p>
            </div>
          </div>

          {/* SOCIAL MEDIA + OORI */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl mb-6">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/emasorganicnaturalayurveda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-80 transition"
              >
                <i className="fab fa-facebook"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/emasorganicnaturalayurveda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:opacity-80 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@MYEMAS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:opacity-80 transition"
              >
                <i className="fab fa-youtube"></i>
              </a>

            </div>

            {/* OORI LOGO */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-serif font-bold text-emas-green">
                OoRi
              </h1>
              <p className="text-gray-500 text-sm -mt-1">
                Celebrating Purity, Everyday
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 bg-[#2e3a31] text-center text-white py-4 text-sm">
        © Copyright 2025 EMAS. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
