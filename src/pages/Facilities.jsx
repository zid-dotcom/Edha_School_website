import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MonitorPlay, TestTube2, Library, Trophy, Monitor, Bus } from "lucide-react";

export default function Facilities() {
  const navigate = useNavigate();

  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Equipped with digital tools and interactive boards to enhance learning and foster engagement.",
      icon: <MonitorPlay className="w-6 h-6" />,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Science Laboratories",
      desc: "Well-equipped, safe labs for hands-on practical learning in physics, chemistry, and biology.",
      icon: <TestTube2 className="w-6 h-6" />,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Central Library",
      desc: "A vast collection of books, journals, and digital resources for students of all levels.",
      icon: <Library className="w-6 h-6" />,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Sports Complex",
      desc: "Spacious grounds and courts for outdoor games, athletics, and structured physical activities.",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-rose-600 bg-rose-50 border-rose-100",
    },
    {
      title: "Computer Lab",
      desc: "Modern systems with high-speed internet access to support digital education and coding.",
      icon: <Monitor className="w-6 h-6" />,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Transportation",
      desc: "Safe, comfortable, and reliable GPS-enabled transport system covering all nearby areas.",
      icon: <Bus className="w-6 h-6" />,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
  ];

  return (
    <div className="bg-neutral-50 pt-20">
      
      {/* HEADER */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
              World-class <br/> <span className="text-primary-600">infrastructure.</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
              Our campus is meticulously designed to provide a safe, comfortable, and enriching environment that supports both academic excellence and holistic personal development.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-100 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200"
              alt="School campus"
              className="relative w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="bg-primary-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-40"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience our campus
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Schedule a visit to tour our facilities and see firsthand how we provide an exceptional learning environment for our students.
            </p>
            <button
              onClick={() => navigate("/Contact")}
              className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Schedule a Campus Tour
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
