import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Camera, Image as ImageIcon, Sparkles, Filter } from "lucide-react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  // Sample data - you can replace this with your actual API data later
  const galleryItems = [
    {
      id: 1,
      title: "Annual Sports Meet",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1526976663112-00d539745fdd?q=80&w=1470&auto=format&fit=crop",
      date: "Oct 2025",
    },
    {
      id: 2,
      title: "Science Exhibition",
      category: "Academics",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1632&auto=format&fit=crop",
      date: "Nov 2025",
    },
    {
      id: 3,
      title: "Cultural Fest",
      category: "Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop",
      date: "Dec 2025",
    },
    {
      id: 4,
      title: "Art Workshop",
      category: "Events",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop",
      date: "Jan 2026",
    },
    {
      id: 5,
      title: "Basketball Tournament",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1490&auto=format&fit=crop",
      date: "Feb 2026",
    },
    {
      id: 6,
      title: "Robotics Club",
      category: "Academics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
      date: "Mar 2026",
    },
  ];

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
  };

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-slate-950 font-sans text-white min-h-screen selection:bg-primary-500 selection:text-white overflow-hidden">
      
      {/* --- HERO SECTION: FULL-WIDTH IMMERSIVE --- */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=1473&auto=format&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/80 z-10" />
        </motion.div>

        <div className="relative z-20 w-full px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
              Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Story</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide drop-shadow-md">
              Capturing moments. Preserving memories.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- GALLERY SECTION: MASONRY COLLAGE --- */}
      <section className="py-24 relative z-30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          
          {/* Filters - Glassmorphism */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 bg-white/5 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 text-white">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-2xl border border-primary-500/20">
                <Filter size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl">Curated Collection</h3>
                <p className="text-sm text-slate-400">Filter moments by category</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 border ${
                    activeTab === category
                      ? "bg-white text-slate-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                      : "bg-transparent text-slate-300 hover:bg-white/10 border-white/20 hover:border-white/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid: Masonry Layout */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-slate-900 shadow-xl cursor-pointer border border-white/5"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out ${index % 4 === 0 ? 'h-[500px]' : index % 3 === 0 ? 'h-[400px]' : index % 2 === 0 ? 'h-[600px]' : 'h-[350px]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Hover Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 delay-100">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                          <ImageIcon className="text-white" size={24} />
                       </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-4 py-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/10 shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-widest mb-3">
                      <Sparkles size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-32 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 mt-10">
              <ImageIcon className="mx-auto text-slate-500 mb-6" size={80} />
              <h3 className="text-3xl font-black text-white mb-3">No visual records found</h3>
              <p className="text-slate-400 text-lg">We haven't captured any moments in this category yet.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
