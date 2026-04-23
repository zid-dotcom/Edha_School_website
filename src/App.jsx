import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Academics from './pages/Academics'
import Activities from './pages/Activities'
import Facilities from './pages/Facilities'
import NewsandEvents from './pages/NewsandEvents'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUS'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Academics' element={<Academics />} />
        <Route path='/Activities' element={<Activities />} />
        <Route path='/Facilities' element={<Facilities />} />
        <Route path='/AboutUs' element={<AboutUs />} />


        <Route path='/NewsAndEvenets' element={<NewsandEvents />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App




