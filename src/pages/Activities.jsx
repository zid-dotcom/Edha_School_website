import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      title: "Sports & Athletics",
      desc: "Encouraging physical fitness, teamwork, and competitive spirit through structured sports programs. From football to track and field.",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200",
      tag: "Physical"
    },
    {
      title: "Arts & Crafts",
      desc: "Fostering creativity and imagination through hands-on artistic activities. Exploring various mediums from painting to sculpture.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
      tag: "Creative"
    },
    {
      title: "Music & Dance",
      desc: "Promoting cultural expression and confidence through music and performing arts. Classical to contemporary forms.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200",
      tag: "Performing Arts"
    },
    {
      title: "Clubs & Programs",
      desc: "Providing opportunities for leadership, collaboration, and skill development through various academic and hobby clubs.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      tag: "Leadership"
    },
  ];

  return (
    <div className="bg-neutral-50 pt-20">
      
      {/* HEADER SECTION */}
      <section className="py-24 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-neutral-200 text-sm font-semibold text-primary-600 mb-8">
            Student Life @ EDHAA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tight">
            Beyond the <br className="hidden md:block"/> classroom.
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            We believe in holistic development. Discover your passion, build new skills, and make lifelong friends through our diverse co-curricular activities.
          </p>
        </motion.div>
      </section>

      {/* ACTIVITIES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {activities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-neutral-900 shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="bg-primary-900 py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl text-white font-serif italic leading-tight">
            "Education is not just about books. It's about experiences, creativity, and growth."
          </p>
        </div>
      </section>

    </div>
  );
}