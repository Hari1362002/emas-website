// src/components/SignupBanner.jsx

const SignupBanner = () => {
  return (
    <div className="w-full bg-[#1F2937] py-14 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">Sign Up Now</h2>
          <p className="text-gray-300 leading-relaxed">
            Join our community and be the first to know about exclusive deals, promotions and exciting updates.
            Subscribe to our newsletter today.
          </p>
        </div>

        {/* Input Section */}
        <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 text-gray-700 outline-none"
          />
          <button className="bg-emas-green text-white px-6 font-semibold">
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignupBanner;
