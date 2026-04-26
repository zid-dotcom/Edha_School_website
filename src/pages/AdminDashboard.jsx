import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/Appcontext";
import { toast } from "react-toastify";
import { LayoutDashboard, Newspaper, LogOut, Upload, Trash2, Image as ImageIcon, Plus } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { atoken, setatoken, backendURL } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddingMode, setIsAddingMode] = useState(false);

  const handleLogout = () => {
    setatoken("");
    localStorage.removeItem("atoken");
    toast.success("Logout successful");
    navigate("/", { replace: true });
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get(`${backendURL}/get`);
      setNews(Array.isArray(res.data) ? res.data : Array.isArray(res.data.news) ? res.data.news : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleImageChange = (file) => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast.error("Image required");

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      await axios.post(`${backendURL}/add`, formData, {
        headers: { atoken },
      });

      toast.success("News added successfully");

      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);
      setIsAddingMode(false);
      fetchNews();
    } catch (err) {
      console.log(err);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axios.delete(`${backendURL}/delete/${id}`, {
        headers: { atoken },
      });
      toast.success("Deleted successfully");
      fetchNews();
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err.message);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col md:flex-row font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-white border-r border-neutral-200 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-neutral-200">
          <div className="w-6 h-6 bg-primary-600 rounded-md mr-3"></div>
          <span className="font-bold text-neutral-900 tracking-tight">EDHAA Admin</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <NavLink
            to="/admin/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-100"
              }`
            }
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/dashboard" // Assuming same route based on original code
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-100"
              }`
            }
          >
            <Newspaper className="w-4 h-4" />
            News & Events
          </NavLink>
        </nav>

        <div className="p-4 border-t border-neutral-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* TOPBAR */}
        <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-lg font-semibold text-neutral-900">News & Events Management</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
              Admin Session Active
            </span>
          </div>
        </header>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-auto p-8">
          
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* ACTION BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">All News</h2>
                <p className="text-sm text-neutral-500 mt-1">Manage all public announcements and events.</p>
              </div>
              <button 
                onClick={() => setIsAddingMode(!isAddingMode)}
                className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm w-full sm:w-auto shrink-0"
              >
                {isAddingMode ? "Cancel" : <><Plus className="w-4 h-4" /> Add New</>}
              </button>
            </div>

            {/* ADD FORM (CONDITIONAL) */}
            {isAddingMode && (
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm animate-in slide-in-from-top-4 fade-in duration-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Create New Announcement</h3>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-700">Title</label>
                      <input
                        type="text"
                        placeholder="Enter announcement title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2 flex-1">
                      <label className="text-sm font-medium text-neutral-700">Description</label>
                      <textarea
                        placeholder="Provide details about the event or news..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-5 flex flex-col">
                    <label className="text-sm font-medium text-neutral-700">Cover Image</label>
                    
                    {!preview ? (
                      <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 rounded-xl bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors p-6">
                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                          <Upload className="w-5 h-5 text-neutral-500" />
                        </div>
                        <p className="text-sm font-medium text-neutral-700 mb-1">Click to upload image</p>
                        <p className="text-xs text-neutral-500">PNG, JPG or WEBP (max. 5MB)</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e.target.files[0])}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="relative flex-1 rounded-xl overflow-hidden border border-neutral-200 group">
                        <img src={preview} alt="Preview" className="w-full h-full object-cover absolute inset-0" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <label className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors">
                            Change Image
                            <input type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0])} className="hidden" />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2 flex justify-end pt-4 border-t border-neutral-100">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm disabled:opacity-70 flex items-center gap-2"
                    >
                      {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                      {loading ? "Publishing..." : "Publish News"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* LIST SECTION */}
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50/80 border-b border-neutral-200 text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                      <th className="px-6 py-4 w-20">Media</th>
                      <th className="px-6 py-4">Title & Details</th>
                      <th className="px-6 py-4 w-24 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {news.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="px-6 py-12 text-center text-neutral-500">
                          <div className="flex flex-col items-center justify-center">
                            <Newspaper className="w-12 h-12 text-neutral-200 mb-3" />
                            <p className="text-sm font-medium">No announcements yet.</p>
                            <p className="text-xs mt-1">Click "Add New" to create one.</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      news.map((item) => (
                        <tr key={item._id} className="hover:bg-neutral-50/50 transition-colors group">
                          <td className="px-6 py-4 align-top">
                            {item.image ? (
                              <img src={item.image} alt="" className="w-16 h-12 rounded object-cover border border-neutral-200" />
                            ) : (
                              <div className="w-16 h-12 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                                <ImageIcon className="w-5 h-5 text-neutral-300" />
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 align-top">
                            <h4 className="text-sm font-bold text-neutral-900 mb-1">{item.title}</h4>
                            <p className="text-xs text-neutral-500 line-clamp-2 max-w-2xl leading-relaxed">{item.description}</p>
                          </td>
                          <td className="px-6 py-4 align-top text-right">
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="text-neutral-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors inline-flex"
                              title="Delete Announcement"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}