// import React, { useContext } from 'react'
// import Header from './components/Header'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Academics from './pages/Academics'
// import Activities from './pages/Activities'
// import Facilities from './pages/Facilities'
// import NewsandEvents from './pages/NewsandEvents'
// import Contact from './pages/Contact'
// import Footer from './components/Footer'
// import AboutUs from './pages/AboutUS'
// import Adminlogin from './pages/Adminlogin'
// import { ToastContainer, toast } from 'react-toastify';
// import { AppContext } from './context/Appcontext'
// import AdminDashboard from './pages/AdminDashboard'
// import NotFound from './pages/NotFound'



// const App = () => {
//   const { atoken } = useContext(AppContext);

//   // 🔥 If admin logged in → show dashboard only
//   if (atoken) {
//     return <AdminDashboard />;
//   }

//   // 🔥 Otherwise show normal site
//   return (
//     <div>
//       <ToastContainer />

//       <Header />

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Academics' element={<Academics />} />
//         <Route path='/Activities' element={<Activities />} />
//         <Route path='/Facilities' element={<Facilities />} />
//         <Route path='/AboutUs' element={<AboutUs />} />
//         <Route path='/NewsAndEvenets' element={<NewsandEvents />} />
//         <Route path='/Contact' element={<Contact />} />
//         <Route path='/adminlogin' element={<Adminlogin />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default App;






import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Activities from "./pages/Activities";
import Facilities from "./pages/Facilities";
import NewsandEvents from "./pages/NewsandEvents";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUS";
import Adminlogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
import { AppContext } from "./context/Appcontext";

const App = () => {
  const { atoken } = useContext(AppContext);
  const location = useLocation();

  // Check if current path is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      <ToastContainer />

      {/* 🔥 Show Header only on public routes */}
      {!isAdminRoute && <Header />}

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NewsAndEvenets" element={<NewsandEvents />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />

        {/* ADMIN LOGIN */}
        <Route
          path="/adminlogin"
          element={
            atoken ? <Navigate to="/admin/dashboard" /> : <Adminlogin />
          }
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin/dashboard"
          element={
            atoken ? <AdminDashboard /> : <Navigate to="/adminlogin" />
          }
        />

        {/* 🔥 404 ROUTE (ALWAYS LAST) */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      {/* 🔥 Hide footer on admin routes */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;