import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Accessibility } from "lucide-react";
import edhaaIcon from "../assets/EDHAAICON.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white font-sans border-b-4 border-primary-600">
      
      {/* Top Accessibility Bar */}
      <div className="bg-neutral-100 border-b border-neutral-200 py-1 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-xs text-neutral-600">
            <div className="flex items-center gap-4">
                <a href="#main-content" className="hover:text-primary-600 focus:outline-none focus:ring-1">Skip to main content</a>
                <span className="text-neutral-300">|</span>
                <div className="flex items-center gap-2">
                    <Accessibility className="w-3 h-3" />
                    <a href="#" className="hover:text-primary-600">Screen Reader Access</a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <button className="px-1 border border-neutral-300 bg-white hover:bg-neutral-50 font-bold" title="Decrease Font">A-</button>
                    <button className="px-1 border border-neutral-300 bg-white hover:bg-neutral-50 font-bold" title="Normal Font">A</button>
                    <button className="px-1 border border-neutral-300 bg-white hover:bg-neutral-50 font-bold" title="Increase Font">A+</button>
                </div>
                <span className="text-neutral-300">|</span>
                <a href="#" className="hover:text-primary-600 font-bold">English</a>
                <span className="text-neutral-300">|</span>
                <a href="#" className="hover:text-primary-600">Sitemap</a>
            </div>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
            <img src={edhaaIcon} alt="EDHAA Public School Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            <div className="flex flex-col text-center md:text-left">
                    <h2 className="text-xl md:text-3xl font-bold text-primary-800 tracking-wide uppercase mt-1 leading-tight">EDHAA PUBLIC SCHOOL</h2>
                    <p className="text-primary-700 font-bold text-sm">Bengaluru, Karnataka</p>
                    <p className="text-neutral-500 text-xs mt-1">
                    Affiliated to the Council for the Indian School Certificate Examinations (ICSE)
                    </p>
            </div>
        </div>
      </div>

      {/* Primary Navigation (Blue Bar) */}
      <nav className="bg-primary-600 w-full relative z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex w-full">
                <NavLink to="/" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>Home</NavLink>
                <NavLink to="/AboutUs" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>About Us</NavLink>
                <NavLink to="/Academics" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>Academics</NavLink>
                <NavLink to="/Activities" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>Activities</NavLink>
                <NavLink to="/Facilities" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>Infrastructure</NavLink>
                <NavLink to="/NewsAndEvenets" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>News & Events</NavLink>
                <NavLink to="/Contact" className={({isActive}) => `px-4 py-3 text-white text-sm font-bold uppercase transition-colors border-r border-primary-500 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}>Contact</NavLink>
                <NavLink to="/adminlogin" className="px-4 py-3 text-white text-sm font-bold uppercase transition-colors hover:bg-primary-700 ml-auto flex items-center gap-2">Admin Login</NavLink>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden w-full flex justify-between items-center py-2">
                <span className="text-white font-bold uppercase px-2">Main Menu</span>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-2">
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="lg:hidden bg-primary-700 w-full flex flex-col border-t border-primary-500">
                <NavLink to="/" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">Home</NavLink>
                <NavLink to="/AboutUs" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">About Us</NavLink>
                <NavLink to="/Academics" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">Academics</NavLink>
                <NavLink to="/Activities" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">Activities</NavLink>
                <NavLink to="/Facilities" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">Infrastructure</NavLink>
                <NavLink to="/NewsAndEvenets" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">News & Events</NavLink>
                <NavLink to="/Contact" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase border-b border-primary-600 hover:bg-primary-800">Contact</NavLink>
                <NavLink to="/adminlogin" onClick={() => setMenuOpen(false)} className="px-6 py-3 text-white text-sm font-bold uppercase hover:bg-primary-800 bg-primary-800">Admin Login</NavLink>
            </div>
        )}
      </nav>

    </header>
  );
}