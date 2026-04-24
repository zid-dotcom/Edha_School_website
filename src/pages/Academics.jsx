export default function Academics() {
  return (
    <div className="bg-white">

      {/* 🔷 INTRO (LEFT-ALIGNED, NOT CENTERED) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6">
          Academics
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          At EDHAA Public School, our academic framework is designed to build
          strong foundations, encourage critical thinking, and prepare students
          for future challenges.
        </p>
      </section>

      {/* 🔥 ACADEMIC STRUCTURE (NOT CARDS / NOT GRID HEAVY) */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-16">

        {/* PRIMARY */}
        <div>
          <h2 className="text-2xl font-medium text-blue-900 mb-3">
            Primary Education
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Focuses on building core literacy, numeracy, and communication skills
            through engaging and interactive learning methods.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h2 className="text-2xl font-medium text-blue-900 mb-3">
            Middle School
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Emphasizes conceptual understanding, analytical thinking, and subject
            depth to strengthen academic foundations.
          </p>
        </div>

        {/* HIGH SCHOOL */}
        <div>
          <h2 className="text-2xl font-medium text-blue-900 mb-3">
            High School
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Prepares students for board examinations with structured curriculum,
            consistent evaluation, and expert guidance.
          </p>
        </div>

      </section>

      {/* 🔥 IMAGE BREAK (ONLY ONE, PURPOSEFUL) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200"
          alt="Classroom"
          className="w-full h-[350px] object-cover"
        />
      </section>

      {/* 🔥 APPROACH SECTION (DIFFERENT STRUCTURE) */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <h2 className="text-2xl font-medium text-blue-900 mb-6">
          Our Learning Approach
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-600">

          <p>
            Experienced faculty guide students with a focus on clarity,
            discipline, and consistent progress.
          </p>

          <p>
            Technology-enabled classrooms enhance understanding and make
            learning more interactive.
          </p>

          <p>
            Regular assessments help track performance and provide timely
            feedback for improvement.
          </p>

          <p>
            Equal importance is given to values, behavior, and overall
            development.
          </p>

        </div>

      </section>

    </div>
  );
}