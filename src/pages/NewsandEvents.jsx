import { useNavigate } from "react-router-dom";

export default function NewsAndEvents() {
  const navigate = useNavigate();

  const featured = {
    title: "Annual Day Celebration 2026",
    desc: "A grand event showcasing talents in dance, music, and drama with participation from all grades.",
    image:
      "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=1200",
  };

  const news = [
    { title: "Science Exhibition — Innovative student projects", date: "Feb 2026" },
    { title: "Sports Day — Athletic excellence and teamwork", date: "Jan 2026" },
    { title: "Arts Festival — Creativity and expression", date: "Dec 2025" },
  ];

  const events = [
    { date: "10 Apr", title: "Parent Meeting" },
    { date: "05 May", title: "Cultural Fest" },
    { date: "01 Jun", title: "School Reopening" },
  ];

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
            {featured.desc}
          </p>

          <button className="text-blue-900 font-medium hover:underline">
            Read more →
          </button>
        </div>

      </section>

      {/* 🔥 CONTENT SPLIT (NO TEMPLATE GRID FEEL) */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-16">

        {/* LEFT: NEWS */}
        <div>
          <h3 className="text-lg font-medium text-blue-900 mb-6">
            Latest Updates
          </h3>

          <div className="space-y-5">
            {news.map((item, i) => (
              <div key={i} className="border-b pb-4 flex justify-between">

                <p className="text-gray-800">{item.title}</p>

                <span className="text-sm text-gray-400">
                  {item.date}
                </span>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: EVENTS */}
        <div>
          <h3 className="text-lg font-medium text-blue-900 mb-6">
            Upcoming Events
          </h3>

          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="flex justify-between border-b pb-3">

                <span className="text-gray-700">{event.title}</span>

                <span className="text-gray-400 text-sm">
                  {event.date}
                </span>

              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 🔥 CTA (SIMPLE, NOT HEAVY) */}
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