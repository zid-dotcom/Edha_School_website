export default function AboutUs() {
  return (
    <div className="bg-white">

      {/*  INTRO SECTION (LEFT TEXT STYLE) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            About Our School
          </h1>

          <p className="text-gray-600 mb-4">
            EDHAA Public School is committed to providing quality education that nurtures
            knowledge, discipline, and values. We believe in shaping young minds to become
            responsible citizens and future leaders.
          </p>

          <p className="text-gray-600">
            Our approach focuses on both academic excellence and holistic development,
            ensuring every student reaches their full potential.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200"
          alt="School"
          className="rounded-xl shadow-md"
        />
      </section>

      {/*  MISSION & VISION (SIDE BY SIDE CARDS) */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm">
              To provide a nurturing environment where students can excel academically,
              develop strong values, and become confident individuals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm">
              To be a leading institution that inspires innovation, leadership, and
              lifelong learning in every student.
            </p>
          </div>

        </div>
      </section>

      {/*  LEADERSHIP SECTION (IMPORTANT) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
          Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Secretary */}
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-900 text-white flex items-center justify-center text-xl font-semibold mb-4">
              M
            </div>
            <h3 className="text-lg font-semibold text-blue-900">
              Mahalakshmi N Reddy
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Secretary
            </p>
            <p className="text-gray-600 text-sm">
              Providing strong leadership and vision for the growth and development of the institution.
            </p>
          </div>

          {/* Director */}
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-900 text-white flex items-center justify-center text-xl font-semibold mb-4">
              T
            </div>
            <h3 className="text-lg font-semibold text-blue-900">
              Thrilok S
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Director
            </p>
            <p className="text-gray-600 text-sm">
              Leading academic excellence and ensuring high-quality education standards.
            </p>
          </div>

        </div>
      </section>

      {/*  VALUES SECTION (DIFFERENT STYLE - HORIZONTAL) */}
      <section className="bg-blue-900 text-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-bold mb-8">
            Our Core Values
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">Excellence</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Integrity</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Discipline</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Respect</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Innovation</span>
          </div>

        </div>
      </section>

    </div>
  );
}