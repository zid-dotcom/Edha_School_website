export default function Activities() {
  const activities = [
    {
      title: "Sports",
      desc: "Encouraging physical fitness, teamwork, and competitive spirit through structured sports programs.",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200",
    },
    {
      title: "Arts & Crafts",
      desc: "Fostering creativity and imagination through hands-on artistic activities.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
    },
    {
      title: "Music & Dance",
      desc: "Promoting cultural expression and confidence through music and performing arts.",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200",
    },
    {
      title: "Clubs & Programs",
      desc: "Providing opportunities for leadership, collaboration, and skill development.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
  ];

  return (
    <div className="bg-white">

      {/* 🔷 HEADER */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
          Student Life
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Activities
        </h1>

        <div className="w-14 h-[3px] bg-yellow-500 mx-auto mb-6"></div>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We believe in holistic development through a wide range of co-curricular activities.
        </p>
      </section>

      {/*  FEATURED ACTIVITY (BIG SECTION) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-lg">
            <img
              src={activities[0].image}
              alt=""
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              {activities[0].title}
            </h2>

            <div className="w-10 h-[2px] bg-yellow-500 mb-4"></div>

            <p className="text-gray-600 leading-relaxed">
              {activities[0].desc}
            </p>
          </div>

        </div>
      </section>

      {/*  OTHER ACTIVITIES (ZIG-ZAG STYLE) */}
      <section className="max-w-6xl mx-auto px-6 space-y-16 pb-20">
        {activities.slice(1).map((item, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/*  QUOTE (MINIMAL STYLE) */}
      <section className="bg-gray-50 py-20 text-center px-6">
        <p className="max-w-2xl mx-auto text-xl text-gray-700 italic leading-relaxed">
          “Education is not just about books. It’s about experiences, creativity, and growth.”
        </p>
      </section>

    </div>
  );
}