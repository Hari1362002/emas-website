// src/pages/CertificationsAndSignup.jsx

import Certifications from "../components/Certification";
import SignupBanner from "../components/SignupBanner";

const CertificationsAndSignup = () => {
  return (
    <div className="bg-white min-h-screen pt-1 pb-16">

      {/* Certifications */}
      <Certifications />

      {/* Small gap only */}
      <div className="mt-6"></div>

      {/* Signup Section */}
      <SignupBanner />
      
    </div>
  );
};

export default CertificationsAndSignup;
