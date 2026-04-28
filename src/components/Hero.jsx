import React from 'react';
import { Link } from 'react-router-dom';
import schoolImage from "../assets/SchoolImage.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-semibold mb-4 border border-primary-200 rounded">
            Admissions Open 2025-26
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Welcome to <br /> Edhaa Public School
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Committed to providing excellence in education, fostering holistic development, and shaping the future leaders of tomorrow in a structured and nurturing environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/AboutUs"
              className="bg-primary-600 text-white px-6 py-2.5 font-medium hover:bg-primary-700 transition-colors rounded shadow-sm"
            >
              About the School
            </Link>
            <Link 
              to="/Academics"
              className="bg-white text-primary-700 border border-primary-600 px-6 py-2.5 font-medium hover:bg-primary-50 transition-colors rounded"
            >
              Academic Programs
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="border-4 border-white shadow-md bg-white p-2 rounded">
            <img 
              src={schoolImage} 
              alt="Edhaa Public School Campus" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-sm"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}