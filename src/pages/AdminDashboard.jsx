import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/Appcontext";
import { toast } from "react-toastify";
import { LayoutDashboard, Newspaper, LogOut, Upload, Trash2, Image as ImageIcon, Plus, Edit, BookOpen, Trophy } from "lucide-react";
import * as Icons from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { atoken, setatoken, backendURL } = useContext(AppContext);

  const IconPreview = ({ name }) => {
    if (!name) return null;
    
    // Mapping for common aliases
    const aliases = {
      "arts": "Palette",
      "art": "Palette",
      "sports": "Trophy",
      "sport": "Trophy",
      "activities": "Trophy",
      "activity": "Trophy",
      "calendar": "CalendarDays",
      "event": "CalendarDays",
      "events": "CalendarDays"
    };

    const targetName = aliases[name.toLowerCase()] || name;

    const formattedName = targetName
      .split(/[-_ ]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
      
    const Icon = Icons[formattedName] || Icons[targetName] || Icons[name];
    return Icon ? <Icon className="w-5 h-5 text-primary-600" /> : <Icons.HelpCircle className="w-5 h-5 text-neutral-300" />;
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [news, setNews] = useState([]);
  const [activities, setActivities] = useState([]);
  const [academics, setAcademics] = useState([]);
  const [activeTab, setActiveTab] = useState("news");
  const [loading, setLoading] = useState(false);
  const [isAddingMode, setIsAddingMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const scrollRef = useRef(null);

  const [levels, setLevels] = useState([]);
  const [methodology, setMethodology] = useState([]);
  const [curriculum, setCurriculum] = useState([]);
  const [results, setResults] = useState({ class10: "", class12: "" });
  const [exams, setExams] = useState([]);

  const [activityCards, setActivityCards] = useState([]);
  const [spotlight, setSpotlight] = useState({ title: "", description: "", image: "" });
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState([]);

  // --- Dynamic Form Handlers ---
  const handleAddLevel = () => setLevels([...levels, { title: "", description: "" }]);
  const handleUpdateLevel = (index, field, value) => {
    const newLevels = [...levels];
    newLevels[index] = { ...newLevels[index], [field]: value };
    setLevels(newLevels);
  };
  const handleRemoveLevel = (index) => setLevels(levels.filter((_, i) => i !== index));

  const handleAddMethodology = () => setMethodology([...methodology, { title: "", description: "" }]);
  const handleUpdateMethodology = (index, field, value) => {
    const newMethodology = [...methodology];
    newMethodology[index] = { ...newMethodology[index], [field]: value };
    setMethodology(newMethodology);
  };
  const handleRemoveMethodology = (index) => setMethodology(methodology.filter((_, i) => i !== index));

  const handleAddCurriculum = () => setCurriculum([...curriculum, ""]);
  const handleUpdateCurriculum = (index, value) => {
    const newCurr = [...curriculum];
    newCurr[index] = value;
    setCurriculum(newCurr);
  };
  const handleRemoveCurriculum = (index) => setCurriculum(curriculum.filter((_, i) => i !== index));

  const handleUpdateResult = (field, value) => setResults({ ...results, [field]: value });

  const handleAddExam = () => setExams([...exams, { name: "", schedule: "", classes: "" }]);
  const handleUpdateExam = (index, field, value) => {
    const newExams = [...exams];
    newExams[index] = { ...newExams[index], [field]: value };
    setExams(newExams);
  };
  const handleRemoveExam = (index) => setExams(exams.filter((_, i) => i !== index));

  // --- Dynamic Form Handlers for Activities ---
  const handleAddActivityCard = () => setActivityCards([...activityCards, { title: "", description: "", icon: "" }]);
  const handleUpdateActivityCard = (index, field, value) => {
    const newCards = [...activityCards];
    newCards[index] = { ...newCards[index], [field]: value };
    setActivityCards(newCards);
  };
  const handleRemoveActivityCard = (index) => setActivityCards(activityCards.filter((_, i) => i !== index));

  const handleUpdateSpotlight = (field, value) => setSpotlight({ ...spotlight, [field]: value });

  const handleAddEvent = () => setEvents([...events, { date: "", title: "" }]);
  const handleUpdateEvent = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index] = { ...newEvents[index], [field]: value };
    setEvents(newEvents);
  };
  const handleRemoveEvent = (index) => setEvents(events.filter((_, i) => i !== index));

  const handleAddStat = () => setStats([...stats, { value: "", label: "" }]);
  const handleUpdateStat = (index, field, value) => {
    const newStats = [...stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setStats(newStats);
  };
  const handleRemoveStat = (index) => setStats(stats.filter((_, i) => i !== index));

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setPreview(null);
    setLevels([]);
    setMethodology([]);
    setCurriculum([]);
    setResults({ class10: "", class12: "" });
    setExams([]);
    setActivityCards([]);
    setSpotlight({ title: "", description: "", image: "" });
    setEvents([]);
    setStats([]);
    setIsAddingMode(false);
    setEditingId(null);
  };

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

  const fetchAcademics = async () => {
    try {
      const res = await axios.get(`${backendURL}/academic/get`);
      const data = res.data;
      if (Array.isArray(data)) {
        setAcademics(data);
      } else if (data && Array.isArray(data.academic)) {
        setAcademics(data.academic);
      } else if (data && Array.isArray(data.academics)) {
        setAcademics(data.academics);
      } else if (data && Array.isArray(data.data)) {
        setAcademics(data.data);
      } else {
        setAcademics([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchActivities = async () => {
    try {
      const res = await axios.get(`${backendURL}/activity/get`);
      const data = res.data;
      if (Array.isArray(data)) {
        setActivities(data);
      } else if (data && Array.isArray(data.activity)) {
        setActivities(data.activity);
      } else if (data && Array.isArray(data.activities)) {
        setActivities(data.activities);
      } else if (data && Array.isArray(data.data)) {
        setActivities(data.data);
      } else {
        setActivities([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchAcademics();
    fetchActivities();
  }, []);

  const handleImageChange = (file) => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingId && !image) return toast.error("Image required");

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (image) {
        formData.append("image", image);
      }

      if (activeTab === "news") {
        if (editingId) {
          await axios.put(`${backendURL}/update/${editingId}`, formData, {
            headers: { atoken },
          });
          toast.success("News updated successfully");
        } else {
          await axios.post(`${backendURL}/add`, formData, {
            headers: { atoken },
          });
          toast.success("News added successfully");
        }
        fetchNews();
      } else if (activeTab === "activities") {
        formData.append("activities", JSON.stringify(activityCards));
        formData.append("spotlight", JSON.stringify(spotlight));
        formData.append("events", JSON.stringify(events));
        formData.append("stats", JSON.stringify(stats));

        if (editingId) {
          await axios.put(`${backendURL}/activity/update/${editingId}`, formData, {
            headers: { atoken },
          });
          toast.success("Activity updated successfully");
        } else {
          await axios.post(`${backendURL}/activity/add`, formData, {
            headers: { atoken },
          });
          toast.success("Activity added successfully");
        }
        fetchActivities();
      } else {
        formData.append("levels", JSON.stringify(levels));
        formData.append("methodology", JSON.stringify(methodology));
        formData.append("curriculum", JSON.stringify(curriculum));
        formData.append("results", JSON.stringify(results));
        formData.append("exams", JSON.stringify(exams));

        if (editingId) {
          await axios.put(`${backendURL}/academic/update/${editingId}`, formData, {
            headers: { atoken },
          });
          toast.success("Academic record updated successfully");
        } else {
          await axios.post(`${backendURL}/academic/add`, formData, {
            headers: { atoken },
          });
          toast.success("Academic record added successfully");
        }
        fetchAcademics();
      }

      resetForm();
    } catch (err) {
      console.log(err);
      toast.error(editingId ? "Update failed" : "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const safeParseArray = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      try { return JSON.parse(val); } catch (e) { return []; }
    }
    return [];
  };

  const safeParseObject = (val, defaultObj) => {
    if (!val) return defaultObj;
    if (typeof val === 'object' && !Array.isArray(val)) return val;
    if (typeof val === 'string') {
      try { return JSON.parse(val); } catch (e) { return defaultObj; }
    }
    return defaultObj;
  };

  // const handleEdit = (item) => {
  //   setTitle(item.title || "");
  //   setDescription(item.description || "");
    
  //   if (activeTab === "academics") {
  //     setLevels(safeParseArray(item.levels));
  //     setMethodology(safeParseArray(item.methodology));
  //     setCurriculum(safeParseArray(item.curriculum));
  //     setResults(safeParseObject(item.results, { class10: "", class12: "" }));
  //     setExams(safeParseArray(item.exams));
  //   }

  //   setPreview(item.image);
  //   setImage(null);
  //   setEditingId(item._id);
  //   setIsAddingMode(true);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };



  const handleEdit = (item) => {
  setTitle(item.title || "");
  setDescription(item.description || "");

  if (activeTab === "academics") {
    // 🔥 FIXED LEVELS
    const parsedLevels = safeParseArray(item.levels);
    setLevels(
      parsedLevels.map((lvl) => ({
        title: lvl.title || "",
        description: lvl.description || "",
      }))
    );

    // 🔥 FIXED METHODOLOGY
    const parsedMethod = safeParseArray(item.methodology);
    setMethodology(
      parsedMethod.map((m) => ({
        title: m.title || "",
        description: m.description || "",
      }))
    );

    // 🔥 FIXED CURRICULUM
    const parsedCurriculum = safeParseArray(item.curriculum);
    setCurriculum(parsedCurriculum.map((c) => c || ""));

    // 🔥 FIXED RESULTS
    const parsedResults = safeParseObject(item.results, {
      class10: "",
      class12: "",
    });
    setResults({
      class10: parsedResults.class10 || "",
      class12: parsedResults.class12 || "",
    });

    // 🔥 FIXED EXAMS
    const parsedExams = safeParseArray(item.exams);
    setExams(
      parsedExams.map((ex) => ({
        name: ex.name || "",
        schedule: ex.schedule || "",
        classes: ex.classes || "",
      }))
    );
  } else if (activeTab === "activities") {
    const parsedCards = safeParseArray(item.activities);
    setActivityCards(
      parsedCards.map((c) => ({
        title: c.title || "",
        description: c.description || "",
        icon: c.icon || "",
      }))
    );

    const parsedSpotlight = safeParseObject(item.spotlight, { title: "", description: "", image: "" });
    setSpotlight({
      title: parsedSpotlight.title || "",
      description: parsedSpotlight.description || "",
      image: parsedSpotlight.image || "",
    });

    const parsedEvents = safeParseArray(item.events);
    setEvents(
      parsedEvents.map((e) => ({
        date: e.date || "",
        title: e.title || "",
      }))
    );

    const parsedStats = safeParseArray(item.stats);
    setStats(
      parsedStats.map((s) => ({
        value: s.value || "",
        label: s.label || "",
      }))
    );
  }

  setPreview(item.image || null);
  setImage(null);
  setEditingId(item._id);
  setIsAddingMode(true);

  if (scrollRef.current) {
    scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }
};




  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      if (activeTab === "news") {
        await axios.delete(`${backendURL}/delete/${id}`, {
          headers: { atoken },
        });
        toast.success("Deleted successfully");
        fetchNews();
      } else if (activeTab === "activities") {
        await axios.delete(`${backendURL}/activity/delete/${id}`, {
          headers: { atoken },
        });
        toast.success("Deleted successfully");
        fetchActivities();
      } else {
        await axios.delete(`${backendURL}/academic/delete/${id}`, {
          headers: { atoken },
        });
        toast.success("Deleted successfully");
        fetchAcademics();
      }
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err.message);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col md:flex-row font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-white border-b md:border-r border-neutral-200 flex flex-col shrink-0 z-30">
        <div className="h-16 hidden md:flex items-center px-6 border-b border-neutral-200">
          <div className="w-6 h-6 bg-primary-600 rounded-md mr-3"></div>
          <span className="font-bold text-neutral-900 tracking-tight">EDHAA Admin</span>
        </div>

        <nav className="flex-row md:flex-col overflow-x-auto md:overflow-visible px-4 py-2 md:py-6 space-x-2 md:space-x-0 md:space-y-1 flex-1 no-scrollbar">
          <NavLink
            to="/admin/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                isActive ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-100"
              }`
            }
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </NavLink>
          <button
            onClick={() => { setActiveTab("news"); resetForm(); }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === "news" ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <Newspaper className="w-4 h-4" />
            News & Events
          </button>
          <button
            onClick={() => { setActiveTab("activities"); resetForm(); }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === "activities" ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <Trophy className="w-4 h-4" />
            Activities
          </button>
          <button
            onClick={() => { setActiveTab("academics"); resetForm(); }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === "academics" ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Academics
          </button>
        </nav>

        <div className="p-2 md:p-4 border-t border-neutral-200 hidden md:block">
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
        <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center">
            <div className="md:hidden w-6 h-6 bg-primary-600 rounded-md mr-3 shrink-0"></div>
            <h1 className="text-base sm:text-lg font-semibold text-neutral-900 truncate">
              {activeTab === "news" ? "News & Events" : activeTab === "activities" ? "Activities" : "Academics"}
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="hidden sm:inline-block text-sm font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
              Admin Session Active
            </span>
            <button
              onClick={handleLogout}
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-neutral-500 hover:bg-red-50 hover:text-red-600 transition-colors border border-neutral-100 shadow-sm"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* SCROLLABLE AREA */}
        <div ref={scrollRef} className="flex-1 overflow-auto p-4 sm:p-8">
          
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* ACTION BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  {activeTab === "news" ? "All News" : activeTab === "activities" ? "All Activities" : "All Academics"}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  {activeTab === "news" ? "Manage all public announcements and events." : activeTab === "activities" ? "Manage co-curricular activities." : "Manage academic frameworks and details."}
                </p>
              </div>
              <button 
                onClick={() => {
                  if (isAddingMode) {
                    resetForm();
                  } else {
                    setIsAddingMode(true);
                  }
                }}
                className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm w-full sm:w-auto shrink-0"
              >
                {isAddingMode ? "Cancel" : <><Plus className="w-4 h-4" /> Add New</>}
              </button>
            </div>

            {/* ADD FORM (CONDITIONAL) */}
            {isAddingMode && (
              <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-6 shadow-sm animate-in slide-in-from-top-4 fade-in duration-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">
                  {editingId ? "Update Item" : "Create New Item"}
                </h3>
                
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
                        placeholder="Provide details..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-5 flex flex-col md:col-span-2">
                    <label className="text-sm font-medium text-neutral-700">Cover Image</label>
                    
                    {!preview ? (
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 rounded-xl bg-neutral-50 hover:bg-neutral-100 cursor-pointer transition-colors p-6">
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
                      <div className="relative rounded-xl overflow-hidden border border-neutral-200 group h-48 w-full max-w-sm">
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

                  {activeTab === "academics" && (
                    <>
                      {/* Levels Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Levels</label>
                          <button type="button" onClick={handleAddLevel} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Level
                          </button>
                        </div>
                        {levels.length === 0 && <p className="text-sm text-neutral-500">No levels added yet.</p>}
                        <div className="space-y-4">
                          {levels.map((lvl, idx) => (
                            <div key={`lvl-${idx}`} className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm relative group animate-in fade-in zoom-in-95 duration-200">
                              <button type="button" onClick={() => handleRemoveLevel(idx)} className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors bg-white/80 p-1 rounded-md hover:bg-red-50 z-10">
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <div className="space-y-3 pr-8">
                                <input type="text" placeholder="Level Title (e.g., Middle School)" value={lvl.title || lvl.name || ""} onChange={(e) => handleUpdateLevel(idx, "title", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors font-medium" />
                                <textarea placeholder="Description" value={lvl.description || lvl.desc || ""} onChange={(e) => handleUpdateLevel(idx, "description", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Methodology Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Methodology</label>
                          <button type="button" onClick={handleAddMethodology} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Method
                          </button>
                        </div>
                        {methodology.length === 0 && <p className="text-sm text-neutral-500">No methods added yet.</p>}
                        <div className="space-y-4">
                          {methodology.map((mthd, idx) => (
                            <div key={`mthd-${idx}`} className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm relative group animate-in fade-in zoom-in-95 duration-200">
                              <button type="button" onClick={() => handleRemoveMethodology(idx)} className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors bg-white/80 p-1 rounded-md hover:bg-red-50 z-10">
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <div className="space-y-3 pr-8">
                                <input type="text" placeholder="Method Title (e.g., Smart Classrooms)" value={mthd.title || mthd.name || ""} onChange={(e) => handleUpdateMethodology(idx, "title", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors font-medium" />
                                <textarea placeholder="Description" value={mthd.description || mthd.desc || ""} onChange={(e) => handleUpdateMethodology(idx, "description", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Curriculum Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Curriculum Highlights</label>
                          <button type="button" onClick={handleAddCurriculum} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Item
                          </button>
                        </div>
                        {curriculum.length === 0 && <p className="text-sm text-neutral-500">No curriculum items added yet.</p>}
                        <div className="space-y-3">
                          {curriculum.map((item, idx) => (
                            <div key={`curr-${idx}`} className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-200">
                              <input type="text" placeholder="e.g. Integration of Art and Sports" value={item || ""} onChange={(e) => handleUpdateCurriculum(idx, e.target.value)} className="flex-1 bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                              <button type="button" onClick={() => handleRemoveCurriculum(idx)} className="p-2.5 text-neutral-400 hover:text-red-500 bg-white border border-neutral-200 rounded-lg hover:bg-red-50 transition-colors shadow-sm shrink-0">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <label className="text-base font-semibold text-neutral-800 block">Result Analysis</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-neutral-50/50 p-6 rounded-2xl border border-neutral-100">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">Class 10 Pass Rate</label>
                            <input type="text" placeholder="e.g. 100%" value={results?.class10 || ""} onChange={(e) => handleUpdateResult("class10", e.target.value)} className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">Class 12 Pass Rate</label>
                            <input type="text" placeholder="e.g. 100%" value={results?.class12 || ""} onChange={(e) => handleUpdateResult("class12", e.target.value)} className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Exams Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Examination Schedule</label>
                          <button type="button" onClick={handleAddExam} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Exam
                          </button>
                        </div>
                        {exams.length === 0 && <p className="text-sm text-neutral-500">No exams added yet.</p>}
                        <div className="space-y-4">
                          {exams.map((exam, idx) => (
                            <div key={`exam-${idx}`} className="p-5 bg-white border border-neutral-200 rounded-xl shadow-sm relative group animate-in fade-in zoom-in-95 duration-200">
                              <button type="button" onClick={() => handleRemoveExam(idx)} className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors bg-white/80 p-1 rounded-md hover:bg-red-50 z-10">
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                                <div className="space-y-1.5">
                                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Exam Name</label>
                                  <input type="text" placeholder="e.g. Periodic Test 1" value={exam.name || ""} onChange={(e) => handleUpdateExam(idx, "name", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                                </div>
                                <div className="space-y-1.5">
                                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Tentative Schedule</label>
                                  <input type="text" placeholder="e.g. July - August" value={exam.schedule || exam.time || ""} onChange={(e) => handleUpdateExam(idx, "schedule", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                                </div>
                                <div className="md:col-span-2 space-y-1.5">
                                  <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Applicable For Classes</label>
                                  <input type="text" placeholder="e.g. I to XII" value={exam.classes || ""} onChange={(e) => handleUpdateExam(idx, "classes", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "activities" && (
                    <>
                      {/* Activities List Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Activity Cards</label>
                          <button type="button" onClick={handleAddActivityCard} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Card
                          </button>
                        </div>
                        {activityCards.length === 0 && <p className="text-sm text-neutral-500">No activity cards added yet.</p>}
                        <div className="space-y-4">
                          {activityCards.map((card, idx) => (
                            <div key={`card-${idx}`} className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm relative group animate-in fade-in zoom-in-95 duration-200">
                              <button type="button" onClick={() => handleRemoveActivityCard(idx)} className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors bg-white/80 p-1 rounded-md hover:bg-red-50 z-10">
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <div className="space-y-3 pr-8">
                                <input type="text" placeholder="Title (e.g., Sports & Athletics)" value={card.title || ""} onChange={(e) => handleUpdateActivityCard(idx, "title", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors font-medium" />
                                <div className="flex items-center gap-3">
                                  <input type="text" placeholder="Icon Name (e.g., Trophy, Palette)" value={card.icon || ""} onChange={(e) => handleUpdateActivityCard(idx, "icon", e.target.value)} className="flex-1 bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                                  <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0 border border-neutral-200">
                                    <IconPreview name={card.icon} />
                                  </div>
                                </div>
                                <textarea placeholder="Description" value={card.description || ""} onChange={(e) => handleUpdateActivityCard(idx, "description", e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Spotlight Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <label className="text-base font-semibold text-neutral-800 block">Spotlight Section</label>
                        <div className="space-y-3 bg-neutral-50/50 p-6 rounded-2xl border border-neutral-100">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">Spotlight Title</label>
                            <input type="text" placeholder="e.g. Scout & Guides" value={spotlight?.title || ""} onChange={(e) => handleUpdateSpotlight("title", e.target.value)} className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">Spotlight Description</label>
                            <textarea placeholder="Description for spotlight..." value={spotlight?.description || ""} onChange={(e) => handleUpdateSpotlight("description", e.target.value)} className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-700">Spotlight Image URL (Optional)</label>
                            <input type="text" placeholder="Image URL (if different from main cover)" value={spotlight?.image || ""} onChange={(e) => handleUpdateSpotlight("image", e.target.value)} className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Events Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Events Calendar</label>
                          <button type="button" onClick={handleAddEvent} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Event
                          </button>
                        </div>
                        {events.length === 0 && <p className="text-sm text-neutral-500">No events added yet.</p>}
                        <div className="space-y-4">
                          {events.map((evt, idx) => (
                            <div key={`evt-${idx}`} className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-left-4 duration-200">
                              <input type="text" placeholder="Date (e.g. 15 Aug)" value={evt.date || ""} onChange={(e) => handleUpdateEvent(idx, "date", e.target.value)} className="sm:w-1/3 bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                              <input type="text" placeholder="Event Title" value={evt.title || ""} onChange={(e) => handleUpdateEvent(idx, "title", e.target.value)} className="flex-1 bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                              <button type="button" onClick={() => handleRemoveEvent(idx)} className="p-2.5 text-neutral-400 hover:text-red-500 bg-white border border-neutral-200 rounded-lg hover:bg-red-50 transition-colors shadow-sm shrink-0">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats Section */}
                      <div className="md:col-span-2 space-y-4 pt-6 border-t border-neutral-100">
                        <div className="flex items-center justify-between">
                          <label className="text-base font-semibold text-neutral-800">Stats</label>
                          <button type="button" onClick={handleAddStat} className="text-sm flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-md transition-colors">
                            <Plus className="w-4 h-4" /> Add Stat
                          </button>
                        </div>
                        {stats.length === 0 && <p className="text-sm text-neutral-500">No stats added yet.</p>}
                        <div className="space-y-4">
                          {stats.map((stat, idx) => (
                            <div key={`stat-${idx}`} className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-left-4 duration-200">
                              <input type="text" placeholder="Value (e.g. 150+)" value={stat.value || ""} onChange={(e) => handleUpdateStat(idx, "value", e.target.value)} className="sm:w-1/3 bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                              <input type="text" placeholder="Label (e.g. Projects Annually)" value={stat.label || ""} onChange={(e) => handleUpdateStat(idx, "label", e.target.value)} className="flex-1 bg-white border border-neutral-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors shadow-sm" />
                              <button type="button" onClick={() => handleRemoveStat(idx)} className="p-2.5 text-neutral-400 hover:text-red-500 bg-white border border-neutral-200 rounded-lg hover:bg-red-50 transition-colors shadow-sm shrink-0">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="md:col-span-2 flex justify-end pt-4 border-t border-neutral-100">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm disabled:opacity-70 flex items-center gap-2"
                    >
                      {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                      {loading ? (editingId ? "Updating..." : "Publishing...") : (editingId ? "Update Item" : "Publish Item")}
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
                    {(activeTab === "news" ? news : activeTab === "activities" ? activities : academics).length === 0 ? (
                      <tr>
                        <td colSpan="3" className="px-6 py-12 text-center text-neutral-500">
                          <div className="flex flex-col items-center justify-center">
                            {activeTab === "news" ? <Newspaper className="w-12 h-12 text-neutral-200 mb-3" /> : activeTab === "activities" ? <Trophy className="w-12 h-12 text-neutral-200 mb-3" /> : <BookOpen className="w-12 h-12 text-neutral-200 mb-3" />}
                            <p className="text-sm font-medium">No records yet.</p>
                            <p className="text-xs mt-1">Click "Add New" to create one.</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      (activeTab === "news" ? news : activeTab === "activities" ? activities : academics).map((item) => (
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
                            <p className="text-xs text-neutral-500 line-clamp-2 max-w-xs sm:max-w-2xl leading-relaxed">{item.description}</p>
                          </td>
                          <td className="px-6 py-4 align-top text-right whitespace-nowrap">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-neutral-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors inline-flex mr-2"
                              title="Edit Item"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="text-neutral-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors inline-flex"
                              title="Delete Item"
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