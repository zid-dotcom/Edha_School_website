import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import edhaaIcon from "../assets/EDHAAICON.jpeg";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 border-t-4 border-primary-600">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* About Column */}
        <div>
          <div className="flex items-center gap-3 mb-6 bg-white p-2 rounded inline-block">
            <img src={edhaaIcon} alt="EDHAA Logo" className="w-16 h-16 object-contain" />
            <div className="text-primary-800">
              <h3 className="font-extrabold leading-tight tracking-wider uppercase text-lg">EDHAA</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest">Public School</p>
            </div>
          </div>
          <p className="text-primary-200 text-sm leading-relaxed mb-6">
            Empowering students with knowledge, skills, and values. Affiliated to the Council for the Indian School Certificate Examinations (ICSE).
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-400 rounded-full"></span> Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: "About Us", path: "/AboutUs" },
              { name: "Academics", path: "/Academics" },
              { name: "Infrastructure", path: "/Facilities" },
              { name: "Activities", path: "/Activities" },
              { name: "News & Events", path: "/NewsAndEvenets" }
            ].map((link, idx) => (
              <li key={idx}>
                <NavLink to={link.path} className="text-primary-200 hover:text-white flex items-center gap-2 text-sm transition-colors group">
                  <ChevronRight className="w-4 h-4 text-primary-500 group-hover:text-white transition-colors" />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Essential Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-400 rounded-full"></span> Useful Information
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: "Admissions 2025-26", path: "/Contact" },
              { name: "Mandatory Disclosure", path: "/AboutUs" },
              { name: "Careers", path: "/Contact" },
              { name: "Alumni Network", path: "#" },
              { name: "Admin Login", path: "/adminlogin" }
            ].map((link, idx) => (
              <li key={idx}>
                <NavLink to={link.path} className="text-primary-200 hover:text-white flex items-center gap-2 text-sm transition-colors group">
                  <ChevronRight className="w-4 h-4 text-primary-500 group-hover:text-white transition-colors" />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-400 rounded-full"></span> Contact Us
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-primary-200">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <span>Edhaa Public School,<br />Whitefield, Bengaluru,<br />Karnataka - 560066</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <a href="mailto:info@edhaaschool.com" className="hover:text-white transition-colors">info@edhaaschool.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-300 text-xs font-medium">
          © {new Date().getFullYear()} EDHAA Public School. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-primary-300">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}