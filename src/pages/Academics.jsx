import { useState } from "react";
import { BookOpen, GraduationCap, Microscope, Code, Globe, Library } from "lucide-react";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("overview");

  const levels = [
    {
      title: "Pre-Primary & Primary Education",
      desc: "Focuses on building core literacy, numeracy, and communication skills through engaging, activity-based learning methods aligned with foundational education standards.",
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
    },
    {
      title: "Middle School (Classes VI-VIII)",
      desc: "Emphasizes conceptual understanding, analytical thinking, and subject depth to strengthen academic foundations in sciences, mathematics, and languages.",
      icon: <Microscope className="w-6 h-6 text-primary-600" />,
    },
    {
      title: "Secondary & Senior Secondary (Classes IX-XII)",
      desc: "Prepares students for ICSE board examinations with a structured curriculum, consistent evaluation, practical laboratory work, and expert career guidance.",
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
              <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                  Academic Overview
              </div>
              <div className="p-6">
                  <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-6">
                      At Edhaa Public School, our academic framework is designed to build strong foundations, encourage critical thinking, and prepare students for higher education and competitive examinations. We strictly adhere to the curriculum guidelines prescribed by the Council for the Indian School Certificate Examinations (ICSE), ensuring a comprehensive and standardized educational experience.
                  </p>
                  
                  <h3 className="font-bold text-primary-800 border-b border-neutral-200 pb-2 mb-4 uppercase text-sm">Levels of Education</h3>
                  <ul className="flex flex-col gap-4 mb-8">
                      {levels.map((level, idx) => (
                          <li key={idx} className="flex gap-4 items-start p-4 bg-neutral-50 border border-neutral-200 hover:bg-white transition-colors">
                              <div className="mt-1 bg-white p-2 border border-neutral-200 shrink-0 shadow-sm">
                                  {level.icon}
                              </div>
                              <div>
                                  <h4 className="font-bold text-primary-800 text-sm mb-1">{level.title}</h4>
                                  <p className="text-sm text-neutral-600 leading-relaxed text-justify">{level.desc}</p>
                              </div>
                          </li>
                      ))}
                  </ul>

                  <h3 className="font-bold text-primary-800 border-b border-neutral-200 pb-2 mb-4 uppercase text-sm">Our Learning Methodology</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="p-5 border border-neutral-200 bg-neutral-50 text-center hover:bg-white transition-colors">
                          <Globe className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                          <h4 className="font-bold text-sm text-primary-800 mb-2">Smart Classrooms</h4>
                          <p className="text-xs text-neutral-600 leading-relaxed">Technology-enabled spaces utilizing digital boards to enhance visual learning and understanding.</p>
                      </div>
                      <div className="p-5 border border-neutral-200 bg-neutral-50 text-center hover:bg-white transition-colors">
                          <Library className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                          <h4 className="font-bold text-sm text-primary-800 mb-2">Qualified Faculty</h4>
                          <p className="text-xs text-neutral-600 leading-relaxed">Highly trained educators dedicated to providing structured academic guidance and discipline.</p>
                      </div>
                      <div className="p-5 border border-neutral-200 bg-neutral-50 text-center hover:bg-white transition-colors">
                          <Code className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                          <h4 className="font-bold text-sm text-primary-800 mb-2">Practical Learning</h4>
                          <p className="text-xs text-neutral-600 leading-relaxed">Mandatory laboratory sessions and projects to ensure theoretical concepts are applied practically.</p>
                      </div>
                  </div>

              </div>
          </div>
        );

      case "curriculum":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Curriculum (ICSE)
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    Edhaa Public School follows the curriculum prescribed by the Council for the Indian School Certificate Examinations (ICSE), New Delhi. The curriculum is continuously updated to meet the latest National Education Policy (NEP) guidelines, ensuring holistic development.
                </p>
                <div className="bg-neutral-50 border border-neutral-200 p-4">
                  <h4 className="font-bold text-primary-800 text-sm mb-2">Key Highlights of our Curriculum:</h4>
                  <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                    <li>Emphasis on experiential learning and critical thinking.</li>
                    <li>Integration of Art and Sports into standard academic subjects.</li>
                    <li>Continuous and Comprehensive Evaluation (CCE) for primary and middle school.</li>
                    <li>Strict adherence to NCERT textbooks and supplementary materials.</li>
                  </ul>
                </div>
            </div>
          </div>
        );

      case "exams":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Examination Schedule
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    The academic year is divided into two terms. Term-end examinations and periodic assessments are conducted rigorously to evaluate student progress.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-neutral-200">
                        <thead>
                            <tr className="bg-neutral-100 text-primary-800 text-xs uppercase tracking-wider">
                                <th className="p-3 border border-neutral-200">Examination Name</th>
                                <th className="p-3 border border-neutral-200">Tentative Schedule</th>
                                <th className="p-3 border border-neutral-200">Classes Applicable</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-neutral-600">
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Periodic Test 1</td>
                                <td className="p-3 border border-neutral-200">July - August</td>
                                <td className="p-3 border border-neutral-200">I to XII</td>
                            </tr>
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Half Yearly / Term 1</td>
                                <td className="p-3 border border-neutral-200">September - October</td>
                                <td className="p-3 border border-neutral-200">I to XII</td>
                            </tr>
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Periodic Test 2 / Pre-Board</td>
                                <td className="p-3 border border-neutral-200">December - January</td>
                                <td className="p-3 border border-neutral-200">I to XII</td>
                            </tr>
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Annual Examination</td>
                                <td className="p-3 border border-neutral-200">February - March</td>
                                <td className="p-3 border border-neutral-200">I to IX & XI</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        );

      case "materials":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Study Materials & Resources
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    Students are provided with comprehensive study materials, question banks, and revision notes to aid in their preparation. These are compiled by our expert faculty.
                </p>
                <div className="p-4 bg-primary-50 border border-primary-200 text-center text-sm font-bold text-primary-800">
                    Online Study Material portal is currently being updated for the session 2025-26. 
                    <br /><span className="text-xs text-neutral-600 font-normal">Please contact your respective class teachers for physical copies.</span>
                </div>
            </div>
          </div>
        );

      case "results":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Result Analysis
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    Edhaa Public School has a proud tradition of producing excellent results in the ICSE Board Examinations year after year. Our consistent 100% pass rate is a testament to the hard work of our students and teachers.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-neutral-200 bg-neutral-50 text-center">
                    <div className="text-3xl font-bold text-primary-700 mb-1">100%</div>
                    <div className="text-xs font-bold text-neutral-600 uppercase">Pass Percentage (Class X)</div>
                  </div>
                  <div className="p-5 border border-neutral-200 bg-neutral-50 text-center">
                    <div className="text-3xl font-bold text-primary-700 mb-1">100%</div>
                    <div className="text-xs font-bold text-neutral-600 uppercase">Pass Percentage (Class XII)</div>
                  </div>
                </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const menuItems = [
    { id: "overview", label: "Academic Overview" },
    { id: "curriculum", label: "Curriculum (ICSE)" },
    { id: "exams", label: "Examination Schedule" },
    { id: "materials", label: "Study Materials" },
    { id: "results", label: "Result Analysis" },
  ];

  return (
    <div className="bg-neutral-50 font-sans pb-10 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary-700 py-6 px-4 border-b border-primary-800">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">Academics</h1>
            <p className="text-primary-200 text-sm mt-1 font-medium">Home / Academics Overview</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 px-4 xl:px-0">
          
        {/* Left Sidebar Menu */}
        <div className="md:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Academics Menu
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