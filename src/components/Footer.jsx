import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        {/* LEFT */}
        <p className="text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} EDHAA Public School
        </p>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          <NavLink to="/" className="hover:text-blue-900">Home</NavLink>
          <NavLink to="/AboutUs" className="hover:text-blue-900">About</NavLink>
          <NavLink to="/Academics" className="hover:text-blue-900">Academics</NavLink>
          <NavLink to="/Contact" className="hover:text-blue-900">Contact</NavLink>
        </div>

        {/* RIGHT */}
        <p className="text-gray-500 text-center md:text-right">
          Kozhikode, Kerala
        </p>

      </div>

    </footer>
  );
}