


import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import edhaaIcon from "../assets/EDHAAICON.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Academics", to: "/Academics" },
  { label: "Activities", to: "/Activities" },
  { label: "Facilities", to: "/Facilities" },
  { label: "News & Events", to: "/NewsAndEvenets" },
  { label: "About Us", to: "/AboutUs" },
  { label: "Contact", to: "/Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation(); 

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // 🔥 SHADOW ON SCROLL
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `relative px-2 py-1 text-[14px] font-medium transition ${
      isActive
        ? "text-blue-900"
        : "text-gray-500 hover:text-blue-900"
    }`;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">

        {/* HEADER */}
        <div
          className={`bg-white transition-all duration-300 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-[72px]">

              {/* LOGO */}
              <NavLink to="/" className="flex items-center gap-4 group">

                <div className="w-[56px] h-[56px] rounded-full border-2 border-yellow-500 bg-white flex items-center justify-center p-1 shadow-md hover:scale-105 transition">

                  <img
                    src={edhaaIcon}
                    alt="EDHAA Logo"
                    className="w-[85%] h-[85%] object-contain"
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="text-[18px] font-semibold text-blue-900">
                    EDHAA PUBLIC SCHOOL
                  </span>
                  <span className="text-[10px] tracking-widest text-gray-400 uppercase">
                    Excellence · Integrity · Growth
                  </span>
                </div>

              </NavLink>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map(({ label, to }) => (
                  <NavLink key={label} to={to} className={desktopLinkClass}>
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* ADMIN BUTTON */}
              <div className="hidden lg:block">
                <NavLink
                  to="/adminlogin"
                  className="bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition shadow"
                >
                  Admin Login
                </NavLink>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1"
              >
                <span className="w-6 h-[2px] bg-black"></span>
                <span className="w-5 h-[2px] bg-black"></span>
                <span className="w-6 h-[2px] bg-black"></span>
              </button>

            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md border-t">
            <div className="flex flex-col p-4 gap-2">

              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  className="py-2 px-3 rounded hover:bg-gray-100 text-gray-700"
                >
                  {label}
                </NavLink>
              ))}

              <NavLink
                to="/adminlogin"
                className="mt-3 bg-blue-900 text-white text-center py-2 rounded"
              >
                Admin Login
              </NavLink>

            </div>
          </div>
        )}
      </div>

      {/* SPACER */}
      <div className="h-[80px]" />
    </>
  );
}