import { useState } from "react";
import { MonitorPlay, TestTube2, Library, Trophy, Monitor, Bus, AlertCircle } from "lucide-react";

export default function Facilities() {
  const [activeTab, setActiveTab] = useState("overview");

  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Spacious, well-ventilated classrooms equipped with digital boards and internet connectivity to facilitate interactive and visual learning.",
      icon: <MonitorPlay className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Science Laboratories",
      desc: "Strictly adhering to ICSE norms, we have well-equipped, safe laboratories for Physics, Chemistry, and Biology practical education.",
      icon: <TestTube2 className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Central Library",
      desc: "A vast collection of reference books, encyclopedias, journals, and digital resources to support the academic growth of students.",
      icon: <Library className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Sports Infrastructure",
      desc: "Expansive playgrounds and maintained courts for outdoor games, athletics, and physical education classes.",
      icon: <Trophy className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Computer Center",
      desc: "Modern computer laboratory with high-speed internet access to support the IT curriculum and digital literacy programs.",
      icon: <Monitor className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Transport System",
      desc: "A fleet of safe, well-maintained, GPS-enabled school buses providing reliable transport covering all major routes in Bengaluru.",
      icon: <Bus className="w-8 h-8 text-primary-600" />
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Our Facilities
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-6">
                    Edhaa Public School is committed to providing a safe, comfortable, and enriching environment that supports academic and personal development. Our campus infrastructure is systematically designed to meet the rigorous standards set by the educational authorities, ensuring that students have access to top-tier resources.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {facilities.map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 border border-neutral-200 bg-neutral-50 hover:bg-white transition-colors">
                            <div className="shrink-0 bg-white p-3 border border-neutral-200 shadow-sm">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-800 mb-1 text-sm">{item.title}</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed text-justify">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );

      case "labs":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Science & Computer Laboratories
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    Our laboratories are strictly designed as per the latest ICSE safety and academic guidelines. Practical knowledge is prioritized to ensure students can test hypotheses and learn through observation.
                </p>
                <div className="space-y-4">
                    <div className="p-4 border border-neutral-200 bg-neutral-50">
                        <h4 className="font-bold text-primary-800 text-sm mb-1">Physics & Chemistry Labs</h4>
                        <p className="text-sm text-neutral-600">Equipped with standard apparatus, safety showers, and exhaust systems. Supervised strictly by trained lab assistants.</p>
                    </div>
                    <div className="p-4 border border-neutral-200 bg-neutral-50">
                        <h4 className="font-bold text-primary-800 text-sm mb-1">Biology Lab</h4>
                        <p className="text-sm text-neutral-600">Contains well-preserved specimens, modern microscopes, and anatomical models for detailed biological study.</p>
                    </div>
                    <div className="p-4 border border-neutral-200 bg-neutral-50">
                        <h4 className="font-bold text-primary-800 text-sm mb-1">Computer Center</h4>
                        <p className="text-sm text-neutral-600">A fully air-conditioned facility with over 40 modern desktop systems, high-speed fiber internet, and content filtering for safe browsing.</p>
                    </div>
                </div>
            </div>
          </div>
        );

      case "library":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Library Rules & Resources
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    The Central Library serves as the intellectual hub of the school. It holds over 10,000 volumes including encyclopedias, reference books, fiction, and periodicals.
                </p>
                <div className="p-4 border border-neutral-200 bg-neutral-50 mb-4">
                    <h4 className="font-bold text-red-700 text-sm mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> Strict Library Guidelines
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                        <li>Absolute silence must be maintained in the library premises at all times.</li>
                        <li>Students may borrow up to 2 books for a maximum period of 14 days.</li>
                        <li>A late fine of ₹5 per day will be levied on overdue books.</li>
                        <li>Damage or loss of books must be compensated by replacing the book or paying its full market price.</li>
                    </ul>
                </div>
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Sports Complex
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    Physical fitness is highly emphasized. The sports complex provides standardized facilities for both indoor and outdoor games.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-sm text-neutral-600 font-medium">
                  <li className="p-3 border border-neutral-200 bg-neutral-50 text-center">200m Athletics Track</li>
                  <li className="p-3 border border-neutral-200 bg-neutral-50 text-center">Basketball Court (Synthetic)</li>
                  <li className="p-3 border border-neutral-200 bg-neutral-50 text-center">Volleyball Court</li>
                  <li className="p-3 border border-neutral-200 bg-neutral-50 text-center">Indoor Table Tennis Area</li>
                  <li className="p-3 border border-neutral-200 bg-neutral-50 text-center">Football Ground</li>
                  <li className="p-3 border border-neutral-200 bg-neutral-50 text-center">Dedicated PT Area</li>
                </ul>
            </div>
          </div>
        );

      case "transport":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Transport Routes
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    We offer a safe and well-monitored bus facility covering various sectors in and around Whitefield, Bengaluru. All buses are equipped with speed governors, CCTV cameras, and GPS tracking systems.
                </p>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-neutral-200">
                        <thead>
                            <tr className="bg-neutral-100 text-primary-800 text-xs uppercase tracking-wider">
                                <th className="p-3 border border-neutral-200">Route No.</th>
                                <th className="p-3 border border-neutral-200">Major Stops Covered</th>
                                <th className="p-3 border border-neutral-200">Incharge Contact</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-neutral-600">
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Route 1</td>
                                <td className="p-3 border border-neutral-200">ITPL, Kadugodi, Hope Farm Junction</td>
                                <td className="p-3 border border-neutral-200">+91 98450 11001</td>
                            </tr>
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Route 2</td>
                                <td className="p-3 border border-neutral-200">Marathahalli, Kundalahalli Gate, Brookefield</td>
                                <td className="p-3 border border-neutral-200">+91 98450 11002</td>
                            </tr>
                            <tr className="hover:bg-neutral-50">
                                <td className="p-3 border border-neutral-200 font-bold text-primary-700">Route 3</td>
                                <td className="p-3 border border-neutral-200">Varthur, Gunjur, Balagere</td>
                                <td className="p-3 border border-neutral-200">+91 98450 11003</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const menuItems = [
    { id: "overview", label: "Facilities Overview" },
    { id: "labs", label: "Science & IT Labs" },
    { id: "library", label: "Library Rules" },
    { id: "sports", label: "Sports Complex" },
    { id: "transport", label: "Transport Routes" },
  ];

  return (
    <div className="bg-neutral-50 font-sans pb-10 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary-700 py-6 px-4 border-b border-primary-800">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">Infrastructure</h1>
            <p className="text-primary-200 text-sm mt-1 font-medium">Home / Facilities & Infrastructure</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 px-4 xl:px-0">
          
        {/* Left Sidebar */}
        <div className="md:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Infrastructure Menu
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
