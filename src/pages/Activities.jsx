export default function Activities() {
  const activities = [
    {
      title: "Sports",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200",
    },
    {
      title: "Arts & Crafts",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
    },
    {
      title: "Music & Dance",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200",
    },
    {
      title: "Clubs",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
  ];

  return (
    <div className="bg-white">

      {/* SIMPLE HEADER */}
      <section className="text-center py-14">
        <h1 className="text-4xl font-bold text-blue-900">Activities</h1>
        <p className="text-gray-500 mt-2">
          Explore student life beyond academics
        </p>
      </section>

      {/* IMAGE GRID (MAIN DESIGN) */}
      <section className="grid md:grid-cols-2 gap-4 px-6 pb-14">
        {activities.map((item, i) => (
          <div key={i} className="relative group h-[250px] rounded-xl overflow-hidden">

            {/* IMAGE */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

            {/* TEXT */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>

          </div>
        ))}
      </section>

      {/* QUOTE SECTION (DIFFERENT STYLE) */}
      <section className="bg-blue-900 text-white py-16 text-center px-6">
        <p className="max-w-2xl mx-auto text-lg italic">
          “Education is not just about books. It’s about experiences, creativity, and growth.”
        </p>
      </section>

    </div>
  );
}