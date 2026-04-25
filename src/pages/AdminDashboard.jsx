import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/Appcontext";
import { toast } from "react-toastify";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { atoken, setatoken, backendURL } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 LOGOUT
  const handleLogout = () => {
    setatoken("");
    localStorage.removeItem("atoken");
    toast.success("Logout successful");
    navigate("/", { replace: true });
  };

  // 🔥 FETCH NEWS (FIXED)
  const fetchNews = async () => {
    try {
      const res = await axios.get(`${backendURL}/get`);

      console.log("API RESPONSE:", res.data);

      setNews(
        Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.news)
          ? res.data.news
          : []
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // 🔥 IMAGE PREVIEW
  const handleImageChange = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔥 ADD NEWS
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

      toast.success("News added");

      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);

      fetchNews();
    } catch (err) {
      console.log(err);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 DELETE NEWS (FIXED + DEBUG)
  const handleDelete = async (id) => {
    console.log("Deleting:", id);

    try {
      const res = await axios.delete(`${backendURL}/delete/${id}`, {
        headers: { atoken },
      });

      console.log("DELETE RESPONSE:", res.data);

      toast.success("Deleted successfully");

      fetchNews();
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err.message);
      toast.error("Delete failed");
    }
  };

  const linkClass = ({ isActive }) =>
    `block px-5 py-2 text-sm transition ${
      isActive
        ? "text-blue-900 font-semibold"
        : "text-gray-600 hover:text-blue-900"
    }`;

//  return (
//   <div className="min-h-screen bg-[#f4f7fb] flex flex-col">

//     {/* HEADER */}
//     <header className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">

//         <div className="flex items-center gap-4">
//           <div className="w-[4px] h-10 bg-blue-900 rounded-full"></div>

//           <div>
//             <h1 className="text-lg font-semibold text-gray-900">
//               Admin Dashboard
//             </h1>
//             <p className="text-xs text-gray-400">
//               EDHAA PUBLIC SCHOOL
//             </p>
//           </div>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="text-sm px-4 py-1.5 rounded border border-gray-300 hover:bg-blue-900 hover:text-white transition"
//         >
//           Logout
//         </button>

//       </div>
//     </header>

//     <div className="flex flex-1">

//       {/* SIDEBAR */}
//       <aside className="w-[250px] bg-white border-r px-6 py-6">

//         <nav className="space-y-2 text-sm">

//           <NavLink
//             to="/admin/dashboard"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-md ${
//                 isActive
//                   ? "bg-blue-50 text-blue-900 font-medium"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/admin/news"
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-md ${
//                 isActive
//                   ? "bg-blue-50 text-blue-900 font-medium"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`
//             }
//           >
//             News & Events
//           </NavLink>

//         </nav>

//       </aside>

//       {/* CONTENT */}
//       <main className="flex-1 p-10">

//         {/* TITLE */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-gray-900">
//             News & Events
//           </h2>
//           <p className="text-sm text-gray-400">
//             Manage school announcements and updates
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">

//           {/* FORM */}
//           <div className="lg:col-span-1">
//             <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

//               <h3 className="text-sm font-semibold text-gray-700 mb-4">
//                 Add New
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-4">

//                 <input
//                   type="text"
//                   placeholder="Title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
//                   required
//                 />

//                 <textarea
//                   placeholder="Description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
//                   required
//                 />

//                 {/* FILE INPUT */}
//                 <label className="block border border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
//                   <p className="text-sm text-gray-500">
//                     Click to upload image
//                   </p>
//                   <input
//                     type="file"
//                     onChange={(e) => handleImageChange(e.target.files[0])}
//                     className="hidden"
//                   />
//                 </label>

//                 {/* PREVIEW */}
//                 {preview && (
//                   <img
//                     src={preview}
//                     alt=""
//                     className="w-full h-40 object-cover rounded-md"
//                   />
//                 )}

//                 <button
//                   disabled={loading}
//                   className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition disabled:opacity-50"
//                 >
//                   {loading ? "Uploading..." : "Add News"}
//                 </button>

//               </form>

//             </div>
//           </div>

//           {/* LIST */}
//           <div className="lg:col-span-2 space-y-4">

//             {news.length === 0 ? (
//               <div className="bg-white border p-8 text-gray-400 text-center rounded-xl">
//                 No news available
//               </div>
//             ) : (
//               news.map((item) => (
//                 <div
//                   key={item._id}
//                   className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:shadow-md transition"
//                 >

//                   <div className="flex gap-4 items-center">

//                     {item.image && (
//                       <img
//                         src={item.image}
//                         alt=""
//                         className="w-16 h-16 object-cover rounded-md"
//                       />
//                     )}

//                     <div>
//                       <p className="font-semibold text-gray-900">
//                         {item.title}
//                       </p>

//                       <p className="text-sm text-gray-500 mt-1 max-w-md line-clamp-2">
//                         {item.description}
//                       </p>
//                     </div>

//                   </div>

//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="text-sm px-3 py-1 border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition"
//                   >
//                     Delete
//                   </button>

//                 </div>
//               ))
//             )}

//           </div>

//         </div>

//       </main>

//     </div>
//   </div>
// );








return (
  <div className="min-h-screen bg-[#f4f7fb] flex flex-col">

    {/* HEADER */}
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-[70px] flex items-center justify-between">

        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-[3px] md:w-[4px] h-8 md:h-10 bg-blue-900 rounded-full"></div>

          <div>
            <h1 className="text-base md:text-lg font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-[10px] md:text-xs text-gray-400">
              EDHAA PUBLIC SCHOOL
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="text-xs md:text-sm px-3 md:px-4 py-1.5 border rounded hover:bg-blue-900 hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </header>

    <div className="flex flex-1">

      {/* SIDEBAR (HIDDEN MOBILE) */}
      <aside className="hidden md:block w-[240px] bg-white border-r px-6 py-6">

        <nav className="space-y-2 text-sm">

          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-50 text-blue-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/news"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive
                  ? "bg-blue-50 text-blue-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            News & Events
          </NavLink>

        </nav>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-4 md:p-6 lg:p-10">

        {/* TITLE */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            News & Events
          </h2>
          <p className="text-xs md:text-sm text-gray-400">
            Manage school announcements and updates
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* FORM */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-xl p-4 md:p-6 shadow-sm">

              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Add New
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-900 outline-none text-sm"
                />

                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-900 outline-none text-sm"
                />

                <label className="block border border-dashed rounded p-4 text-center cursor-pointer hover:bg-gray-50">
                  <p className="text-xs md:text-sm text-gray-500">
                    Upload image
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e.target.files[0])}
                    className="hidden"
                  />
                </label>

                {preview && (
                  <img
                    src={preview}
                    className="w-full h-32 md:h-40 object-cover rounded"
                  />
                )}

                <button
                  disabled={loading}
                  className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition text-sm"
                >
                  {loading ? "Uploading..." : "Add News"}
                </button>

              </form>

            </div>
          </div>

          {/* LIST */}
          <div className="lg:col-span-2 space-y-4">

            {news.length === 0 ? (
              <div className="bg-white border p-6 md:p-8 text-gray-400 text-center rounded-xl">
                No news available
              </div>
            ) : (
              news.map((item) => (
                <div
                  key={item._id}
                  className="bg-white border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition"
                >

                  <div className="flex gap-4 items-center">

                    {item.image && (
                      <img
                        src={item.image}
                        className="w-14 h-14 md:w-16 md:h-16 object-cover rounded"
                      />
                    )}

                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">
                        {item.title}
                      </p>

                      <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-xs md:text-sm px-3 py-1 border text-red-600 rounded hover:bg-red-50"
                  >
                    Delete
                  </button>

                </div>
              ))
            )}

          </div>

        </div>

      </main>

    </div>
  </div>
);







}