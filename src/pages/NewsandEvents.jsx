import { useNavigate } from "react-router-dom";

export default function NewsandEvents() {
  const navigate = useNavigate();

  const featured = {
    title: "Annual Day Celebration 2026",
    desc: "A grand event showcasing talents in dance, music, and drama with full participation from students.",
    image:
      "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1200",
  };

  const news = [
    {
      title: "Science Exhibition",
      date: "Feb 2026",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Sports Day",
      date: "Jan 2026",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200",
    },
    {
      title: "Arts Festival",
      date: "Dec 2025",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200",
    },
  ];

  const events = [
    {
      title: "Parent Meeting",
      date: "April 10",
    },
    {
      title: "Cultural Fest",
      date: "May 05",
    },
    {
      title: "School Reopening",
      date: "June 01",
    },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 TOP SPLIT SECTION (Different UI) */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        
        {/* TEXT */}
        <div className="flex flex-col justify-center px-8 md:px-16 bg-gray-50">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            News & Events
          </h1>
          <p className="text-gray-600 max-w-md">
            Stay updated with the latest happenings, celebrations, and important events in our school.
          </p>
        </div>

        {/* IMAGE */}
        <div className="h-[300px] md:h-auto">
          <img
            src={featured.image}
            alt="Featured"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 📰 FEATURED NEWS */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <img
            src={featured.image}
            alt=""
            className="rounded-xl shadow-md"
          />

          <div>
            <span className="text-yellow-500 text-sm font-medium">
              Featured
            </span>
            <h2 className="text-2xl font-bold text-blue-900 mt-2 mb-3">
              {featured.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {featured.desc}
            </p>

            <button className="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* 📰 NEWS GRID (Image Style) */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Latest Updates
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div key={i} className="group cursor-pointer">

                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-48 object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="mt-3">
                  <span className="text-xs text-gray-400">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {item.title}
                  </h3>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧭 TIMELINE EVENTS (DIFFERENT LOOK) */}
     <section className="max-w-4xl mx-auto px-6 py-14">
  <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
    Upcoming Events
  </h2>

  <div className="space-y-4">
    {events.map((event, i) => (
      <div
        key={i}
        className="flex justify-between items-center border-b border-gray-200 pb-3"
      >
        <h3 className="text-gray-800 font-medium">
          {event.title}
        </h3>

        <span className="text-sm text-gray-500">
          {event.date}
        </span>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Stay Updated
        </h2>

        <button
          onClick={() => navigate("/Contact")}
          className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}