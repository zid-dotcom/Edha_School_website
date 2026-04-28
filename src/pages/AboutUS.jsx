import { useState } from "react";
import { Target, Lightbulb, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import schoolImage from "../assets/SchoolImage.jpg";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("overview");

  const values = [
    { icon: <Award className="w-5 h-5 text-primary-600" />, label: "Excellence" },
    { icon: <Shield className="w-5 h-5 text-primary-600" />, label: "Integrity" },
    { icon: <Target className="w-5 h-5 text-primary-600" />, label: "Discipline" },
    { icon: <Users className="w-5 h-5 text-primary-600" />, label: "Respect" },
    { icon: <Lightbulb className="w-5 h-5 text-primary-600" />, label: "Innovation" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
              <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                  School History & Overview
              </div>
              <div className="p-6">
                  <img src={schoolImage} alt="Edhaa Public School Campus" className="w-full h-64 object-cover mb-6 border border-neutral-300" />
                  <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-4">
                      Edhaa Public School, established with the goal of providing high-quality, inclusive education, is a recognized institution affiliated to the Council for the Indian School Certificate Examinations (ICSE). Located in the IT corridor of Whitefield, Bengaluru, our institution has grown to become a center of academic and co-curricular excellence in the region.
                  </p>
                  <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-4">
                      We are committed to providing an education that nurtures knowledge, discipline, and strong ethical values. Our dedicated staff works tirelessly to maintain a safe, stimulating, and disciplined learning environment inside the school campus. At Edhaa Public School, every student is encouraged to explore their potential and prepare themselves to be responsible citizens of tomorrow.
                  </p>
              </div>
          </div>
        );
      
      case "vision":
        return (
          <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-200 shadow-sm flex flex-col">
                  <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                      Our Vision
                  </div>
                  <div className="p-6 flex-1">
                      <p className="text-sm text-neutral-700 leading-relaxed text-justify">
                          Our vision is to impart quality and inclusive education for the all-round development of a child—encompassing physical, mental, and emotional growth. We aim to empower every student with the intellectual curiosity and moral framework necessary to serve the society and nation effectively.
                      </p>
                  </div>
              </div>

              <div className="bg-white border border-neutral-200 shadow-sm flex flex-col">
                  <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                      Our Mission
                  </div>
                  <div className="p-6 flex-1">
                      <ul className="list-disc pl-5 text-sm text-neutral-700 leading-relaxed flex flex-col gap-2">
                          <li>To pursue academic excellence and set high standards in school education.</li>
                          <li>To initiate and promote innovation in teaching methodologies.</li>
                          <li>To develop strong character, instilling values of integrity, empathy, and resilience in every student.</li>
                      </ul>
                  </div>
              </div>
          </div>
        );

      case "management":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
              <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                  School Management
              </div>
              <div className="p-0 flex flex-col">
                  <div className="grid md:grid-cols-2 border-b border-neutral-200">
                      <div className="p-6 border-b md:border-b-0 md:border-r border-neutral-200 flex items-start gap-4 hover:bg-neutral-50 transition-colors">
                          <div className="w-16 h-16 bg-neutral-100 border border-neutral-300 p-1 shrink-0">
                              <img src="https://ui-avatars.com/api/?name=Mahalakshmi+N+Reddy&background=1b4d90&color=fff" alt="Secretary" className="w-full h-full object-cover" />
                          </div>
                          <div>
                              <h3 className="font-bold text-primary-800 text-base">Smt. Mahalakshmi N Reddy</h3>
                              <p className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wide">Secretary</p>
                              <p className="text-xs text-neutral-700 leading-relaxed text-justify">Providing strong leadership and a steadfast vision for the continuous infrastructural and academic growth of the institution.</p>
                          </div>
                      </div>
                      <div className="p-6 flex items-start gap-4 hover:bg-neutral-50 transition-colors">
                          <div className="w-16 h-16 bg-neutral-100 border border-neutral-300 p-1 shrink-0">
                              <img src="https://ui-avatars.com/api/?name=Thrilok+S&background=1b4d90&color=fff" alt="Director" className="w-full h-full object-cover" />
                          </div>
                          <div>
                              <h3 className="font-bold text-primary-800 text-base">Shri. Thrilok S</h3>
                              <p className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wide">Director</p>
                              <p className="text-xs text-neutral-700 leading-relaxed text-justify">Overseeing academic excellence and ensuring high-quality education standards are strictly maintained across all departments.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );

      case "values":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm mb-10">
              <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                  Core Values
              </div>
              <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {values.map((v, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-4 border border-neutral-200 bg-neutral-50 text-center">
                          <div className="mb-2 bg-white p-2 rounded-full border border-neutral-200 shadow-sm">{v.icon}</div>
                          <span className="text-sm font-bold text-primary-800">{v.label}</span>
                      </div>
                  ))}
              </div>
          </div>
        );

      default:
        return null;
    }
  };

  const menuItems = [
    { id: "overview", label: "History & Overview" },
    { id: "vision", label: "Vision & Mission" },
    { id: "values", label: "Core Values" },
    { id: "management", label: "School Management" },
  ];

  return (
    <div className="bg-neutral-50 font-sans pb-10 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary-700 py-6 px-4 border-b border-primary-800">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">About Us</h1>
            <p className="text-primary-200 text-sm mt-1 font-medium">Home / About Us</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 px-4 xl:px-0">
          
        {/* Left Sidebar Menu */}
        <div className="md:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Menu
                </div>
                <div className="flex flex-col text-sm font-bold text-primary-800">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`p-3 text-left border-b border-neutral-200 transition-colors ${
                          activeTab === item.id 
                            ? "bg-neutral-50 border-l-4 border-primary-600" 
                            : "hover:bg-neutral-50 border-l-4 border-transparent"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                    <Link to="/Contact" className="p-3 text-left hover:bg-neutral-50 transition-colors border-l-4 border-transparent text-primary-600">
                      Contact Us »
                    </Link>
                </div>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-9 flex flex-col gap-6">
            {renderContent()}
        </div>
      </div>
    </div>
  );
}