import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Award, Users } from "lucide-react";

export default function AboutUs() {
  const values = [
    { icon: <Award className="w-5 h-5" />, label: "Excellence" },
    { icon: <Shield className="w-5 h-5" />, label: "Integrity" },
    { icon: <Target className="w-5 h-5" />, label: "Discipline" },
    { icon: <Users className="w-5 h-5" />, label: "Respect" },
    { icon: <Lightbulb className="w-5 h-5" />, label: "Innovation" },
  ];

  return (
    <div className="bg-white pt-20">
      {/* HEADER SECTION */}
      <section className="relative overflow-hidden bg-neutral-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-400 via-neutral-900 to-neutral-900"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Shaping minds, <br/> <span className="text-primary-400">building futures.</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              EDHAA Public School is committed to providing quality education that nurtures knowledge, discipline, and values. We shape young minds to become responsible citizens and future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Mission</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              To provide a nurturing environment where students can excel academically, develop strong values, and become confident individuals prepared for the challenges of tomorrow.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Vision</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              To be a leading institution that inspires innovation, leadership, and lifelong learning in every student, establishing a benchmark for educational excellence globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000"
            alt="School Campus"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-padding bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Leadership</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Guiding our institution with vision, dedication, and a commitment to excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Secretary */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xl font-bold mb-6">
                M
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">Mahalakshmi N Reddy</h3>
              <p className="text-primary-600 font-medium mb-4">Secretary</p>
              <p className="text-neutral-600 leading-relaxed">
                Providing strong leadership and vision for the continuous growth and development of the institution.
              </p>
            </motion.div>

            {/* Director */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xl font-bold mb-6">
                T
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">Thrilok S</h3>
              <p className="text-primary-600 font-medium mb-4">Director</p>
              <p className="text-neutral-600 leading-relaxed">
                Leading academic excellence and ensuring high-quality education standards across all departments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full shadow-sm text-neutral-700 font-medium"
              >
                <span className="text-primary-600">{value.icon}</span>
                {value.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}