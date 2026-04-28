export default function Testimonial() {
  const testimonials = [
    {
      text: "EDHAA Public School has transformed my child's confidence and academic performance. The teachers genuinely invest in every student's journey.",
      name: "Aarav N",
      role: "Parent of Grade 9 Student",
    },
    {
      text: "Amazing teachers and a warm environment. I look forward to school every single day.",
      name: "Meera K",
      role: "Student, Grade 11",
    },
    {
      text: "The focus on discipline and overall development has shaped my child into a confident, responsible individual.",
      name: "Rahul P",
      role: "Parent of Grade 7 Student",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Left-aligned header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-primary-600" />
          <span className="text-primary-600 text-xs font-bold tracking-widest uppercase">
            What people say
          </span>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">

          {/* LARGE featured quote */}
          <div>
            <div className="text-[7rem] text-primary-100 font-serif leading-none select-none -mb-6">"</div>
            <p className="text-2xl md:text-3xl text-neutral-800 leading-relaxed font-medium mb-8">
              {testimonials[0].text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                {testimonials[0].name[0]}
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-sm">{testimonials[0].name}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Smaller secondary testimonials */}
          <div className="space-y-8 lg:pt-8">
            {testimonials.slice(1).map((t, i) => (
              <div key={i} className="pl-5 border-l-2 border-primary-200">
                <p className="text-neutral-600 leading-relaxed mb-3 italic text-base">
                  "{t.text}"
                </p>
                <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}