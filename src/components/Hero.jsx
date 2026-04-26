import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import schoolImage from "../assets/SchoolImage.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[90vh] bg-white flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 items-center gap-16 z-10 relative">
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wide mb-6 w-fit border border-primary-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            ADMISSIONS OPEN FOR 2024-2025
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
            Education that <br />
            <span className="text-primary-600 inline-block mt-2">shapes the future.</span>
          </h1>

          <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
            We foster a culture of excellence, empowering students with the knowledge, discipline, and critical thinking needed to thrive in a dynamic world.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => navigate("/Academics")}
              className="flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
            >
              Explore Academics
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate("/AboutUs")}
              className="px-8 py-4 rounded-xl font-semibold text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all shadow-sm"
            >
              Learn More
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-100">
            <div>
              <div className="flex items-center gap-2 text-primary-600 mb-2">
                <Users className="w-5 h-5" />
                <span className="text-2xl font-bold text-neutral-900">2.5k+</span>
              </div>
              <p className="text-sm text-neutral-500 font-medium">Active Students</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary-600 mb-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-2xl font-bold text-neutral-900">50+</span>
              </div>
              <p className="text-sm text-neutral-500 font-medium">Programs</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary-600 mb-2">
                <Trophy className="w-5 h-5" />
                <span className="text-2xl font-bold text-neutral-900">100%</span>
              </div>
              <p className="text-sm text-neutral-500 font-medium">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <img
            src={schoolImage}
            alt="Students at EDHAA Public School"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-8 left-8 right-8 z-20 glass-card rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Awarded Excellence</h3>
                <p className="text-white/80 text-sm">Best Regional School 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}