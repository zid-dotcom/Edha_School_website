import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* SCHOOL INFO */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">
            EDHAA PUBLIC SCHOOL
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering students with knowledge, values, and discipline to build a brighter future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
            <li><NavLink to="/AboutUs" className="hover:text-yellow-400">About Us</NavLink></li>
            <li><NavLink to="/Academics" className="hover:text-yellow-400">Academics</NavLink></li>
            <li><NavLink to="/Activities" className="hover:text-yellow-400">Activities</NavLink></li>
          </ul>
        </div>

        {/* OTHER LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/Facilities" className="hover:text-yellow-400">Facilities</NavLink></li>
            <li><NavLink to="/NewsAndEvenets" className="hover:text-yellow-400">News & Events</NavLink></li>
            <li><NavLink to="/Contact" className="hover:text-yellow-400">Contact</NavLink></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@edhaaschool.com</li>
            <li>📍 Kozhikode, Kerala</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

        <p>
          © {new Date().getFullYear()} EDHAA PUBLIC SCHOOL. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-yellow-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-yellow-400 cursor-pointer">Terms</span>
        </div>

      </div>

      {/* PREMIUM BOTTOM LINE */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

    </footer>
  );
}