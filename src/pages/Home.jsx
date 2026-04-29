import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import schoolImage from '../assets/SchoolImage.jpg';
import Testimonial from '../components/Testimonials';
import { BookOpen, Trophy, Globe, Heart, ArrowRight, Bell } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], ['0%', '30%']);

  return (
    <div className="bg-neutral-50 font-sans pb-10 overflow-hidden">
      
      {/* 1. HERO SECTION (PARALLAX) */}
      <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-neutral-900">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/50 to-transparent z-10"></div>
          <img 
            src={schoolImage} 
            alt="Edhaa Public School Campus" 
            className="w-full h-full object-cover object-center animate-slow-zoom" 
          />
        </motion.div>
        
        <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest mb-8 border border-white/20 uppercase shadow-sm"
            >
              Admissions Open 2025-26
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl"
            >
              Excellence in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-white">Education</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-2xl text-primary-50 mb-10 max-w-2xl font-medium drop-shadow-md leading-relaxed"
            >
              Empowering students to discover their true potential and develop a passion for lifelong learning in a secure, stimulating environment.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <Link to="/AboutUs" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2 tracking-wide text-sm md:text-base">
                Discover Edhaa <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/Contact" className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-primary-900 text-white px-8 py-4 rounded-md shadow-lg font-bold transition-all transform hover:-translate-y-1 tracking-wide text-sm md:text-base">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 2. ANNOUNCEMENTS TICKER */}
      <div className="bg-white border-b border-neutral-200 shadow-md relative z-30">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="bg-primary-700 text-white font-bold px-6 py-4 whitespace-nowrap text-sm flex items-center gap-2 uppercase tracking-widest shadow-[4px_0_15px_-3px_rgba(0,0,0,0.3)] z-10">
            <Bell className="w-4 h-4 animate-pulse" /> Announcements
          </div>
          <div className="marquee-container w-full py-4 px-6 text-primary-800 text-sm font-semibold flex items-center overflow-hidden bg-neutral-50/50">
            <div className="marquee-content flex gap-12 whitespace-nowrap">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(66,127,184,0.8)]"></span>
                <Link to="/NewsAndEvenets" className="hover:text-primary-500 transition-colors">Admissions Open for Academic Session 2025-26. Click here to download forms.</Link>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(66,127,184,0.8)]"></span>
                <Link to="/NewsAndEvenets" className="hover:text-primary-500 transition-colors">Annual Sports Meet scheduled for 15th December.</Link>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(66,127,184,0.8)]"></span>
                <Link to="/NewsAndEvenets" className="hover:text-primary-500 transition-colors">Parent-Teacher Meeting (PTM) for Term 1 results on Saturday.</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WELCOME & ABOUT SECTION */}
      <section className="bg-primary-50 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white rounded-l-full opacity-50 -z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative lg:-translate-y-8"
            >
              <div className="absolute inset-0 bg-primary-600 rounded-xl transform -translate-x-6 translate-y-8 -z-10 shadow-2xl"></div>
              <img src={schoolImage} alt="About Edhaa" className="w-full h-[450px] lg:h-[550px] object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)]" />
              <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-xl shadow-2xl hidden md:block border-b-4 border-primary-600">
                <div className="text-5xl font-extrabold text-primary-700 mb-2">15+</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Years of<br/>Excellence</div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 lg:pl-12"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-primary-500 rounded-full" />
                <span className="text-primary-600 text-sm font-extrabold tracking-widest uppercase">Welcome to Edhaa</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8 leading-tight">
                A Premier Educational Institution in Bengaluru
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-10">
                <p>
                  Located in Whitefield, Bengaluru, Edhaa Public School is affiliated to the Council for the Indian School Certificate Examinations (ICSE). We offer a comprehensive educational program from Kindergarten to Senior Secondary levels.
                </p>
                <p>
                  Our campus boasts state-of-the-art infrastructure designed to facilitate modern pedagogical practices. We ensure that every student receives individualized attention to foster their unique talents and prepare them for future global challenges.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link to="/AboutUs" className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 font-bold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group border border-neutral-100 uppercase tracking-wide text-sm">
                  Read Our Full Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. KEY HIGHLIGHTS / WHY CHOOSE US */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-neutral-900 mb-6 tracking-tight">The Edhaa Advantage</motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></motion.div>
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">Providing a holistic environment that nurtures intellectual growth and character development.</motion.p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous ICSE curriculum fostering critical thinking." },
              { icon: Trophy, title: "Sports & Athletics", desc: "State-of-the-art facilities for holistic development." },
              { icon: Globe, title: "Global Exposure", desc: "Preparing students for international opportunities." },
              { icon: Heart, title: "Value Education", desc: "Instilling strong morals and ethical principles." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-10 rounded-2xl bg-white border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary-100 transition-all duration-300 group text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 text-primary-600 shadow-inner">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. MESSAGES FROM MANAGEMENT */}
      <section className="bg-neutral-50 py-24 md:py-32 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Secretary Message */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100/50 p-10 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-50/50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125"></div>
              <div className="w-36 h-36 flex-shrink-0">
                <img src="https://ui-avatars.com/api/?name=Mahalakshmi+N+Reddy&background=1b4d90&color=fff&size=144" alt="Secretary" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary-600 text-xs font-extrabold uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full">Secretary's Message</span>
                </div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">Smt. Mahalakshmi N Reddy</h3>
                <p className="text-primary-700 font-medium italic mb-5">"Education is the most powerful catalyst for social transformation."</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  At Edhaa Public School, our constant endeavor is to provide a safe, secure, and stimulating environment where children can discover their true potential and develop a passion for lifelong learning.
                </p>
                <Link to="/AboutUs" className="inline-flex items-center text-primary-600 text-sm font-bold uppercase tracking-wider hover:text-primary-800 transition-colors">Read More <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </motion.div>

            {/* Director Message */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100/50 p-10 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-50/50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125"></div>
              <div className="w-36 h-36 flex-shrink-0">
                <img src="https://ui-avatars.com/api/?name=Thrilok+S&background=1b4d90&color=fff&size=144" alt="Director" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary-600 text-xs font-extrabold uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full">Director's Message</span>
                </div>
                <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">Shri. Thrilok S</h3>
                <p className="text-primary-700 font-medium italic mb-5">"Nurturing students who are intellectually competent."</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  We aim to nurture students who are morally upright and socially committed. Our focus is on holistic development through rigorous academic curriculum supported by robust co-curricular activities.
                </p>
                <Link to="/AboutUs" className="inline-flex items-center text-primary-600 text-sm font-bold uppercase tracking-wider hover:text-primary-800 transition-colors">Read More <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. LATEST NEWS & QUICK LINKS */}
      <section className="bg-primary-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Latest News */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-10 border-b border-primary-700 pb-4">
              <h2 className="text-3xl font-extrabold tracking-wide">Latest Updates</h2>
              <Link to="/NewsAndEvenets" className="text-sm font-bold text-primary-300 hover:text-white flex items-center gap-2 uppercase tracking-wider transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { date: "24", month: "Apr", title: "Registration Form for Class I Admissions 2025-26", category: "Admissions" },
                { date: "18", month: "Apr", title: "Circular regarding Summer Vacation Dates", category: "Circular" },
                { date: "03", month: "Mar", title: "Syllabus distribution for Term 1 Assessments", category: "Academic" },
                { date: "01", month: "Mar", title: "Recruitment Notice: Walk-in Interview for PGT/TGT", category: "Careers" }
              ].map((news, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="bg-primary-800/40 rounded-xl p-6 flex gap-6 hover:bg-primary-800 hover:-translate-y-1 transition-all duration-300 border border-primary-700/50 shadow-lg"
                >
                  <div className="flex flex-col items-center justify-center bg-white text-primary-900 rounded-lg w-20 h-20 flex-shrink-0 shadow-inner">
                    <span className="text-2xl font-black leading-none mb-1">{news.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{news.month}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary-300 font-bold mb-2 block">{news.category}</span>
                    <h4 className="font-semibold text-sm leading-relaxed line-clamp-2 hover:text-primary-200 cursor-pointer">{news.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-4"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold mb-10 border-b border-primary-700 pb-4 tracking-wide">Quick Links</motion.h2>
            <div className="flex flex-col gap-4">
              {[
                { name: "Academics", path: "/Academics" },
                { name: "Infrastructure & Facilities", path: "/Facilities" },
                { name: "Co-Curricular Activities", path: "/Activities" },
                { name: "Admissions Query", path: "/Contact" },
                { name: "Mandatory Public Disclosure", path: "/AboutUs" }
              ].map((link, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Link to={link.path} className="flex items-center justify-between bg-primary-800/60 p-5 rounded-xl hover:bg-white hover:text-primary-900 transition-all duration-300 border border-primary-700/50 group shadow-md">
                    <span className="font-bold text-sm tracking-wide">{link.name}</span>
                    <div className="bg-primary-700 group-hover:bg-primary-100 p-2 rounded-full transition-colors">
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-primary-700" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. CAMPUS LIFE / GALLERY */}
      <section className="py-24 md:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-end justify-between mb-12"
          >
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-primary-500 rounded-full" />
                <span className="text-primary-600 text-sm font-extrabold tracking-widest uppercase">Gallery</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-neutral-900 tracking-tight">Explore Campus Life</motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Link to="/Activities" className="hidden md:inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-colors group uppercase tracking-widest text-sm">
                View All Activities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <motion.div variants={fadeInUp} className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img src={schoolImage} alt="Campus" className="w-full h-full object-cover min-h-[300px] md:min-h-[450px] group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-extrabold text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Annual Day Celebrations</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img src={schoolImage} alt="Sports" className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white font-bold tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Sports Meet</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img src={schoolImage} alt="Lab" className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white font-bold tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Science Exhibition</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img src={schoolImage} alt="Library" className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white font-bold tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Library Session</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img src={schoolImage} alt="Art" className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="text-white font-bold tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Art & Craft</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/Activities" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-colors uppercase tracking-widest text-sm">
              View All Activities <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. STATISTICS */}
      <section className="bg-primary-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-primary-200 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center px-4">
            <div className="text-5xl md:text-6xl font-black text-primary-700 mb-3 drop-shadow-sm">1200+</div>
            <div className="text-[11px] font-black text-primary-500 uppercase tracking-[0.2em]">Students Enrolled</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center px-4">
            <div className="text-5xl md:text-6xl font-black text-primary-700 mb-3 drop-shadow-sm">80+</div>
            <div className="text-[11px] font-black text-primary-500 uppercase tracking-[0.2em]">Expert Faculty</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center px-4">
            <div className="text-5xl md:text-6xl font-black text-primary-700 mb-3 drop-shadow-sm">100%</div>
            <div className="text-[11px] font-black text-primary-500 uppercase tracking-[0.2em]">Pass Result</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center px-4">
            <div className="text-5xl md:text-6xl font-black text-primary-700 mb-3 drop-shadow-sm">15+</div>
            <div className="text-[11px] font-black text-primary-500 uppercase tracking-[0.2em]">Sports Facilities</div>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. TESTIMONIALS */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <Testimonial />
      </motion.div>

    </div>
  )
}

export default Home;
