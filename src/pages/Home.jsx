import React from 'react'
import { Link } from 'react-router-dom'
import schoolImage from '../assets/SchoolImage.jpg'

const Home = () => {
  return (
    <div className="bg-neutral-50 font-sans pb-10">
      
      {/* Hero Banner (Full Width but constrained height) */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] bg-white border-b border-neutral-200 relative overflow-hidden">
        <img src={schoolImage} alt="Edhaa Public School Campus" className="w-full h-full object-cover object-top" />
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 lg:left-1/4 lg:-translate-x-0 bg-primary-900/90 text-white px-4 py-2 sm:px-8 sm:py-4 font-bold text-lg sm:text-2xl md:text-3xl border-l-4 sm:border-l-8 border-white tracking-wide shadow-lg text-center w-max max-w-[90vw] whitespace-normal sm:whitespace-nowrap z-10">
            Welcome to Edhaa Public School
        </div>
      </div>

      {/* Marquee News Ticker */}
      <div className="max-w-6xl mx-auto bg-white border-x border-b border-neutral-200 shadow-sm flex items-center">
        <div className="bg-primary-700 text-white font-bold px-4 py-2 whitespace-nowrap text-sm uppercase flex-shrink-0 tracking-wider">
            Announcements
        </div>
        <div className="marquee-container w-full py-2 px-4 text-primary-800 text-sm font-bold flex items-center bg-neutral-100">
            <div className="marquee-content">
                <span className="mx-4 text-primary-600">✦</span>
                <Link to="/NewsAndEvenets" className="hover:underline text-primary-800">Admissions Open for Academic Session 2025-26. Click here to download forms.</Link>
                <span className="mx-4 text-primary-600">✦</span>
                <Link to="/NewsAndEvenets" className="hover:underline text-primary-800">Annual Sports Meet scheduled for 15th December.</Link>
                <span className="mx-4 text-primary-600">✦</span>
                <Link to="/NewsAndEvenets" className="hover:underline text-primary-800">Parent-Teacher Meeting (PTM) for Term 1 results on Saturday.</Link>
            </div>
        </div>
      </div>

      {/* Main Content: 3 Column Layout */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 xl:px-0">
        
        {/* Left Column: Management Message */}
        <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="kvs-card">
                <div className="bg-primary-600 text-white px-4 py-2 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Secretary's Message
                </div>
                <div className="p-4 flex flex-col items-center text-center bg-white">
                    <div className="w-24 h-24 bg-neutral-100 border border-neutral-200 p-1 mb-3 rounded-sm shadow-sm">
                        <img src="https://ui-avatars.com/api/?name=Mahalakshmi+N+Reddy&background=1b4d90&color=fff" alt="Secretary" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-primary-800 text-sm mb-1">Smt. Mahalakshmi N Reddy</h3>
                    <h4 className="font-bold text-neutral-600 text-xs mb-3">(Secretary)</h4>
                    <p className="text-xs text-neutral-700 leading-relaxed text-justify mb-3">
                        Education is the most powerful catalyst for social transformation. At Edhaa Public School, our constant endeavor is to provide a safe, secure, and stimulating environment where children can discover their true potential and develop a passion for lifelong learning.
                    </p>
                    <Link to="/AboutUs" className="text-xs text-primary-700 font-bold hover:underline self-end">Read More »</Link>
                </div>
            </div>

            <div className="kvs-card">
                <div className="bg-primary-600 text-white px-4 py-2 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Director's Message
                </div>
                <div className="p-4 bg-white">
                    <h3 className="font-bold text-primary-800 text-sm mb-1">Shri. Thrilok S</h3>
                    <p className="text-xs text-neutral-700 leading-relaxed text-justify mb-2">
                        We aim to nurture students who are intellectually competent, morally upright, and socially committed. Our focus is on holistic development through rigorous academic curriculum supported by robust co-curricular activities.
                    </p>
                    <Link to="/AboutUs" className="text-xs text-primary-700 font-bold hover:underline flex justify-end">Read More »</Link>
                </div>
            </div>
        </div>

        {/* Center Column: About Edhaa & Quick Links */}
        <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="kvs-card">
                <div className="bg-primary-600 text-white px-4 py-2 font-bold uppercase text-sm border-b-2 border-primary-800">
                    About Edhaa Public School
                </div>
                <div className="p-5 bg-white">
                    <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-4">
                        Edhaa Public School, located in Whitefield, Bengaluru, is a premier educational institution affiliated to the Council for the Indian School Certificate Examinations (ICSE). We offer a comprehensive educational program from Kindergarten to Senior Secondary levels. Our campus boasts state-of-the-art infrastructure designed to facilitate modern pedagogical practices.
                    </p>
                    <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-5">
                        Our institution is built on the foundation of academic excellence, discipline, and strong ethical values. We ensure that every student receives individualized attention to foster their unique talents and prepare them for future global challenges.
                    </p>
                    
                    <h4 className="font-bold text-primary-800 text-sm border-b border-neutral-200 pb-2 mb-3">Quick Links</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link to="/Academics" className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:bg-primary-50 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-primary-600 group-hover:bg-primary-800"></div>
                            <span className="text-sm font-bold text-primary-700 group-hover:text-primary-900">Academics</span>
                        </Link>
                        <Link to="/Facilities" className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:bg-primary-50 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-primary-600 group-hover:bg-primary-800"></div>
                            <span className="text-sm font-bold text-primary-700 group-hover:text-primary-900">Infrastructure</span>
                        </Link>
                        <Link to="/Activities" className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:bg-primary-50 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-primary-600 group-hover:bg-primary-800"></div>
                            <span className="text-sm font-bold text-primary-700 group-hover:text-primary-900">Activities</span>
                        </Link>
                        <Link to="/Contact" className="flex items-center gap-2 p-2 bg-neutral-50 border border-neutral-200 hover:bg-primary-50 transition-colors group">
                            <div className="w-1.5 h-1.5 bg-primary-600 group-hover:bg-primary-800"></div>
                            <span className="text-sm font-bold text-primary-700 group-hover:text-primary-900">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Statistics Row - Formal Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-neutral-200 bg-white p-4 text-center shadow-sm">
                    <h4 className="text-3xl font-bold text-primary-700 mb-1">1200+</h4>
                    <p className="text-xs text-neutral-600 font-bold tracking-wide uppercase">Students</p>
                </div>
                <div className="border border-neutral-200 bg-white p-4 text-center shadow-sm">
                    <h4 className="text-3xl font-bold text-primary-700 mb-1">80+</h4>
                    <p className="text-xs text-neutral-600 font-bold tracking-wide uppercase">Faculty</p>
                </div>
                <div className="border border-neutral-200 bg-white p-4 text-center shadow-sm">
                    <h4 className="text-3xl font-bold text-primary-700 mb-1">100%</h4>
                    <p className="text-xs text-neutral-600 font-bold tracking-wide uppercase">Pass Rate</p>
                </div>
            </div>
        </div>

        {/* Right Column: Latest Updates */}
        <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="kvs-card">
                <div className="bg-primary-600 text-white px-4 py-2 font-bold uppercase text-sm border-b-2 border-primary-800 flex justify-between items-center">
                    Latest Updates
                </div>
                <div className="p-0 bg-white">
                    <ul className="flex flex-col">
                        <li className="border-b border-neutral-200 p-3 hover:bg-neutral-50 transition-colors">
                            <Link to="/NewsAndEvenets" className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-primary-700 leading-tight">Registration Form for Class I Admissions 2025-26</span>
                                <span className="text-[10px] text-neutral-500 flex items-center gap-1 font-medium">Published: 24 Apr 2025</span>
                            </Link>
                        </li>
                        <li className="border-b border-neutral-200 p-3 hover:bg-neutral-50 transition-colors">
                            <Link to="/NewsAndEvenets" className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-primary-700 leading-tight">Circular regarding Summer Vacation Dates</span>
                                <span className="text-[10px] text-neutral-500 flex items-center gap-1 font-medium">Published: 18 Apr 2025</span>
                            </Link>
                        </li>
                        <li className="border-b border-neutral-200 p-3 hover:bg-neutral-50 transition-colors">
                            <Link to="/NewsAndEvenets" className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-primary-700 leading-tight">Syllabus distribution for Term 1 Assessments</span>
                                <span className="text-[10px] text-neutral-500 flex items-center gap-1 font-medium">Published: 03 Mar 2025</span>
                            </Link>
                        </li>
                        <li className="border-b border-neutral-200 p-3 hover:bg-neutral-50 transition-colors">
                            <Link to="/NewsAndEvenets" className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-primary-700 leading-tight">Recruitment Notice: Walk-in Interview for PGT/TGT</span>
                                <span className="text-[10px] text-neutral-500 flex items-center gap-1 font-medium">Published: 01 Mar 2025</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="p-3 bg-neutral-100 border-t border-neutral-200 text-right">
                        <Link to="/NewsAndEvenets" className="text-xs text-primary-700 font-bold hover:underline">View All Circulars »</Link>
                    </div>
                </div>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Home
