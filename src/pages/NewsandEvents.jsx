import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/Appcontext";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Bell } from "lucide-react";

export default function NewsAndEvents() {
  const navigate = useNavigate();
  const { backendURL } = useContext(AppContext);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const featured = newsData[0];
  const regularNews = newsData.slice(1);

  return (
    <div className="bg-neutral-50 pt-20 min-h-screen">

      {/* HEADER */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-600 rounded-full mb-6">
            <Bell className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            News & Announcements
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and important events at EDHAA Public School.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : newsData.length === 0 ? (
            <div className="text-center bg-white p-12 rounded-3xl border border-neutral-200">
              <p className="text-neutral-500 text-lg">No news available at the moment.</p>
            </div>
          ) : (
            <>
              {/* FEATURED NEWS */}
              {featured && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-16 bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-sm flex flex-col md:flex-row group cursor-pointer"
                >
                  <div className="md:w-1/2 relative overflow-hidden">
                    {featured.image ? (
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[300px] bg-neutral-100 flex items-center justify-center">
                        <Calendar className="w-12 h-12 text-neutral-300" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Featured
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                      {featured.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                        Read more <ArrowRight className="w-5 h-5 ml-2" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* NEWS GRID */}
              {regularNews.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularNews.map((item, idx) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
                    >
                      <div className="h-48 overflow-hidden relative">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                            <Calendar className="w-8 h-8 text-neutral-300" />
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 line-clamp-3 mb-6 flex-1">
                          {item.description}
                        </p>
                        <div className="text-sm font-medium text-primary-600 flex items-center mt-auto">
                          Read more <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </section>

    </div>
  );
}