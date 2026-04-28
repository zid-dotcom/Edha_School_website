import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        {/* LEFT */}
        <p className="text-neutral-600 text-center md:text-left font-medium">
          © {new Date().getFullYear()} EDHAA Public School
        </p>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-neutral-500 font-medium">
          <NavLink to="/" className="hover:text-primary-600 transition-colors">Home</NavLink>
          <NavLink to="/AboutUs" className="hover:text-primary-600 transition-colors">About</NavLink>
          <NavLink to="/Academics" className="hover:text-primary-600 transition-colors">Academics</NavLink>
          <NavLink to="/Contact" className="hover:text-primary-600 transition-colors">Contact</NavLink>
        </div>

        {/* RIGHT */}
        <p className="text-neutral-500 text-center md:text-right font-medium">
          Whitefield, Bengaluru
        </p>

      </div>

    </footer>
  );
}