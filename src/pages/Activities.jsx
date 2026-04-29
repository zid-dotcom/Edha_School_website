import { motion } from "framer-motion";
import { Palette, Trophy, Users, Monitor, Music, Shield, CalendarDays, ArrowRight } from "lucide-react";
import schoolImage from "../assets/SchoolImage.jpg";

export default function Activities() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const activities = [
    { title: "Sports & Athletics", desc: "Physical education is a mandatory part of our curriculum. Students participate in inter-house and inter-school sports tournaments, promoting physical fitness, discipline, and teamwork.", icon: <Trophy /> },
    { title: "Art & Craft", desc: "Structured art education is provided to nurture creativity and fine motor skills. Annual exhibitions are held to showcase the artistic achievements of our students.", icon: <Palette /> },
    { title: "Cultural Exchange", desc: "Various programs are organized to enhance interaction and promote mutual understanding of different cultural traditions and values across regions.", icon: <Users /> },
    { title: "Clubs & Committees", desc: "Students are encouraged to join specific academic clubs (Science, IT, Literature) to organize exhibitions, seminars, and peer-learning sessions.", icon: <Monitor /> },
    { title: "Annual Events", desc: "Formal celebration of national festivals, the School Annual Day, and formal talent hunts are organized to provide a stage for artistic performance.", icon: <Music /> }
  ];

  return (
    <div className="bg-neutral-50 font-sans overflow-hidden">
      
      {/* Hero Section with abstract shapes */}
      <div className="relative bg-primary-900 py-32 md:py-40 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-primary-800 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-blue-600 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl px-4">
          <span className="text-primary-300 font-bold tracking-widest uppercase text-sm mb-6 block">Beyond the Classroom</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">Co-Curricular <br className="hidden md:block" /> Life at Edhaa</h1>
          <p className="text-xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
            Education extends beyond four walls. Our structured activities build character, resilience, and leadership skills in alignment with ICSE mandates.
          </p>
        </motion.div>
      </div>

      {/* Asymmetrical Activities Grid */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Spotlight Card (Spans 2 columns on lg) */}
          <motion.div variants={fadeUp} className="lg:col-span-2 relative bg-primary-900 text-white p-10 md:p-14 overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <img src={schoolImage} alt="Scout and Guides" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
            <div className="relative z-20 h-full flex flex-col justify-end">
              <Shield className="w-16 h-16 text-primary-300 mb-8" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Scout & Guides</h3>
              <p className="text-lg text-primary-100 max-w-xl leading-relaxed">
                The Bharat Scouts and Guides unit is dedicated to developing the physical, intellectual, emotional, and social potentials of young people. Regular camps and community service build lifelong civic responsibility.
              </p>
            </div>
          </motion.div>

          {/* Standard Cards */}
          {activities.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white border border-neutral-200 p-10 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-8 flex items-center text-primary-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Activity Calendar Spotlight */}
      <div className="bg-primary-50 py-24 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Academic Year 2025-26</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">Activity Calendar</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              Our comprehensive calendar ensures students balance their rigorous academic schedules with creative, physical, and cultural pursuits throughout the year.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { date: "15 Aug", title: "Independence Day & March Past" },
                { date: "05 Sep", title: "Teachers' Day Special Assembly" },
                { date: "14 Nov", title: "Children's Day & Cultural Fest" },
                { date: "Dec 2025", title: "Inter-House Sports Meet" }
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-white shadow-sm border border-neutral-100 hover:border-primary-300 transition-colors">
                  <div className="bg-primary-100 text-primary-800 font-bold px-4 py-2 text-center min-w-[90px] rounded-sm">
                    {event.date}
                  </div>
                  <div className="font-bold text-neutral-800 text-lg">{event.title}</div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 bg-primary-600 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30">
              <CalendarDays className="w-5 h-5" /> Download Full PDF
            </button>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-6 opacity-10"></div>
            <div className="bg-white p-10 md:p-14 shadow-2xl rounded-3xl relative z-10 border border-neutral-100">
              <h4 className="text-2xl font-bold text-primary-900 mb-8 border-b border-neutral-200 pb-4">Science & Innovation</h4>
              <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                To promote scientific temper and analytical thinking, we host an Annual Science Exhibition where students from Classes VI to XII showcase innovative models and projects. Outstanding projects are forwarded to regional ICSE science exhibitions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-6 text-center rounded-xl border border-neutral-100">
                  <div className="text-3xl font-black text-primary-600 mb-1">150+</div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Projects Annually</div>
                </div>
                <div className="bg-neutral-50 p-6 text-center rounded-xl border border-neutral-100">
                  <div className="text-3xl font-black text-primary-600 mb-1">100%</div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Participation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}