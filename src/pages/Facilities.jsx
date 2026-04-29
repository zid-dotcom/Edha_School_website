import { motion } from "framer-motion";
import { MonitorPlay, TestTube2, Library, Trophy, Monitor, Bus, AlertCircle, MapPin } from "lucide-react";

export default function Facilities() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const facilities = [
    { title: "Smart Classrooms", desc: "Spacious, well-ventilated classrooms equipped with digital boards and internet connectivity.", icon: <MonitorPlay className="w-10 h-10" />, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Science Laboratories", desc: "Well-equipped, safe laboratories for Physics, Chemistry, and Biology practical education.", icon: <TestTube2 className="w-10 h-10" />, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Central Library", desc: "A vast collection of reference books, encyclopedias, journals, and digital resources.", icon: <Library className="w-10 h-10" />, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Sports Infrastructure", desc: "Expansive playgrounds and maintained courts for outdoor games and athletics.", icon: <Trophy className="w-10 h-10" />, color: "text-rose-500", bg: "bg-rose-50" },
    { title: "Computer Center", desc: "Modern computer laboratory with high-speed internet access to support the IT curriculum.", icon: <Monitor className="w-10 h-10" />, color: "text-indigo-500", bg: "bg-indigo-50" },
    { title: "Transport System", desc: "A fleet of safe, well-maintained, GPS-enabled school buses providing reliable transport.", icon: <Bus className="w-10 h-10" />, color: "text-primary-500", bg: "bg-primary-50" },
  ];

  return (
    <div className="bg-neutral-50 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative bg-white py-32 md:py-48 border-b border-neutral-200">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#1b4d90_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-900 tracking-tight mb-8">World-Class <br/> Infrastructure</h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            A safe, comfortable, and enriching environment systematically designed to meet rigorous ICSE standards and support holistic development.
          </p>
        </motion.div>
      </div>

      {/* Bento Box Style Facilities Grid */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className={`p-10 rounded-3xl border border-neutral-100 bg-white hover:shadow-2xl transition-all duration-300 group`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dark Section: Labs & Sports */}
      <div className="bg-primary-900 py-32 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-800 opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 relative z-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <TestTube2 className="w-12 h-12 text-primary-300" />
              <h2 className="text-3xl md:text-4xl font-bold">Laboratories</h2>
            </div>
            <p className="text-primary-100 text-lg leading-relaxed mb-10">
              Strictly designed as per the latest ICSE safety guidelines. Practical knowledge is prioritized to ensure students can test hypotheses and learn through observation.
            </p>
            <div className="space-y-6">
              <div className="bg-primary-800/50 p-6 rounded-2xl border border-primary-700/50 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-2 text-white">Physics & Chemistry Labs</h4>
                <p className="text-primary-200">Equipped with standard apparatus, safety showers, and exhaust systems.</p>
              </div>
              <div className="bg-primary-800/50 p-6 rounded-2xl border border-primary-700/50 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-2 text-white">Biology Lab</h4>
                <p className="text-primary-200">Contains well-preserved specimens, modern microscopes, and anatomical models.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="w-12 h-12 text-primary-300" />
              <h2 className="text-3xl md:text-4xl font-bold">Sports Complex</h2>
            </div>
            <p className="text-primary-100 text-lg leading-relaxed mb-10">
              Physical fitness is highly emphasized. The sports complex provides standardized facilities for both indoor and outdoor games.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["200m Athletics Track", "Synthetic Basketball Court", "Volleyball Court", "Indoor Table Tennis", "Football Ground", "Dedicated PT Area"].map((sport, idx) => (
                <div key={idx} className="bg-primary-800/50 p-4 rounded-xl border border-primary-700/50 flex items-center justify-center text-center font-bold text-sm text-primary-100 hover:bg-primary-700 transition-colors">
                  {sport}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Library & Transport Split */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-amber-50 p-10 md:p-14 rounded-[3rem] border border-amber-100">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">Central Library</h3>
            <p className="text-amber-800/80 text-lg leading-relaxed mb-10">
              The intellectual hub of the school, holding over 10,000 volumes including encyclopedias, reference books, fiction, and periodicals.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold text-red-600 mb-6 flex items-center gap-3 text-lg">
                <AlertCircle className="w-6 h-6" /> Strict Guidelines
              </h4>
              <ul className="space-y-4 text-neutral-700">
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div> Absolute silence must be maintained.</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div> Borrow up to 2 books for 14 days maximum.</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div> ₹5 per day fine on overdue books.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 md:p-14 rounded-[3rem] border border-neutral-200 shadow-xl">
            <h3 className="text-3xl font-bold text-primary-900 mb-6">Transport Routes</h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              A safe, well-monitored bus facility covering various sectors. All buses are equipped with speed governors, CCTV cameras, and GPS tracking systems.
            </p>
            <div className="space-y-4">
              {[
                { route: "Route 1", stops: "ITPL, Kadugodi, Hope Farm", contact: "+91 98450 11001" },
                { route: "Route 2", stops: "Marathahalli, Kundalahalli, Brookefield", contact: "+91 98450 11002" },
                { route: "Route 3", stops: "Varthur, Gunjur, Balagere", contact: "+91 98450 11003" },
              ].map((r, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-neutral-100 bg-neutral-50 rounded-2xl hover:border-primary-300 transition-colors">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="font-bold text-primary-700 text-lg mb-1">{r.route}</h4>
                    <p className="text-sm text-neutral-600 flex items-center gap-2"><MapPin className="w-4 h-4" /> {r.stops}</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg font-bold text-primary-900 text-sm shadow-sm border border-neutral-200">
                    {r.contact}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
