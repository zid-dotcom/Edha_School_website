// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import edhaaIcon from "../assets/EDHAAICON.jpeg"

// const navLinks = [
//   { label: "Home",          to: "/" },
//   { label: "About Us",      to: "/AboutUs" },
//   { label: "Academics",     to: "/Academics" },
//   { label: "Activities",    to: "/Activities" },
//   { label: "Facilities",    to: "/Facilities" },
//   { label: "News & Events", to: "/NewsAndEvenets" },
//   { label: "Contact",       to: "/Contact" },
// ];

// const quickInfo = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
//       </svg>
//     ),
//     text: "+91 98765 43210",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
//       </svg>
//     ),
//     text: "info@EDHAAPUBLICSCHOOL",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
//         <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
//       </svg>
//     ),
//     text: "Mon – Fri: 8:00 AM – 4:00 PM",
//   },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const desktopLinkClass = ({ isActive }) =>
//     `nav-link relative px-1 py-1 text-[13.5px] font-medium tracking-wide transition-colors duration-250 ${
//       isActive ? "text-[#1a3c6e] nav-active" : "text-slate-500 hover:text-[#1a3c6e]"
//     }`;

//   const mobileLinkClass = ({ isActive }) =>
//     `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
//       isActive
//         ? "bg-blue-50 text-[#1a3c6e] border-l-[3px] border-[#1a3c6e] pl-[13px]"
//         : "text-slate-600 hover:bg-slate-50 hover:text-[#1a3c6e]"
//     }`;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap');

//         :root {
//           --navy: #1a3c6e;
//           --navy-light: #2a5298;
//           --gold: #c9a84c;
//           --gold-light: #e8c97a;
//           --surface: #ffffff;
//           --topbar: #0f2546;
//         }

//         .display-font { font-family: 'Cormorant Garamond', Georgia, serif; }
//         .ui-font      { font-family: 'Nunito Sans', sans-serif; }

//         /* ── Top info bar ── */
//         .topbar {
//           background: var(--topbar);
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//         }

//         /* ── Main header ── */
//         .main-header {
//           background: #ffffff;
//           border-bottom: 1px solid #e8edf5;
//           transition: box-shadow 0.35s ease, padding 0.35s ease;
//         }
//         .main-header.scrolled {
//           box-shadow: 0 4px 32px rgba(26,60,110,0.10);
//         }

//         /* ── Gold divider under header ── */
//         .gold-rule {
//           height: 2px;
//           background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 60%, transparent 100%);
//         }

//         /* ── Logo ── */
//         .logo-mark {
//           background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
//           box-shadow: 0 2px 16px rgba(26,60,110,0.18);
//         }
//         .logo-crest {
//           width: 52px; height: 52px;
//           border-radius: 50%;
//           border: 2.5px solid var(--gold);
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//         }
//         .logo-crest:hover {
//           transform: scale(1.04);
//           box-shadow: 0 0 0 4px rgba(201,168,76,0.18);
//         }

//         /* ── Nav links ── */
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: -2px; left: 0;
//           width: 0; height: 2px;
//           background: var(--gold);
//           border-radius: 2px;
//           transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
//         }
//         .nav-link:hover::after,
//         .nav-active::after { width: 100%; }

//         /* ── Admin button ── */
//         .admin-btn {
//           background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
//           border: 1px solid rgba(255,255,255,0.12);
//           box-shadow: 0 2px 10px rgba(26,60,110,0.22);
//           transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
//         }
//         .admin-btn:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(26,60,110,0.32);
//           background: linear-gradient(135deg, #0f2546 0%, var(--navy) 100%);
//         }
//         .admin-btn:active { transform: translateY(0); }

//         /* ── Mobile menu ── */
//         .mobile-panel {
//           animation: panelDown 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
//           box-shadow: 0 12px 40px rgba(26,60,110,0.12);
//           border-top: 1px solid #e8edf5;
//         }
//         @keyframes panelDown {
//           from { opacity: 0; transform: translateY(-6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* ── Staggered nav load ── */
//         .nav-item { opacity: 0; animation: fadeUp 0.4s forwards; }
//         .nav-item:nth-child(1) { animation-delay: 0.05s; }
//         .nav-item:nth-child(2) { animation-delay: 0.10s; }
//         .nav-item:nth-child(3) { animation-delay: 0.15s; }
//         .nav-item:nth-child(4) { animation-delay: 0.20s; }
//         .nav-item:nth-child(5) { animation-delay: 0.25s; }
//         .nav-item:nth-child(6) { animation-delay: 0.30s; }
//         .nav-item:nth-child(7) { animation-delay: 0.35s; }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* ── Hamburger ── */
//         .ham-bar {
//           display: block; height: 2px; border-radius: 2px;
//           background: var(--navy);
//           transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
//           transform-origin: center;
//         }
//       `}</style>

//       <div className="fixed top-0 left-0 right-0 z-50 ui-font">

//         {/* ══ TOP INFO BAR ══ */}
//         <div className="topbar hidden md:block">
//           <div className="max-w-7xl mx-auto px-6 lg:px-10">
//             <div className="flex items-center justify-between h-9">
//               {/* Left: quick contact */}
//               <div className="flex items-center gap-6">
//                 {quickInfo.map((item, i) => (
//                   <div key={i} className="flex items-center gap-1.5 text-slate-300 text-[11.5px] tracking-wide">
//                     <span className="text-[var(--gold)] opacity-80">{item.icon}</span>
//                     <span>{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//               {/* Right: social / tagline */}
//               <div className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-slate-400 font-medium">
//                 <span>Est. 1985</span>
//                 <span className="w-px h-3 bg-slate-600" />
//                 <span>Accredited Institution</span>
//                 <span className="w-px h-3 bg-slate-600" />
//                 {/* Social icons */}
//                 {[
//                   { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
//                   { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16 0c-2.5 0-4.5 2-4.5 4.5 0 .36.04.7.1 1.03C7.69 5.35 4.07 3.6 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.56.8 2.94 2 3.75A4.49 4.49 0 0 1 .96 6.4v.06c0 2.18 1.55 4 3.6 4.41a4.52 4.52 0 0 1-2.03.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 0 1 0 15.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0 0 22 4.24" },
//                 ].map((s, i) => (
//                   <a key={i} href="#" className="text-slate-500 hover:text-[var(--gold)] transition-colors duration-200">
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
//                       <path d={s.d} />
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ══ MAIN HEADER ══ */}
//         <div className={`main-header ${scrolled ? "scrolled" : ""}`}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//             <div className="flex items-center justify-between h-[70px]">

//               {/* ── LOGO ── */}
//               <NavLink to="/" className="flex items-center gap-4 flex-shrink-0 group">
//                 {/* Crest circle */}
//                 <div className="logo-crest logo-mark flex items-center justify-center flex-shrink-0 overflow-hidden">
//                   <img
//                     src={edhaaIcon}
//                     alt=""
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                       const fallback = document.createElement("span");
//                       fallback.textContent = "⚜";
//                       fallback.style.cssText = "font-size:1.4rem;color:#c9a84c";
//                       e.currentTarget.parentNode.appendChild(fallback);
//                     }}
//                   />
//                 </div>

//                 {/* Name block */}
//                 <div className="hidden sm:flex flex-col">
//                   <span className="display-font text-[var(--navy)] text-[1.3rem] leading-none tracking-wide font-semibold">
//                     EDHAA PUBLIC SCHOOL
//                   </span>
//                   {/* Gold rule */}
//                   <span className="mt-[5px] mb-[4px] h-px w-full" style={{background:"linear-gradient(90deg,#c9a84c,transparent)"}} />
//                   <span className="text-[10px] tracking-[0.22em] uppercase text-slate-400 font-semibold">
//                     Excellence · Integrity · Growth
//                   </span>
//                 </div>
//               </NavLink>

//               {/* ── DESKTOP NAV ── */}
//               <nav className="hidden lg:flex items-center gap-5">
//                 {navLinks.map(({ label, to }) => (
//                   <div key={label} className="nav-item">
//                     <NavLink
//                       to={to}
//                       end={to === "/"}
//                       className={desktopLinkClass}
//                     >
//                       {label}
//                     </NavLink>
//                   </div>
//                 ))}
//               </nav>

//               {/* ── ADMIN LOGIN ── */}
//               <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
//                 {/* Vertical rule */}
//                 <span className="h-6 w-px bg-slate-200" />
//                 <NavLink
//                   to="/admin"
//                   className="admin-btn flex items-center gap-2 px-5 py-[8px] rounded-sm text-[13px] font-semibold text-white tracking-wide"
//                 >
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                   </svg>
//                   Admin Login
//                 </NavLink>
//               </div>

//               {/* ── MOBILE HAMBURGER ── */}
//               <button
//                 onClick={() => setMenuOpen(o => !o)}
//                 className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 focus:outline-none"
//                 aria-label="Toggle menu"
//               >
//                 <span className={`ham-bar w-6 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
//                 <span className={`ham-bar ${menuOpen ? "w-0 opacity-0" : "w-[17px]"}`} />
//                 <span className={`ham-bar w-6 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
//               </button>

//             </div>
//           </div>

//           {/* Gold accent rule */}
//           <div className="gold-rule" />
//         </div>

//         {/* ══ MOBILE MENU PANEL ══ */}
//         {menuOpen && (
//           <div className="mobile-panel lg:hidden bg-white">
//             <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-0.5">
//               {navLinks.map(({ label, to }) => (
//                 <NavLink
//                   key={label}
//                   to={to}
//                   end={to === "/"}
//                   className={mobileLinkClass}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {label}
//                 </NavLink>
//               ))}

//               <div className="mt-3 pt-3 border-t border-slate-100">
//                 <NavLink
//                   to="/admin"
//                   onClick={() => setMenuOpen(false)}
//                   className="admin-btn flex items-center justify-center gap-2 w-full py-3 rounded-sm text-sm font-semibold text-white tracking-wide"
//                 >
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
//                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                     <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                   </svg>
//                   Admin Login
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Spacer — accounts for topbar + header height */}
//       <div className="h-[106px] md:h-[142px]" />
//     </>
//   );
// }







import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import edhaaIcon from "../assets/EDHAAICON.jpeg";
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Academics", to: "/Academics" },
  { label: "Activities", to: "/Activities" },
  { label: "Facilities", to: "/Facilities" },
  { label: "News & Events", to: "/NewsAndEvenets" },
  { label: "About Us", to: "/AboutUs" }, // 👈 moved here
  { label: "Contact", to: "/Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                
                {/* LOGO CIRCLE */}
                <div className="w-[56px] h-[56px] rounded-full border-2 border-yellow-500 bg-white flex items-center justify-center p-1 shadow-md hover:scale-105 transition">
                  
                  <img
                    src={edhaaIcon}
                    alt="EDHAA Logo"
                    className="w-[85%] h-[85%] object-contain drop-shadow-sm"
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* TEXT */}
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
                  to="/admin"
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
          <div className="lg:hidden bg-white shadow-md">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-gray-100"
                >
                  {label}
                </NavLink>
              ))}

              <NavLink
                to="/admin"
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





// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import edhaaIcon from "../assets/EDHAAICON.jpeg";

// const navLinks = [
//   { label: "Home", to: "/" },
//   { label: "About Us", to: "/AboutUs" },
//   { label: "Academics", to: "/Academics" },
//   { label: "Activities", to: "/Activities" },
//   { label: "Facilities", to: "/Facilities" },
//   { label: "News & Events", to: "/NewsAndEvenets" },
//   { label: "Contact", to: "/Contact" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const desktopLinkClass = ({ isActive }) =>
//     `relative px-2 py-1 text-[14px] font-medium transition ${
//       isActive
//         ? "text-blue-900 after:w-full"
//         : "text-gray-500 hover:text-blue-900"
//     } after:content-[''] after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:bg-yellow-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full`;

//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50 bg-white">

//         {/* HEADER */}
//         <div
//           className={`transition-all duration-300 ${
//             scrolled ? "shadow-lg" : ""
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex items-center justify-between h-[72px]">

//               {/* LOGO */}
//               <NavLink to="/" className="flex items-center gap-4">
                
//                 {/* LOGO CIRCLE */}
//                 <div className="w-[56px] h-[56px] rounded-full border-2 border-yellow-500 bg-white flex items-center justify-center p-1 shadow-md hover:scale-105 transition">
                  
//                   <img
//                     src={edhaaIcon}
//                     alt="EDHAA Logo"
//                     className="w-[85%] h-[85%] object-contain"
//                     draggable={false}
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div className="hidden sm:flex flex-col leading-tight">
//                   <span className="text-[18px] font-semibold text-blue-900">
//                     EDHAA PUBLIC SCHOOL
//                   </span>
//                   <span className="text-[10px] tracking-widest text-gray-400 uppercase">
//                     Excellence · Integrity · Growth
//                   </span>
//                 </div>
//               </NavLink>

//               {/* NAV */}
//               <nav className="hidden lg:flex items-center gap-6">
//                 {navLinks.map(({ label, to }) => (
//                   <NavLink key={label} to={to} className={desktopLinkClass}>
//                     {label}
//                   </NavLink>
//                 ))}
//               </nav>

//               {/* ADMIN BUTTON */}
//               <div className="hidden lg:block">
//                 <NavLink
//                   to="/admin"
//                   className="bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition shadow"
//                 >
//                   Admin Login
//                 </NavLink>
//               </div>

//               {/* MOBILE MENU BUTTON */}
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="lg:hidden flex flex-col gap-1"
//               >
//                 <span className="w-6 h-[2px] bg-black"></span>
//                 <span className="w-5 h-[2px] bg-black"></span>
//                 <span className="w-6 h-[2px] bg-black"></span>
//               </button>

//             </div>
//           </div>
//         </div>

//         {/* 🔥 PREMIUM BOTTOM BORDER */}
//         <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

//         {/* MOBILE MENU */}
//         {menuOpen && (
//           <div className="lg:hidden bg-white shadow-md">
//             <div className="flex flex-col p-4 gap-2">
//               {navLinks.map(({ label, to }) => (
//                 <NavLink
//                   key={label}
//                   to={to}
//                   onClick={() => setMenuOpen(false)}
//                   className="py-2 px-3 rounded hover:bg-gray-100"
//                 >
//                   {label}
//                 </NavLink>
//               ))}

//               <NavLink
//                 to="/admin"
//                 className="mt-3 bg-blue-900 text-white text-center py-2 rounded"
//               >
//                 Admin Login
//               </NavLink>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* SPACER */}
//       <div className="h-[80px]" />
//     </>
//   );
// }