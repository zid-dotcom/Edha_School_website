import { useNavigate } from "react-router-dom";




export default function Facilities() {
  const navigate = useNavigate();

  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Equipped with digital tools and interactive boards to enhance learning.",
    },
    {
      title: "Science Laboratories",
      desc: "Well-equipped labs for practical learning in physics, chemistry, and biology.",
    },
    {
      title: "Library",
      desc: "A rich collection of books and digital resources for students of all levels.",
    },
    {
      title: "Sports Facilities",
      desc: "Spacious grounds for outdoor games and structured physical activities.",
    },
    {
      title: "Computer Lab",
      desc: "Modern systems with internet access to support digital education.",
    },
    {
      title: "Transportation",
      desc: "Safe and reliable transport system covering nearby areas.",
    },
  ];


  return (
    <div className="bg-white">

      {/*  HEADER */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6">
          Facilities
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Our campus is designed to provide a safe, comfortable, and enriching environment
          that supports both academic and personal development.
        </p>
      </section>

      {/*  MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200"
          alt="School campus"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </section>

      {/*  FACILITIES LIST (NO GRID, NO CARDS) */}
      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-10">
        {facilities.map((item, i) => (
          <div key={i} className="border-b pb-5">

            <h2 className="text-xl font-medium text-blue-900 mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}
      </section>

      {/*  SECOND IMAGE (OPTIONAL, SIMPLE) */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200"
          alt="Students"
          className="w-full h-[250px] object-cover"
        />
      </section>

      {/*  CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <p className="text-gray-600 mb-6">
          Visit our campus to experience the facilities firsthand.
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


































































































































