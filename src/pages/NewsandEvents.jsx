import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/Appcontext";
import { X, Bell, Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsAndEvents() {
  const { backendURL } = useContext(AppContext);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${backendURL}/get`);
      const data = Array.isArray(res.data) ? res.data : res.data.news || [];
      setNewsData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-neutral-50 font-sans min-h-screen relative overflow-hidden">

      {/* Modern Hero Section */}
      <div className="relative bg-primary-900 pt-32 pb-40">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-800/50 text-primary-200 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-primary-700/50">
                <Bell className="w-4 h-4" /> Official Notice Board
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">Circulars &<br/>Notifications</h1>
            </div>
            <p className="text-primary-200 max-w-md text-lg leading-relaxed">
              Stay updated with the latest academic announcements, event schedules, and administrative circulars from Edhaa Public School.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Notice Board */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 pb-24">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden">
          
          <div className="p-8 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
            <h2 className="text-2xl font-bold text-primary-900">Recent Announcements</h2>
            <div className="text-sm font-bold text-neutral-500 bg-white px-4 py-2 rounded-full shadow-sm border border-neutral-200">
              {newsData.length} Records Found
            </div>
          </div>

          <div className="p-0">
            {loading ? (
              <div className="p-20 text-center flex flex-col items-center gap-4 text-neutral-400">
                <div className="w-10 h-10 border-4 border-neutral-200 border-t-primary-600 rounded-full animate-spin"></div>
                <p className="font-bold tracking-widest uppercase text-xs">Loading announcements...</p>
              </div>
            ) : newsData.length === 0 ? (
              <div className="p-20 text-center text-neutral-400">
                <Bell className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p className="font-bold tracking-widest uppercase text-sm">No official announcements published yet.</p>
              </div>
            ) : (
              <motion.div variants={stagger} className="divide-y divide-neutral-100">
                {newsData.map((item, index) => (
                  <motion.div key={item._id} variants={fadeUp} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-primary-50/50 transition-colors cursor-pointer" onClick={() => setSelectedNews(item)}>
                    <div className="flex items-start gap-6 mb-4 sm:mb-0">
                      <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:bg-white group-hover:shadow-md transition-all shrink-0">
                        <span className="text-xs font-bold text-neutral-400 uppercase">Num</span>
                        <span className="text-lg font-black text-primary-700">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(item.createdAt || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                    <button className="self-start sm:self-center bg-white border border-neutral-200 text-primary-700 font-bold px-6 py-3 rounded-xl flex items-center gap-2 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all shadow-sm">
                      Read More <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
          
          <div className="p-6 bg-neutral-50/50 border-t border-neutral-100 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm font-bold text-neutral-400 cursor-not-allowed shadow-sm">Previous</button>
              <button className="px-5 py-2.5 rounded-xl bg-primary-600 border border-primary-600 text-sm font-bold text-white shadow-md">1</button>
              <button className="px-5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm font-bold text-neutral-400 cursor-not-allowed shadow-sm">Next</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rich Modal for viewing details */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedNews(null)} className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm"></motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] overflow-hidden border border-neutral-100">
                
                {/* Modal Header */}
                <div className="p-6 border-b border-neutral-100 flex justify-between items-start bg-neutral-50/50">
                    <div>
                      <div className="text-xs font-bold text-primary-600 tracking-widest uppercase mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {new Date(selectedNews.createdAt || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <h2 className="text-2xl font-bold text-primary-900 pr-8">{selectedNews.title}</h2>
                    </div>
                    <button onClick={() => setSelectedNews(null)} className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors shrink-0">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-8 overflow-y-auto">
                    {selectedNews.image && (
                        <div className="mb-8 rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50">
                            <img 
                                src={selectedNews.image} 
                                alt={selectedNews.title} 
                                className="w-full max-h-[400px] object-contain"
                            />
                        </div>
                    )}

                    <div className="text-lg text-neutral-600 leading-relaxed whitespace-pre-wrap">
                        {selectedNews.description || "No further details provided."}
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}