import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors ${
      isActive
        ? "text-primary-900"
        : "text-neutral-500 hover:text-primary-600"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm border border-neutral-200 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={edhaaIcon}
                  alt="EDHAA Logo"
                  className="w-full h-full object-contain rounded-lg"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-base font-semibold text-neutral-900 tracking-tight leading-tight group-hover:text-primary-600 transition-colors">
                  EDHAA PUBLIC SCHOOL
                </span>
              </div>
            </NavLink>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, to }) => (
                <NavLink key={label} to={to} className={desktopLinkClass}>
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* ADMIN BUTTON */}
            <div className="hidden lg:flex items-center gap-4">
              <NavLink
                to="/adminlogin"
                className="flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Admin Login
                <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-lg overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `text-base font-medium py-2 ${
                    isActive ? "text-primary-600" : "text-neutral-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-neutral-100 mt-2">
              <NavLink
                to="/adminlogin"
                className="flex items-center justify-center gap-2 w-full bg-neutral-900 text-white py-3 rounded-xl font-medium"
              >
                Admin Login
                <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}