import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope, Code, Globe, Library, CheckCircle2, CalendarDays } from "lucide-react";

export default function Academics() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const levels = [
    {
      title: "Pre-Primary & Primary",
      desc: "Building core literacy, numeracy, and communication skills through engaging, activity-based learning.",
      icon: <BookOpen className="w-10 h-10" />,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Middle School",
      desc: "Emphasizing conceptual understanding and analytical thinking in sciences, mathematics, and languages.",
      icon: <Microscope className="w-10 h-10" />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      title: "Secondary & Senior Secondary",
      desc: "Preparing for ICSE board examinations with structured curriculum, evaluation, and career guidance.",
      icon: <GraduationCap className="w-10 h-10" />,
      color: "bg-primary-50 text-primary-600 border-primary-200"
    },
  ];

  return (
    <div className="bg-neutral-50 font-sans">
      
      {/* Structural Hero Section */}
      <div className="bg-primary-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800 skew-x-[-20deg] origin-bottom -z-0 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">Academic <br/><span className="text-primary-300">Excellence</span></h1>
            <p className="text-xl text-primary-100 max-w-2xl leading-relaxed">
              Empowering the next generation with a rigorous, inclusive, and future-ready ICSE curriculum designed to foster critical thinking.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro & Levels (Zig-Zag / Staggered Cards) */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Framework</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight mb-6">
              Building Strong Foundations for Higher Education
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We strictly adhere to the curriculum guidelines prescribed by the Council for the Indian School Certificate Examinations (ICSE), ensuring a standardized educational experience that prepares students for competitive environments.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {levels.map((level, i) => (
              <motion.div key={i} variants={fadeUp} className={`p-8 border ${level.color} bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-tr-3xl rounded-bl-3xl`}>
                <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-8 ${level.color} bg-opacity-50`}>
                  {level.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-neutral-800">{level.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{level.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Learning Methodology - Dark Visual Section */}
      <div className="bg-neutral-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Learning Methodology</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe />, title: "Smart Classrooms", desc: "Technology-enabled spaces utilizing digital boards to enhance visual learning." },
              { icon: <Library />, title: "Expert Faculty", desc: "Highly trained educators dedicated to providing structured academic guidance." },
              { icon: <Code />, title: "Practical Learning", desc: "Mandatory laboratory sessions and projects for hands-on experience." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-8 border border-neutral-800 hover:border-primary-500 bg-neutral-800/50 transition-colors">
                <div className="text-primary-400 mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Curriculum & Results - Split Layout */}
      <div className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">ICSE Integration</h2>
              <h3 className="text-3xl font-bold text-primary-900 mb-4">Curriculum Highlights</h3>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Continuously updated to meet the latest National Education Policy (NEP) guidelines, our curriculum ensures holistic development through rigorous academic standards.
              </p>
              <ul className="space-y-4">
                {["Experiential learning and critical thinking", "Integration of Art and Sports", "Continuous and Comprehensive Evaluation", "Strict adherence to NCERT/ICSE materials"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-primary-50 p-10 md:p-14 relative">
            <div className="absolute top-0 right-0 w-full h-full border-t-8 border-r-8 border-primary-600 translate-x-4 -translate-y-4 -z-10"></div>
            <h3 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-primary-200 pb-4">Result Analysis</h3>
            <p className="text-neutral-600 mb-10 leading-relaxed">
              A proud tradition of producing excellent results in the ICSE Board Examinations year after year, showcasing the dedication of our students and teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-1 bg-white p-6 shadow-md text-center border-b-4 border-primary-600">
                <div className="text-5xl font-black text-primary-700 mb-2">100%</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Class X Pass Rate</div>
              </div>
              <div className="flex-1 bg-white p-6 shadow-md text-center border-b-4 border-primary-600">
                <div className="text-5xl font-black text-primary-700 mb-2">100%</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Class XII Pass Rate</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Examination Schedule */}
      <div className="py-24 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <CalendarDays className="w-12 h-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Examination Schedule</h2>
            <p className="text-neutral-600 text-lg mb-10">The academic year is divided into distinct terms with rigorous periodic assessments to evaluate student progress consistently.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white shadow-xl overflow-hidden rounded-xl border border-neutral-200 text-left">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-900 text-white">
                    <th className="p-4 font-bold tracking-wide">Examination Name</th>
                    <th className="p-4 font-bold tracking-wide">Tentative Schedule</th>
                    <th className="p-4 font-bold tracking-wide">Applicable For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { name: "Periodic Test 1", time: "July - August", classes: "I to XII" },
                    { name: "Half Yearly / Term 1", time: "September - October", classes: "I to XII" },
                    { name: "Periodic Test 2 / Pre-Board", time: "December - January", classes: "I to XII" },
                    { name: "Annual Examination", time: "February - March", classes: "I to IX & XI" },
                  ].map((exam, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 font-bold text-primary-800">{exam.name}</td>
                      <td className="p-4 text-neutral-600">{exam.time}</td>
                      <td className="p-4 text-neutral-600 font-medium">{exam.classes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}