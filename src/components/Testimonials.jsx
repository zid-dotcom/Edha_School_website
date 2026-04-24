export default function Testimonial() {
  const testimonials = [
    {
      text: "EDHAA Public School helped my child grow academically and personally.",
      name: "Aarav N",
      role: "Parent",
    },
    {
      text: "Amazing teachers and a very friendly environment for learning.",
      name: "Meera K",
      role: "Student",
    },
    {
      text: "The school focuses on discipline and overall development.",
      name: "Rahul P",
      role: "Parent",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* 🔷 HEADER */}
        <div className="mb-16 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
            Voices of Our Community
          </p>

          <h2 className="text-4xl font-semibold text-blue-900 leading-tight">
            What Our Students & Parents Say
          </h2>

          <div className="w-14 h-[2px] bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* 🔥 MAIN FEATURED QUOTE */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium">
            “{testimonials[0].text}”
          </p>

          <div className="mt-6">
            <p className="text-blue-900 font-semibold">
              {testimonials[0].name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[0].role}
            </p>
          </div>
        </div>

        {/* 🔥 SECONDARY TESTIMONIALS (MINIMAL GRID) */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.slice(1).map((t, i) => (
            <div key={i}>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                “{t.text}”
              </p>

              <div>
                <p className="text-blue-900 font-medium">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">
                  {t.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}