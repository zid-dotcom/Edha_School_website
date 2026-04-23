import { useNavigate } from "react-router-dom";

export default function Facilities() {
  const navigate = useNavigate();

  const items = [
    "Smart Classrooms",
    "Science Laboratories",
    "Library",
    "Sports Ground",
    "Computer Lab",
    "Transportation",
  ];

  return (
    <div className="bg-gray-50">

      {/* SPLIT HERO (DIFFERENT FROM ACTIVITIES) */}
      <section className="grid md:grid-cols-2 items-center">

        <div className="p-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Our Facilities
          </h1>
          <p className="text-gray-600">
            Modern infrastructure designed to create a safe and inspiring learning environment.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </section>

      {/* LIST STYLE (NOT CARDS) */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          What We Provide
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-yellow-500 text-lg">✔</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE STRIP (DIFFERENT STYLE) */}
      <section className="grid md:grid-cols-3 gap-2 px-6 pb-14">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" className="h-48 w-full object-cover rounded-lg"/>
        <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200" className="h-48 w-full object-cover rounded-lg"/>
        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200" className="h-48 w-full object-cover rounded-lg"/>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Visit Our Campus
        </h2>

        <button
          onClick={() => navigate("/Contact")}
          className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800"
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}