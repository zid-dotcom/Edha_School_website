import { useState } from "react";
import { Palette, Trophy, Users, Monitor, Music, Shield, CalendarDays } from "lucide-react";

export default function Activities() {
  const [activeTab, setActiveTab] = useState("overview");

  const activities = [
    {
      title: "Sports & Athletics",
      desc: "Physical education is a mandatory part of our curriculum. Students participate in inter-house and inter-school sports tournaments, promoting physical fitness, discipline, and teamwork.",
      icon: <Trophy className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Scout & Guides",
      desc: "Our active Scout and Guide unit conducts weekly sessions. It aims to instill self-discipline, civic responsibility, and leadership qualities in our young students.",
      icon: <Shield className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Art & Craft",
      desc: "Structured art education is provided to nurture creativity and fine motor skills. Annual exhibitions are held to showcase the artistic achievements of our students.",
      icon: <Palette className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Cultural Exchange",
      desc: "Various programs are organized to enhance interaction and promote mutual understanding of different cultural traditions and values across regions.",
      icon: <Users className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Clubs & Committees",
      desc: "Students are encouraged to join specific academic clubs (Science, IT, Literature) to organize exhibitions, seminars, and peer-learning sessions.",
      icon: <Monitor className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Annual Events",
      desc: "Formal celebration of national festivals, the School Annual Day, and formal talent hunts are organized to provide a stage for artistic performance.",
      icon: <Music className="w-8 h-8 text-primary-600" />
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Co-Curricular Overview
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed text-justify mb-6">
                    At Edhaa Public School, we firmly believe that education extends beyond the four walls of a classroom. Our structured co-curricular activities are meticulously designed to build character, resilience, and leadership skills, ensuring the holistic development of every student in alignment with the ICSE mandates.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {activities.map((item, i) => (
                        <div key={i} className="flex flex-col border border-neutral-200 bg-neutral-50 hover:bg-white transition-colors">
                            <div className="bg-neutral-100 p-4 border-b border-neutral-200 flex items-center justify-center h-20">
                                {item.icon}
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-primary-800 mb-2 text-sm uppercase tracking-wide border-b border-neutral-200 pb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed text-justify">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );

      case "calendar":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Activity Calendar (2025-26)
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    The Co-Curricular Activity (CCA) calendar is designed to ensure students have a balanced academic and extracurricular life throughout the session.
                </p>
                
                <div className="mb-8 p-5 bg-neutral-100 border border-neutral-300 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="w-8 h-8 text-primary-600" />
                        <div>
                            <h4 className="font-bold text-primary-800 text-sm">Download Activity Calendar</h4>
                            <p className="text-xs text-neutral-600 mt-1">Get the official schedule of upcoming events for the Academic Year 2025-26.</p>
                        </div>
                    </div>
                    <button className="bg-primary-600 text-white px-5 py-2 text-xs font-bold uppercase hover:bg-primary-700 transition-colors">
                        Download PDF
                    </button>
                </div>
                
                <h4 className="font-bold text-primary-800 text-sm border-b border-neutral-200 pb-2 mb-3">Upcoming Major Events</h4>
                <ul className="text-sm text-neutral-600 space-y-3">
                    <li className="flex gap-4 p-3 border border-neutral-200 bg-neutral-50">
                        <span className="font-bold text-primary-700 w-24">15 Aug</span>
                        <span>Independence Day Celebration & March Past</span>
                    </li>
                    <li className="flex gap-4 p-3 border border-neutral-200 bg-neutral-50">
                        <span className="font-bold text-primary-700 w-24">05 Sep</span>
                        <span>Teachers' Day Special Assembly</span>
                    </li>
                    <li className="flex gap-4 p-3 border border-neutral-200 bg-neutral-50">
                        <span className="font-bold text-primary-700 w-24">14 Nov</span>
                        <span>Children's Day & Inter-House Cultural Fest</span>
                    </li>
                </ul>
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Sports Competitions
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    Sports form an integral part of Edhaa Public School's curriculum. We organize regular inter-house competitions in Athletics, Football, Basketball, and Volleyball to promote a spirit of healthy competition.
                </p>
                <div className="p-4 bg-primary-50 border border-primary-200 text-sm font-bold text-primary-800">
                    Next Inter-House Sports Meet: December 2025
                </div>
            </div>
          </div>
        );

      case "scouts":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Scout & Guides
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    The Bharat Scouts and Guides unit at Edhaa Public School is dedicated to developing the physical, intellectual, emotional, and social potentials of young people as responsible citizens. Regular camps, tracking, and community service activities are mandated for registered students.
                </p>
            </div>
          </div>
        );

      case "science":
        return (
          <div className="bg-white border border-neutral-200 shadow-sm">
            <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                Science Exhibitions
            </div>
            <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    To promote scientific temper and analytical thinking, we host an Annual Science Exhibition where students from Classes VI to XII showcase innovative models and projects. Outstanding projects are forwarded to regional ICSE science exhibitions.
                </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const menuItems = [
    { id: "overview", label: "Activities Overview" },
    { id: "calendar", label: "Activity Calendar" },
    { id: "sports", label: "Sports Competitions" },
    { id: "scouts", label: "Scout & Guides" },
    { id: "science", label: "Science Exhibitions" },
  ];

  return (
    <div className="bg-neutral-50 font-sans pb-10 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary-700 py-6 px-4 border-b border-primary-800">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">Co-Curricular Activities</h1>
            <p className="text-primary-200 text-sm mt-1 font-medium">Home / Activities</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 px-4 xl:px-0">
          
        {/* Left Sidebar Menu */}
        <div className="md:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Activities Menu
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