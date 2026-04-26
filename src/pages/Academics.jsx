import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope, Code, Globe, Library } from "lucide-react";

export default function Academics() {
  const levels = [
    {
      title: "Primary Education",
      desc: "Focuses on building core literacy, numeracy, and communication skills through engaging and interactive learning methods.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Middle School",
      desc: "Emphasizes conceptual understanding, analytical thinking, and subject depth to strengthen academic foundations.",
      icon: <Microscope className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "High School",
      desc: "Prepares students for board examinations with structured curriculum, consistent evaluation, and expert guidance.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  const features = [
    {
      title: "Modern Classrooms",
      desc: "Technology-enabled spaces that enhance understanding and make learning interactive.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Expert Faculty",
      desc: "Experienced educators who guide students with clarity, discipline, and consistent progress.",
      icon: <Library className="w-5 h-5" />,
    },
    {
      title: "Practical Learning",
      desc: "Focus on real-world applications of theoretical concepts through lab work and projects.",
      icon: <Code className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* HEADER SECTION */}
      <section className="bg-neutral-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-neutral-600 mb-6 shadow-sm">
              Academic Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
              Learning that lasts <br className="hidden md:block"/>
              a <span className="text-primary-600">lifetime</span>.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              At EDHAA Public School, our academic framework is designed to build
              strong foundations, encourage critical thinking, and prepare students
              for future challenges in a rapidly evolving world.
            </p>
          </div>
        </div>
      </section>

      {/* LEVELS OF EDUCATION */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${level.color}`}>
                  {level.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{level.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {level.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION WITH IMAGE */}
      <section className="section-padding bg-neutral-900 text-white rounded-t-[3rem] mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Learning Approach</h2>
                <p className="text-neutral-400 text-lg">
                  We believe in a holistic approach to education that goes beyond textbooks, focusing on the overall development of every student.
                </p>
              </div>

              <div className="space-y-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-neutral-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/20 blur-2xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200"
                alt="Classroom"
                className="relative rounded-3xl w-full h-[500px] object-cover border border-white/10 shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}