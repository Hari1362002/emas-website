import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-emas-green sticky top-0 z-50 shadow-sm border-b border-emas-light/60">

      {/* NAVBAR MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="
            text-2xl md:text-3xl font-serif font-extrabold 
            tracking-wide select-none text-emas-green
          "
        >
          EMAS
        </Link>

        {/* MOBILE SEARCH BAR (visible on sm) */}
        <div className="flex md:hidden flex-1 justify-center mx-3">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="
                w-full bg-white text-emas-green placeholder-emas-green/70
                border border-emas-green/40 rounded-full 
                py-2 pl-4 pr-10 text-sm
                focus:outline-none focus:ring-2 focus:ring-emas-green/40
              "
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emas-green/80"
              fill="none" stroke="currentColor" strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </div>
        </div>

        {/* DESKTOP SEARCH BAR */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full bg-white text-emas-green placeholder-emas-green/70
                border border-emas-green/40 rounded-full 
                py-2 pl-4 pr-10
                focus:outline-none focus:ring-2 focus:ring-emas-green/40
              "
            />
            <svg
              className="
                absolute right-3 top-1/2 -translate-y-1/2 
                w-5 h-5 text-emas-green/80
              "
              fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT ICONS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-6">

          {/* Wishlist */}
          <Link to="/login" className="relative group">
            <button className="p-2 bg-emas-light rounded-full hover:bg-emas-light/80 transition">
              <svg
                className="w-6 h-6 text-emas-green" fill="none"
                stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 
                     4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </button>

            <span
              className="
                absolute -bottom-8 left-1/2 -translate-x-1/2 
                px-2 py- [2px] text-xs bg-white border border-emas-light
                rounded-md shadow text-emas-green font-semibold
                opacity-0 group-hover:opacity-100 transition
              "
            >
              Wishlist
            </span>
          </Link>

          {/* Account */}
          <Link to="/login" className="relative group">
            <button className="p-2 bg-emas-light rounded-full hover:bg-emas-light/80 transition">
              <svg
                className="w-6 h-6 text-emas-green" fill="none"
                stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M4 21c2-4 6-6 8-6s6 2 8 6" />
              </svg>
            </button>

            <span
              className="
                absolute -bottom-8 left-1/2 -translate-x-1/2 
                px-2 py- [2px] text-xs bg-white border border-emas-light
                rounded-md shadow text-emas-green font-semibold
                opacity-0 group-hover:opacity-100 transition
              "
            >
              Login
            </span>
          </Link>

          {/* Signup */}
          <Link to="/signup" className="relative group">
            <button className="p-2 bg-emas-light rounded-full hover:bg-emas-light/80 transition">
              <svg
                className="w-6 h-6 text-emas-green" fill="none"
                stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="7" r="3" />
                <path d="M3 20c1.5-3 4-4.5 6-4.5s4.5 1.5 6 4.5" />
                <path d="M17 6v4" />
                <path d="M15 8h4" />
              </svg>
            </button>

            <span
              className="
                absolute -bottom-8 left-1/2 -translate-x-1/2 
                px-2 py- [2px] text-xs bg-white border border-emas-light
                rounded-md shadow text-emas-green font-semibold
                opacity-0 group-hover:opacity-100 transition
              "
            >
              Signup
            </span>
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-emas-light text-emas-green ml-2"
        >
          <svg
            className="w-7 h-7"
            fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN (SHOW SEARCH ALSO HERE) */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 border-t border-emas-light">
          <Link to="/login" className="block text-emas-green font-medium">
  Wishlist
</Link>


          <Link to="/login" className="block text-emas-green font-medium">
            Login
          </Link>

          <Link to="/signup" className="block text-emas-green font-medium">
            Signup
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
