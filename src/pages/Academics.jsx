// import { motion } from "framer-motion";
// import { BookOpen, GraduationCap, Microscope, Code, Globe, Library, CheckCircle2, CalendarDays } from "lucide-react";
// import { useState, useEffect, useContext } from "react";
// import { AppContext } from "../context/Appcontext";
// import axios from "axios";

// export default function Academics() {
//   const { backendURL } = useContext(AppContext);
//   const [academics, setAcademics] = useState([]);

//   useEffect(() => {
//     const fetchAcademics = async () => {
//       try {
//         const res = await axios.get(`${backendURL}/academic/get`);
//         const data = res.data;
//         if (Array.isArray(data)) {
//           setAcademics(data);
//         } else if (data && Array.isArray(data.academic)) {
//           setAcademics(data.academic);
//         } else if (data && Array.isArray(data.academics)) {
//           setAcademics(data.academics);
//         } else if (data && Array.isArray(data.data)) {
//           setAcademics(data.data);
//         } else {
//           setAcademics([]);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     if (backendURL) {
//       fetchAcademics();
//     }
//   }, [backendURL]);
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
//   };

//   const stagger = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//   };

//   const levels = [
//     {
//       title: "Pre-Primary & Primary",
//       desc: "Building core literacy, numeracy, and communication skills through engaging, activity-based learning.",
//       icon: <BookOpen className="w-10 h-10" />,
//       color: "bg-blue-50 text-blue-600 border-blue-200"
//     },
//     {
//       title: "Middle School",
//       desc: "Emphasizing conceptual understanding and analytical thinking in sciences, mathematics, and languages.",
//       icon: <Microscope className="w-10 h-10" />,
//       color: "bg-indigo-50 text-indigo-600 border-indigo-200"
//     },
//     {
//       title: "Secondary & Senior Secondary",
//       desc: "Preparing for ICSE board examinations with structured curriculum, evaluation, and career guidance.",
//       icon: <GraduationCap className="w-10 h-10" />,
//       color: "bg-primary-50 text-primary-600 border-primary-200"
//     },
//   ];

//   return (
//     <div className="bg-neutral-50 font-sans">
      
//       {/* Structural Hero Section */}
//       <div className="bg-primary-900 py-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800 skew-x-[-20deg] origin-bottom -z-0 opacity-50"></div>
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">Academic <br/><span className="text-primary-300">Excellence</span></h1>
//             <p className="text-xl text-primary-100 max-w-2xl leading-relaxed">
//               Empowering the next generation with a rigorous, inclusive, and future-ready ICSE curriculum designed to foster critical thinking.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Intro & Levels (Zig-Zag / Staggered Cards) */}
//       <div className="py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-3xl mb-20">
//             <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Framework</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight mb-6">
//               Building Strong Foundations for Higher Education
//             </h3>
//             <p className="text-neutral-600 text-lg leading-relaxed">
//               We strictly adhere to the curriculum guidelines prescribed by the Council for the Indian School Certificate Examinations (ICSE), ensuring a standardized educational experience that prepares students for competitive environments.
//             </p>
//           </motion.div>

//           <motion.div 
//             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
//             className="grid md:grid-cols-3 gap-8"
//           >
//             {(academics.length > 0 ? academics : levels).map((item, i) => {
//               const isDynamic = academics.length > 0;
//               const title = isDynamic ? item.title : item.title;
//               const desc = isDynamic ? item.description : item.desc;
//               const color = isDynamic ? ["bg-blue-50 text-blue-600 border-blue-200", "bg-indigo-50 text-indigo-600 border-indigo-200", "bg-primary-50 text-primary-600 border-primary-200"][i % 3] : item.color;
              
//               return (
//                 <motion.div key={i} variants={fadeUp} className={`p-8 border ${color} bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-tr-3xl rounded-bl-3xl flex flex-col`}>
//                   {isDynamic && item.image ? (
//                     <img src={item.image} alt={title} className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm" />
//                   ) : (
//                     <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-8 ${color} bg-opacity-50`}>
//                       {isDynamic ? <BookOpen className="w-10 h-10" /> : item.icon}
//                     </div>
//                   )}
//                   <h4 className="text-2xl font-bold mb-4 text-neutral-800">{title}</h4>
//                   <p className="text-neutral-600 leading-relaxed flex-1 whitespace-pre-line">{desc}</p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>

//       {/* Learning Methodology - Dark Visual Section */}
//       <div className="bg-neutral-900 py-24 text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">Learning Methodology</h2>
//             <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: <Globe />, title: "Smart Classrooms", desc: "Technology-enabled spaces utilizing digital boards to enhance visual learning." },
//               { icon: <Library />, title: "Expert Faculty", desc: "Highly trained educators dedicated to providing structured academic guidance." },
//               { icon: <Code />, title: "Practical Learning", desc: "Mandatory laboratory sessions and projects for hands-on experience." }
//             ].map((item, i) => (
//               <motion.div key={i} variants={fadeUp} className="group p-8 border border-neutral-800 hover:border-primary-500 bg-neutral-800/50 transition-colors">
//                 <div className="text-primary-400 mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
//                 <h4 className="text-xl font-bold mb-3">{item.title}</h4>
//                 <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Curriculum & Results - Split Layout */}
//       <div className="py-24 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-8">
//             <div>
//               <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">ICSE Integration</h2>
//               <h3 className="text-3xl font-bold text-primary-900 mb-4">Curriculum Highlights</h3>
//               <p className="text-neutral-600 text-lg leading-relaxed mb-6">
//                 Continuously updated to meet the latest National Education Policy (NEP) guidelines, our curriculum ensures holistic development through rigorous academic standards.
//               </p>
//               <ul className="space-y-4">
//                 {["Experiential learning and critical thinking", "Integration of Art and Sports", "Continuous and Comprehensive Evaluation", "Strict adherence to NCERT/ICSE materials"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
//                     <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-primary-50 p-10 md:p-14 relative">
//             <div className="absolute top-0 right-0 w-full h-full border-t-8 border-r-8 border-primary-600 translate-x-4 -translate-y-4 -z-10"></div>
//             <h3 className="text-3xl font-bold text-primary-900 mb-8 border-b-2 border-primary-200 pb-4">Result Analysis</h3>
//             <p className="text-neutral-600 mb-10 leading-relaxed">
//               A proud tradition of producing excellent results in the ICSE Board Examinations year after year, showcasing the dedication of our students and teachers.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-8">
//               <div className="flex-1 bg-white p-6 shadow-md text-center border-b-4 border-primary-600">
//                 <div className="text-5xl font-black text-primary-700 mb-2">100%</div>
//                 <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Class X Pass Rate</div>
//               </div>
//               <div className="flex-1 bg-white p-6 shadow-md text-center border-b-4 border-primary-600">
//                 <div className="text-5xl font-black text-primary-700 mb-2">100%</div>
//                 <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Class XII Pass Rate</div>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>

//       {/* Examination Schedule */}
//       <div className="py-24 bg-neutral-100 border-t border-neutral-200">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
//             <CalendarDays className="w-12 h-12 text-primary-600 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Examination Schedule</h2>
//             <p className="text-neutral-600 text-lg mb-10">The academic year is divided into distinct terms with rigorous periodic assessments to evaluate student progress consistently.</p>
//           </motion.div>
          
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white shadow-xl overflow-hidden rounded-xl border border-neutral-200 text-left">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-primary-900 text-white">
//                     <th className="p-4 font-bold tracking-wide">Examination Name</th>
//                     <th className="p-4 font-bold tracking-wide">Tentative Schedule</th>
//                     <th className="p-4 font-bold tracking-wide">Applicable For</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-neutral-100">
//                   {[
//                     { name: "Periodic Test 1", time: "July - August", classes: "I to XII" },
//                     { name: "Half Yearly / Term 1", time: "September - October", classes: "I to XII" },
//                     { name: "Periodic Test 2 / Pre-Board", time: "December - January", classes: "I to XII" },
//                     { name: "Annual Examination", time: "February - March", classes: "I to IX & XI" },
//                   ].map((exam, i) => (
//                     <tr key={i} className="hover:bg-neutral-50 transition-colors">
//                       <td className="p-4 font-bold text-primary-800">{exam.name}</td>
//                       <td className="p-4 text-neutral-600">{exam.time}</td>
//                       <td className="p-4 text-neutral-600 font-medium">{exam.classes}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//     </div>
//   );
// }











// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   BookOpen,
//   Globe,
//   CheckCircle2,
//   Calendar,
//   ArrowUpRight,
//   GraduationCap
// } from "lucide-react";
// import { useState, useEffect, useContext, useRef } from "react";
// import { AppContext } from "../context/Appcontext";
// import axios from "axios";

// export default function Academics() {
//   const { backendURL } = useContext(AppContext);
//   const [academics, setAcademics] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Parallax Ref
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   useEffect(() => {
//     const fetchAcademics = async () => {
//       try {
//         const res = await axios.get(`${backendURL}/academic/get`);
//         const data = res.data;
//         if (Array.isArray(data)) setAcademics(data);
//         else if (data?.academic) setAcademics(data.academic);
//         else setAcademics([]);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (backendURL) fetchAcademics();
//   }, [backendURL]);

//   const latest = academics[0] || {};
//   const allLevels = academics.flatMap(a => a.levels || []);
//   const allMethodology = academics.flatMap(a => a.methodology || []);
//   const allCurriculum = academics.flatMap(a => a.curriculum || []);
//   const allExams = academics.flatMap(a => a.exams || []);
//   const resultsData = latest.results || {};

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { type: "spring", stiffness: 100, damping: 15 } 
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh]">
//         <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
//         <p className="mt-4 text-gray-500 font-medium">Preparing Academic Excellence...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white font-sans selection:bg-primary-100 selection:text-primary-900">
      
//       {/* HERO SECTION - PARALLAX & GLASSMOPHISM */}
//       <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden bg-neutral-950">
//         <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10" />
//           <img
//             src={latest.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"}
//             alt="Hero Background"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="max-w-2xl"
//           >
//             <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary-400 uppercase bg-primary-950/50 border border-primary-800 rounded-full backdrop-blur-md">
//               Academic Excellence
//             </span>
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
//               {latest.title}
//             </h1>
//             <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed">
//               {latest.description}
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
//                 Explore Curriculum <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* LEVELS SECTION - MODERN CARDS */}
//       <section className="py-32 relative bg-neutral-50/50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16">
//             <h2 className="text-sm font-black uppercase tracking-widest text-primary-600 mb-2">Our Foundation</h2>
//             <h3 className="text-4xl font-bold text-neutral-900">Education Levels</h3>
//           </div>

//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {allLevels.map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 whileHover={{ y: -10 }}
//                 className="group relative p-10 bg-white border border-neutral-200 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
//                   <BookOpen size={120} />
//                 </div>
//                 <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 transition-colors duration-300">
//                   <BookOpen className="text-primary-600 group-hover:text-white" />
//                 </div>
//                 <h4 className="font-bold text-2xl mb-4 text-neutral-900">{item.title}</h4>
//                 <p className="text-neutral-600 leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* METHODOLOGY - DARK MODE PREMIUM */}
//       <section className="bg-neutral-950 py-32 overflow-hidden relative">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Methodology</h2>
//             <p className="text-neutral-400 max-w-2xl mx-auto">A holistic approach to learning that bridges the gap between theoretical knowledge and practical innovation.</p>
//           </div>

//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-3 gap-1"
//           >
//             {allMethodology.map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 variants={itemVariants} 
//                 className="p-10 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors group"
//               >
//                 <Globe className="mb-6 text-primary-400 group-hover:scale-110 transition-transform duration-300" size={32} />
//                 <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
//                 <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors">{item.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CURRICULUM & RESULTS - BENTO STYLE */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
//             <motion.div 
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="lg:col-span-7 bg-neutral-50 p-12 rounded-[2rem] border border-neutral-100"
//             >
//               <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
//                 <GraduationCap className="text-primary-600" />
//                 Global Curriculum
//               </h3>
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {allCurriculum.map((item, i) => (
//                   <motion.div 
//                     key={i} 
//                     initial={{ opacity: 0 }} 
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm"
//                   >
//                     <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
//                     <span className="font-medium text-neutral-700">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="lg:col-span-5 bg-primary-600 p-12 rounded-[2rem] text-white flex flex-col justify-center relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
//               <h3 className="text-3xl font-bold mb-10 relative z-10">Academic Results</h3>
//               <div className="space-y-6 relative z-10">
//                 <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
//                   <div className="text-6xl font-black mb-1">{resultsData.class10}</div>
//                   <p className="text-primary-100 font-medium tracking-wide uppercase text-sm">Class X Board Success</p>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
//                   <div className="text-6xl font-black mb-1">{resultsData.class12}</div>
//                   <p className="text-primary-100 font-medium tracking-wide uppercase text-sm">Class XII Board Success</p>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* EXAMS - CLEAN DATA DESIGN */}
//       <section className="py-32 bg-neutral-50">
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <Calendar className="mx-auto mb-4 text-primary-600" size={40} />
//             <h2 className="text-4xl font-bold text-neutral-900">Examination Schedule</h2>
//             <p className="text-neutral-500 mt-4">Standardized assessments scheduled throughout the academic year.</p>
//           </div>

//           <motion.div 
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="overflow-hidden rounded-3xl border border-neutral-200 shadow-xl bg-white"
//           >
//             <div className="overflow-x-auto">
//               <table className="w-full text-left">
//                 <thead className="bg-neutral-900 text-white">
//                   <tr>
//                     <th className="px-8 py-6 font-semibold uppercase text-xs tracking-widest">Assessment Name</th>
//                     <th className="px-8 py-6 font-semibold uppercase text-xs tracking-widest">Tentative Schedule</th>
//                     <th className="px-8 py-6 font-semibold uppercase text-xs tracking-widest text-right">Applicable Classes</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-neutral-100">
//                   {allExams.map((exam, i) => (
//                     <tr key={i} className="hover:bg-primary-50/30 transition-colors">
//                       <td className="px-8 py-6 font-bold text-neutral-800">{exam.name}</td>
//                       <td className="px-8 py-6 text-neutral-600">
//                         <span className="inline-flex items-center gap-2">
//                           <div className="w-2 h-2 rounded-full bg-primary-500" />
//                           {exam.schedule}
//                         </span>
//                       </td>
//                       <td className="px-8 py-6 text-right">
//                         <span className="px-4 py-1 bg-neutral-100 rounded-full text-sm font-medium text-neutral-600">
//                           {exam.classes}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// }









// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   BookOpen,
//   Globe,
//   CheckCircle2,
//   Calendar,
//   ArrowUpRight,
//   GraduationCap,
//   Sparkles
// } from "lucide-react";
// import { useState, useEffect, useContext, useRef } from "react";
// import { AppContext } from "../context/Appcontext";
// import axios from "axios";

// export default function Academics() {
//   const { backendURL } = useContext(AppContext);
//   const [academics, setAcademics] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   useEffect(() => {
//     const fetchAcademics = async () => {
//       try {
//         const res = await axios.get(`${backendURL}/academic/get`);
//         const data = res.data;
//         if (Array.isArray(data)) setAcademics(data);
//         else if (data?.academic) setAcademics(data.academic);
//         else setAcademics([]);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (backendURL) fetchAcademics();
//   }, [backendURL]);

//   const latest = academics[0] || {};
//   const allLevels = academics.flatMap(a => a.levels || []);
//   const allMethodology = academics.flatMap(a => a.methodology || []);
//   const allCurriculum = academics.flatMap(a => a.curriculum || []);
//   const allExams = academics.flatMap(a => a.exams || []);
//   const resultsData = latest.results || {};

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const fadeInUp = {
//     hidden: { y: 40, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20 } }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//         <motion.div 
//           animate={{ rotate: 360 }} 
//           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//           className="w-12 h-12 border-4 border-primary-100 border-t-primary-600 rounded-full"
//         />
//       </div>
//     );
//   }

//   return (
//     <div ref={containerRef} className="bg-white font-sans text-slate-900 overflow-x-hidden">
      
//       {/* --- HERO SECTION: LIGHT & AIRY --- */}
//       <section ref={heroRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-50">
//         <motion.div style={{ y, opacity: heroOpacity }} className="absolute inset-0 z-0">
//           <img
//             src={latest.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"}
//             alt="Hero"
//             className="w-full h-full object-cover"
//           />
//           {/* Subtle Light Overlay to prevent "Black BG" look */}
//           <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white z-10" />
//         </motion.div>

//         <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest text-primary-700 uppercase bg-primary-50 rounded-full border border-primary-100 shadow-sm">
//               <Sparkles size={14} /> Shaping Future Leaders
//             </span>
//             <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight">
//               {latest.title}
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
//               {latest.description}
//             </p>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 py-5 bg-primary-600 text-white font-bold rounded-full shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all flex items-center gap-3 mx-auto"
//             >
//               Explore Curriculum <ArrowUpRight size={20} />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- LEVELS SECTION: NEUMORPHIC LIGHT --- */}
//       <section className="py-32 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
//             <div>
//               <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3">Academic Structure</h2>
//               <h3 className="text-4xl md:text-5xl font-black text-slate-900">Education Levels</h3>
//             </div>
//             <p className="text-slate-500 max-w-md text-lg">Comprehensive learning pathways tailored for every stage of development.</p>
//           </div>

//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid md:grid-cols-3 gap-8"
//           >
//             {allLevels.map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:border-primary-200 transition-all duration-500 relative overflow-hidden"
//               >
//                 <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
//                   <BookOpen size={32} />
//                 </div>
//                 <h4 className="font-bold text-2xl mb-4 text-slate-900 group-hover:text-primary-600 transition-colors">{item.title}</h4>
//                 <p className="text-slate-500 leading-relaxed text-lg">{item.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* --- METHODOLOGY: SOFT GLASS --- */}
//       <section className="py-32 bg-slate-50/50 border-y border-slate-100 relative">
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/30 blur-[100px] rounded-full -z-10" />
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Methodology</h2>
//             <p className="text-slate-500 text-xl">We blend traditional pedagogy with modern innovation to create an immersive learning environment.</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {allMethodology.map((item, i) => (
//               <motion.div 
//                 key={i}
//                 whileHover={{ y: -5 }}
//                 className="p-8 bg-white/70 backdrop-blur-md border border-white rounded-3xl shadow-sm"
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
//                     <Globe size={24} />
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CURRICULUM & RESULTS: COLORFUL BENTO --- */}
//       <section className="py-32">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-8">
            
//             {/* Curriculum Card */}
//             <motion.div 
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="lg:col-span-7 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-100"
//             >
//               <div className="flex items-center gap-4 mb-10">
//                 <div className="p-4 bg-primary-50 text-primary-600 rounded-2xl">
//                   <GraduationCap size={32} />
//                 </div>
//                 <h3 className="text-3xl font-black">Global Curriculum</h3>
//               </div>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {allCurriculum.map((item, i) => (
//                   <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-primary-50 hover:border-primary-100 transition-colors">
//                     <CheckCircle2 className="text-primary-600" size={20} />
//                     <span className="font-semibold text-slate-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Results Card */}
//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="lg:col-span-5 bg-primary-600 p-12 rounded-[3rem] text-white flex flex-col justify-between shadow-2xl shadow-primary-200 relative overflow-hidden"
//             >
//               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
//               <h3 className="text-3xl font-bold mb-8">Academic Milestones</h3>
//               <div className="space-y-6">
//                 <div className="bg-white/20 backdrop-blur-md p-8 rounded-[2rem] border border-white/30 text-center">
//                   <div className="text-7xl font-black">{resultsData.class10}</div>
//                   <p className="uppercase tracking-widest text-xs font-bold opacity-80 mt-2">Class X Board Average</p>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur-md p-8 rounded-[2rem] border border-white/30 text-center">
//                   <div className="text-7xl font-black">{resultsData.class12}</div>
//                   <p className="uppercase tracking-widest text-xs font-bold opacity-80 mt-2">Class XII Board Average</p>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* --- EXAMS: MODERN DATA VIEW --- */}
//       <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 mb-10 overflow-hidden relative shadow-2xl">
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
//             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500 blur-[120px] rounded-full" />
//         </div>
        
//         <div className="max-w-5xl mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <Calendar className="mx-auto mb-6 text-primary-400" size={48} />
//             <h2 className="text-4xl md:text-5xl font-black mb-4">Examination Schedule</h2>
//             <p className="text-slate-400 text-lg">Clear assessment timelines to ensure student preparedness.</p>
//           </div>

//           <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-800/50 backdrop-blur-md">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="border-b border-slate-700">
//                   <th className="px-8 py-6 text-primary-400 font-bold uppercase tracking-widest text-xs">Assessment</th>
//                   <th className="px-8 py-6 text-primary-400 font-bold uppercase tracking-widest text-xs">Timeline</th>
//                   <th className="px-8 py-6 text-primary-400 font-bold uppercase tracking-widest text-xs text-right">Target Classes</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-700/50">
//                 {allExams.map((exam, i) => (
//                   <tr key={i} className="hover:bg-white/5 transition-colors group">
//                     <td className="px-8 py-6 font-bold text-xl group-hover:text-primary-400 transition-colors">{exam.name}</td>
//                     <td className="px-8 py-6 text-slate-300 font-medium italic">{exam.schedule}</td>
//                     <td className="px-8 py-6 text-right">
//                       <span className="px-4 py-2 bg-slate-700 rounded-full text-sm font-bold">
//                         {exam.classes}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }









import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Globe,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../context/Appcontext";
import axios from "axios";

export default function Academics() {
  const { backendURL } = useContext(AppContext);
  const [academics, setAcademics] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const fetchAcademics = async () => {
      try {
        const res = await axios.get(`${backendURL}/academic/get`);
        const data = res.data;
        if (Array.isArray(data)) setAcademics(data);
        else if (data?.academic) setAcademics(data.academic);
        else setAcademics([]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (backendURL) fetchAcademics();
  }, [backendURL]);

  const latest = academics[0] || {};
  const allLevels = academics.flatMap(a => a.levels || []);
  const allMethodology = academics.flatMap(a => a.methodology || []);
  const allCurriculum = academics.flatMap(a => a.curriculum || []);
  const allExams = academics.flatMap(a => a.exams || []);
  const resultsData = latest.results || {};

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20 } }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary-100 border-t-primary-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-white font-sans text-slate-900 overflow-x-hidden w-full">
      
      {/* --- HERO SECTION: SPLIT LAYOUT --- */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center bg-slate-50 overflow-hidden pt-32 pb-20 lg:py-0">
        <motion.div style={{ y, opacity: heroOpacity }} className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-primary-100/60 to-transparent transform -skew-x-12 translate-x-40 z-0 rounded-bl-[120px]" />
        
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] lg:text-xs font-bold tracking-widest text-primary-700 uppercase bg-white rounded-full border border-primary-200 shadow-sm">
                <Sparkles size={14} className="text-primary-500" /> Shaping Future Leaders
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {latest.title?.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "text-primary-600" : ""}>{word} </span>
                )) || "Academic Excellence"}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-primary-500 pl-6">
                {latest.description}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 lg:px-10 py-4 lg:py-5 bg-slate-900 text-white font-bold rounded-xl shadow-xl shadow-slate-200 hover:bg-primary-600 transition-colors flex items-center gap-3 text-sm lg:text-base group"
              >
                Explore Curriculum <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div 
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[400px] md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-10"
            >
              <img
                src={latest.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"}
                alt="Academic Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 bg-white/95 backdrop-blur-md p-5 lg:p-6 rounded-2xl shadow-xl border border-white/50 max-w-[200px] lg:max-w-[220px]"
              >
                <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div className="font-black text-3xl lg:text-4xl text-slate-900">100%</div>
                </div>
                <div className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">Board Exam<br/>Success Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LEVELS SECTION: SCALABLE GRID --- */}
      <section className="py-20 lg:py-32 2xl:py-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary-600 font-bold tracking-widest uppercase text-xs lg:text-sm mb-2 italic">Academic Structure</h2>
              <h3 className="text-3xl md:text-5xl 2xl:text-6xl font-black text-slate-900 tracking-tighter">Education Levels</h3>
            </div>
            <p className="text-slate-500 lg:text-lg max-w-md">Our progressive framework ensures a seamless transition between developmental stages.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            {allLevels.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 lg:p-12 bg-white border border-slate-100 rounded-[2rem] lg:rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                    <BookOpen size={28} />
                  </div>
                  <h4 className="font-bold text-xl lg:text-3xl mb-4 text-slate-900 leading-tight">{item.title}</h4>
                  <p className="text-slate-500 lg:text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- METHODOLOGY: 3-COL STICKY FEEL --- */}
      <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Methodology</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 lg:text-xl">Integrating global perspectives with localized learning expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {allMethodology.map((item, i) => (
              <div key={i} className="p-8 lg:p-10 bg-white border border-slate-200 rounded-3xl hover:border-primary-300 transition-colors group">
                <div className="mb-6 inline-block p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <Globe className="text-primary-600" size={32} />
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{item.title}</h4>
                <p className="text-slate-600 lg:text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURRICULUM & RESULTS: BENTO GRID --- */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 2xl:gap-12">
            
            {/* Curriculum Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-white p-8 lg:p-16 rounded-[2.5rem] lg:rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-100 flex flex-col justify-center"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-primary-50 text-primary-600 rounded-2xl">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-3xl lg:text-5xl font-black tracking-tighter">Global Curriculum</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allCurriculum.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-primary-50 hover:border-primary-100 transition-colors group">
                    <CheckCircle2 className="text-primary-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-bold text-slate-700 lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Academic Milestones Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 bg-primary-600 p-8 lg:p-16 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden flex flex-col justify-center shadow-2xl shadow-primary-200"
            >
              <div className="absolute top-0 right-0 w-48 h-48 lg:w-72 lg:h-72 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20" />
              <h3 className="text-3xl lg:text-5xl font-black mb-12 relative z-10 tracking-tighter">Results</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
                  <div className="text-5xl lg:text-7xl font-black mb-2 leading-none">{resultsData.class10}</div>
                  <p className="uppercase text-xs lg:text-sm font-bold tracking-widest opacity-80">Class X Average</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
                  <div className="text-5xl lg:text-7xl font-black mb-2 leading-none">{resultsData.class12}</div>
                  <p className="uppercase text-xs lg:text-sm font-bold tracking-widest opacity-80">Class XII Average</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- EXAMS TABLE: MAX-WIDTH & LARGE TYPOGRAPHY --- */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white rounded-[3rem] lg:rounded-[5rem] mx-4 lg:mx-10 mb-10 lg:mb-20 shadow-2xl relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter">Examination Schedule</h2>
            <p className="text-slate-400 lg:text-xl font-medium">Standardized assessments designed to evaluate growth across all dimensions.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-slate-800 bg-slate-800/30 backdrop-blur-sm">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/40">
                  <th className="px-10 py-6 text-primary-400 font-bold uppercase text-xs lg:text-sm tracking-widest">Assessment Name</th>
                  <th className="px-10 py-6 text-primary-400 font-bold uppercase text-xs lg:text-sm tracking-widest">Tentative Timeline</th>
                  <th className="px-10 py-6 text-primary-400 font-bold uppercase text-xs lg:text-sm tracking-widest text-right">Applicable Grades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {allExams.map((exam, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-10 py-8 font-bold text-lg lg:text-2xl group-hover:text-primary-400 transition-colors tracking-tight">{exam.name}</td>
                    <td className="px-10 py-8 text-slate-400 lg:text-xl font-medium italic">{exam.schedule}</td>
                    <td className="px-10 py-8 text-right">
                      <span className="px-5 py-2 lg:px-6 lg:py-3 bg-slate-800 group-hover:bg-primary-900/40 border border-slate-700 rounded-full text-xs lg:text-base font-bold text-slate-300 transition-colors">
                        {exam.classes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}



