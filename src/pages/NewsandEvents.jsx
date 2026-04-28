import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/Appcontext";
import { X } from "lucide-react";

export default function NewsAndEvents() {
  const { backendURL } = useContext(AppContext);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

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
    <div className="bg-neutral-50 font-sans pb-10 min-h-screen relative">

      {/* Page Header */}
      <div className="bg-primary-700 py-6 px-4 border-b border-primary-800">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">Circulars & Notifications</h1>
            <p className="text-primary-200 text-sm mt-1 font-medium">Home / Announcements</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-4 md:px-0">
          
        <div className="bg-white border border-neutral-200 shadow-sm w-full overflow-hidden">
            <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800">
                Notice Board
            </div>
            
            {loading ? (
                <div className="p-10 text-center text-sm font-bold text-neutral-500">Loading announcements...</div>
            ) : newsData.length === 0 ? (
                <div className="p-10 text-center text-sm font-bold text-neutral-500">No official announcements published yet.</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-neutral-100 text-primary-800 text-sm border-b border-neutral-300">
                                <th className="p-3 font-bold w-16 text-center border-r border-neutral-300">S.No.</th>
                                <th className="p-3 font-bold border-r border-neutral-300">Subject / Title</th>
                                <th className="p-3 font-bold w-32 border-r border-neutral-300 text-center">Publish Date</th>
                                <th className="p-3 font-bold w-24 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newsData.map((item, index) => (
                                <tr key={item._id} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors text-sm">
                                    <td className="p-3 text-center border-r border-neutral-200 text-neutral-600 font-bold">{index + 1}</td>
                                    <td className="p-3 border-r border-neutral-200">
                                        <div className="font-bold text-primary-800">{item.title}</div>
                                        {item.description && <div className="text-xs text-neutral-600 mt-1 line-clamp-1">{item.description}</div>}
                                    </td>
                                    <td className="p-3 border-r border-neutral-200 text-neutral-600 text-xs text-center font-medium">
                                        {/* Mocking publish date, normally would come from item.createdAt */}
                                        {new Date(item.createdAt || Date.now()).toLocaleDateString('en-GB')}
                                    </td>
                                    <td className="p-3 text-center">
                                        <button 
                                            onClick={() => setSelectedNews(item)}
                                            className="bg-primary-600 text-white px-4 py-1 text-xs font-bold uppercase hover:bg-primary-700 transition-colors shadow-sm"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <div className="bg-neutral-100 p-3 border-t border-neutral-300 flex justify-between items-center">
                <span className="text-xs text-neutral-600 font-bold">Showing {newsData.length} records</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-neutral-300 bg-white text-xs font-bold text-neutral-400 cursor-not-allowed shadow-sm">Previous</button>
                    <button className="px-3 py-1 border border-neutral-300 bg-white text-xs font-bold text-primary-800 shadow-sm">1</button>
                    <button className="px-3 py-1 border border-neutral-300 bg-white text-xs font-bold text-neutral-400 cursor-not-allowed shadow-sm">Next</button>
                </div>
            </div>
        </div>

      </div>

      {/* Modal for viewing details */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="bg-white w-full max-w-2xl border border-neutral-300 shadow-xl flex flex-col max-h-[90vh]">
                
                {/* Modal Header */}
                <div className="bg-primary-600 text-white px-4 py-3 flex justify-between items-center border-b-2 border-primary-800">
                    <h2 className="font-bold text-sm uppercase tracking-wider">Circular Details</h2>
                    <button onClick={() => setSelectedNews(null)} className="text-white hover:text-neutral-200">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{selectedNews.title}</h3>
                    <p className="text-xs text-neutral-500 font-bold mb-6 pb-4 border-b border-neutral-200">
                        Published on: {new Date(selectedNews.createdAt || Date.now()).toLocaleDateString('en-GB')}
                    </p>
                    
                    {selectedNews.image && (
                        <div className="mb-6 border border-neutral-200 p-2 bg-neutral-50 flex justify-center">
                            <img 
                                src={selectedNews.image} 
                                alt={selectedNews.title} 
                                className="max-w-full max-h-[400px] object-contain"
                            />
                        </div>
                    )}

                    <div className="text-sm text-neutral-700 leading-relaxed whitespace-pre-wrap">
                        {selectedNews.description || "No further details provided."}
                    </div>
                </div>
                
                {/* Modal Footer */}
                <div className="bg-neutral-100 p-4 border-t border-neutral-300 flex justify-end">
                    <button 
                        onClick={() => setSelectedNews(null)}
                        className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 text-xs font-bold uppercase hover:bg-neutral-50 shadow-sm"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
      )}

    </div>
  );
}