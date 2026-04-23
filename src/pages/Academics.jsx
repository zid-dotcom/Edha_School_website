export default function Academics() {
  const sections = [
    {
      title: "Primary Education",
      desc: "Building strong foundations in literacy, numeracy, and basic concepts through interactive learning.",
      icon: "📘",
    },
    {
      title: "Middle School",
      desc: "Focusing on analytical thinking, subject depth, and overall personality development.",
      icon: "📗",
    },
    {
      title: "High School",
      desc: "Preparing students for board exams with structured curriculum and expert guidance.",
      icon: "🎓",
    },
  ];

  const features = [
    "Experienced & Qualified Teachers",
    "Smart Classrooms & Digital Learning",
    "Activity-Based Learning",
    "Regular Assessments & Feedback",
    "Focus on Discipline & Values",
    "Individual Student Attention",
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Academics
        </h1>
        <p className="text-gray-200 max-w-xl mx-auto">
          Our academic programs are designed to nurture knowledge, skills, and values in every student.
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Our Academic Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Why Choose Our Academics
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-yellow-500 text-lg">✔</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-14 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Join Our School?
        </h2>
        <p className="text-gray-200 mb-6">
          Give your child the best education and future.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-medium transition">
          Contact Us
        </button>
      </section>

    </div>
  );
}