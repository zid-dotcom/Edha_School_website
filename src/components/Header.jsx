import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Accessibility, Phone, Mail } from "lucide-react";
import edhaaIcon from "../assets/EDHAAICON.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white font-sans border-b-4 border-primary-600">
      
      {/* Top Accessibility & Contact Bar */}
      <div className="bg-primary-900 border-b border-primary-800 py-1.5 hidden md:block text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-primary-200">
                    <Phone className="w-3 h-3" />
                    <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                </div>
                <div className="flex items-center gap-2 text-primary-200">
                    <Mail className="w-3 h-3" />
                    <a href="mailto:info@edhaaschool.com" className="hover:text-white transition-colors">info@edhaaschool.com</a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Accessibility className="w-3.5 h-3.5 text-primary-300" />
                    <a href="#" className="hover:text-white transition-colors text-primary-200">Screen Reader</a>
                </div>
                <span className="text-primary-700">|</span>
                <div className="flex items-center gap-1.5">
                    <button className="px-1.5 py-0.5 rounded bg-primary-800 text-primary-200 hover:bg-primary-700 hover:text-white font-bold transition-colors" title="Decrease Font">A-</button>
                    <button className="px-1.5 py-0.5 rounded bg-primary-800 text-primary-200 hover:bg-primary-700 hover:text-white font-bold transition-colors" title="Normal Font">A</button>
                    <button className="px-1.5 py-0.5 rounded bg-primary-800 text-primary-200 hover:bg-primary-700 hover:text-white font-bold transition-colors" title="Increase Font">A+</button>
                </div>
            </div>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-5">
            <img src={edhaaIcon} alt="EDHAA Public School Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-sm" />
            <div className="flex flex-col text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary-800 tracking-wide uppercase leading-tight drop-shadow-sm">EDHAA PUBLIC SCHOOL</h2>
                    <p className="text-primary-600 font-bold text-sm md:text-base tracking-wider uppercase mt-1">Bengaluru, Karnataka</p>
                    <p className="text-neutral-500 text-xs md:text-sm mt-1 font-medium">
                    Affiliated to the Council for the Indian School Certificate Examinations (ICSE)
                    </p>
            </div>
        </div>
      </div>

      {/* Primary Navigation (Blue Bar) */}
      <nav className="bg-primary-600 w-full relative z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex w-full items-center">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/AboutUs" },
                  { name: "Academics", path: "/Academics" },
                  { name: "Activities", path: "/Activities" },
                  { name: "Gallery", path: "/Gallery" },
                  { name: "Infrastructure", path: "/Facilities" },
                  { name: "News & Events", path: "/NewsAndEvenets" },
                  { name: "Contact", path: "/Contact" }
                ].map((link, idx) => (
                  <NavLink 
                    key={idx} 
                    to={link.path} 
                    className={({isActive}) => `px-5 py-3.5 text-white text-[13px] font-bold uppercase tracking-wider transition-all border-b-2 hover:bg-primary-700 hover:border-primary-300 ${isActive ? 'bg-primary-700 border-primary-300' : 'border-transparent'}`}
                  >
                    {link.name}
                  </NavLink>
                ))}
                
                <NavLink to="/adminlogin" className="px-5 py-3 text-white text-[13px] font-bold uppercase transition-all bg-primary-800 hover:bg-primary-900 rounded-sm ml-auto flex items-center gap-2 shadow-sm my-1">
                  Admin Login
                </NavLink>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden w-full flex justify-between items-center py-3">
                <span className="text-white font-bold uppercase px-2 tracking-wider">Menu</span>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1 hover:bg-primary-700 rounded transition-colors">
                    {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="lg:hidden bg-primary-700 w-full flex flex-col shadow-inner">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/AboutUs" },
                  { name: "Academics", path: "/Academics" },
                  { name: "Activities", path: "/Activities" },
                  { name: "Gallery", path: "/Gallery" },
                  { name: "Infrastructure", path: "/Facilities" },
                  { name: "News & Events", path: "/NewsAndEvenets" },
                  { name: "Contact", path: "/Contact" }
                ].map((link, idx) => (
                  <NavLink 
                    key={idx} 
                    to={link.path} 
                    onClick={() => setMenuOpen(false)} 
                    className="px-6 py-3.5 text-white text-sm font-bold uppercase tracking-wider border-b border-primary-600 hover:bg-primary-800 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink to="/adminlogin" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-white text-sm font-bold uppercase tracking-wider bg-primary-900 hover:bg-primary-950 transition-colors">
                  Admin Login
                </NavLink>
            </div>
        )}
      </nav>

    </header>
  );
}