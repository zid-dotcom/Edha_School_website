





import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/Appcontext";

export default function NewsAndEvents() {
  const navigate = useNavigate();
  const { backendURL } = useContext(AppContext);

  const [newsData, setNewsData] = useState([]);

  // 🔥 FETCH NEWS
  const fetchNews = async () => {
    try {
      const res = await axios.get(`${backendURL}/get`);

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.news || [];

      setNewsData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // 🔥 FEATURED (first item)
  const featured = newsData[0];

  return (
    <div className="bg-white">

      {/* 🔷 HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-4">
          News & Events
        </h1>

        <p className="text-gray-600 max-w-xl">
          Stay updated with the latest happenings, announcements, and important events at our school.
        </p>
      </section>

      {/* 🔥 FEATURED */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">

          <img
            src={featured.image}
            alt=""
            className="w-full h-[300px] md:h-[350px] object-cover"
          />

          <div>
            <p className="text-sm text-gray-400 mb-2">Featured</p>

            <h2 className="text-2xl font-medium text-blue-900 mb-3">
              {featured.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {featured.description}
            </p>
          </div>

        </section>
      )}

      {/* 🔥 LIST */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h3 className="text-lg font-medium text-blue-900 mb-6">
          Latest Updates
        </h3>

        {newsData.length === 0 ? (
          <p className="text-gray-400">No news available</p>
        ) : (
          <div className="space-y-6">

            {newsData.map((item) => (
              <div
                key={item._id}
                className="flex gap-6 border-b pb-5 items-center"
              >

                {item.image && (
                  <img
                    src={item.image}
                    className="w-24 h-20 object-cover rounded"
                  />
                )}

                <div>
                  <p className="text-gray-800 font-medium">
                    {item.title}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">

        <p className="text-gray-600 mb-6">
          For more information about school activities and updates, feel free to reach out.
        </p>

        <button
          onClick={() => navigate("/Contact")}
          className="border border-blue-900 text-blue-900 px-6 py-2 hover:bg-blue-900 hover:text-white transition"
        >
          Contact Us
        </button>

      </section>

    </div>
  );
}