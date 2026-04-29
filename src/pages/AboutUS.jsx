import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Award, Users } from "lucide-react";
import schoolImage from "../assets/SchoolImage.jpg";

export default function AboutUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const values = [
    { icon: <Award className="w-8 h-8" />, label: "Excellence", desc: "Striving for the highest standards in everything we do." },
    { icon: <Shield className="w-8 h-8" />, label: "Integrity", desc: "Acting with honesty, transparency, and moral courage." },
    { icon: <Target className="w-8 h-8" />, label: "Discipline", desc: "Fostering focus and dedication in personal and academic pursuits." },
    { icon: <Users className="w-8 h-8" />, label: "Respect", desc: "Valuing diversity and treating everyone with dignity." },
    { icon: <Lightbulb className="w-8 h-8" />, label: "Innovation", desc: "Encouraging creative thinking and problem solving." },
  ];

  return (
    <div className="bg-neutral-50 font-sans">
      
      {/* Abstract Typography Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] bg-primary-900 flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-300 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        {/* Giant Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
          <h1 className="text-[15vw] font-black text-white whitespace-nowrap tracking-tighter leading-none">OUR LEGACY</h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary-300"></div>
            <span className="text-primary-300 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Edhaa Public School</span>
            <div className="w-8 h-[1px] bg-primary-300"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-white">We Are</span>
          </h1>
          
          <p className="text-primary-100 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
            Fostering academic excellence, character, and innovation since our foundation.
          </p>
        </motion.div>
      </div>

      {/* Split Layout: History & Overview */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary-100 rounded-bl-[100px] z-0"></div>
            <img src={schoolImage} alt="Campus History" className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-tr-[100px]" />
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
              A Tradition of <span className="text-primary-600">Excellence</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-600 text-lg leading-relaxed">
              Edhaa Public School, established with the goal of providing high-quality, inclusive education, is a recognized institution affiliated to the Council for the Indian School Certificate Examinations (ICSE). Located in the IT corridor of Whitefield, Bengaluru, our institution has grown to become a center of academic and co-curricular excellence in the region.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-neutral-600 text-lg leading-relaxed">
              We are committed to providing an education that nurtures knowledge, discipline, and strong ethical values. Our dedicated staff works tirelessly to maintain a safe, stimulating, and disciplined learning environment inside the school campus.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Vision & Mission - Immersive Block */}
      <div className="bg-primary-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-primary-800/50 p-10 border-l-4 border-primary-400 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-12 bg-primary-600 flex items-center justify-center rounded-full"><Target className="w-6 h-6" /></span>
              Our Vision
            </h3>
            <p className="text-primary-100 leading-relaxed text-lg">
              Our vision is to impart quality and inclusive education for the all-round development of a child—encompassing physical, mental, and emotional growth. We aim to empower every student with the intellectual curiosity and moral framework necessary to serve the society and nation effectively.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-primary-800/50 p-10 border-l-4 border-primary-400 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-12 bg-primary-600 flex items-center justify-center rounded-full"><Lightbulb className="w-6 h-6" /></span>
              Our Mission
            </h3>
            <ul className="space-y-4 text-primary-100 text-lg">
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary-400 rounded-full mt-2 shrink-0"></div> To pursue academic excellence and set high standards in school education.</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary-400 rounded-full mt-2 shrink-0"></div> To initiate and promote innovation in teaching methodologies.</li>
              <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary-400 rounded-full mt-2 shrink-0"></div> To develop strong character, instilling values of integrity, empathy, and resilience.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Standout Section: School Management */}
      <div className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Leadership</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-900">School Management</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative bg-white p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img src="https://ui-avatars.com/api/?name=Mahalakshmi+N+Reddy&background=1b4d90&color=fff" alt="Secretary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-primary-900 mb-1">Smt. Mahalakshmi N Reddy</h4>
              <p className="text-primary-600 font-bold text-sm uppercase tracking-wider mb-6">Secretary</p>
              <p className="text-neutral-600 leading-relaxed">Providing strong leadership and a steadfast vision for the continuous infrastructural and academic growth of the institution, ensuring we remain at the forefront of modern education.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative bg-white p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 md:mt-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img src="https://ui-avatars.com/api/?name=Thrilok+S&background=1b4d90&color=fff" alt="Director" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-primary-900 mb-1">Shri. Thrilok S</h4>
              <p className="text-primary-600 font-bold text-sm uppercase tracking-wider mb-6">Director</p>
              <p className="text-neutral-600 leading-relaxed">Overseeing academic excellence and ensuring high-quality education standards are strictly maintained across all departments, fostering a culture of continuous improvement.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Foundation</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-900">Core Values</h3>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-neutral-50 p-8 border border-neutral-100 hover:border-primary-200 transition-colors group">
                <div className="text-primary-400 group-hover:text-primary-600 group-hover:-translate-y-2 transition-all duration-300 mb-6 bg-white w-16 h-16 flex items-center justify-center shadow-sm">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-3">{v.label}</h4>
                <p className="text-neutral-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}