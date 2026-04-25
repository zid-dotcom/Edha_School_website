




import schoolImage from "../assets/SchoolImage.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-white flex items-center">

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
            EDHAA PUBLIC SCHOOL
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
            Building Future <br /> Through Education
          </h1>

          <div className="w-14 h-[3px] bg-yellow-500 mb-6"></div>

          <p className="text-gray-600 max-w-md mb-8 text-lg leading-relaxed">
            We nurture young minds with knowledge, discipline, and values,
            creating confident individuals ready for tomorrow.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/Academics")}
              className="bg-blue-900 text-white px-6 py-3 hover:bg-blue-800 transition"
            >
              Explore Academics
            </button>

            <button
              onClick={() => navigate("/AboutUs")}
              className="border border-blue-900 text-blue-900 px-6 py-3 hover:bg-blue-900 hover:text-white transition"
            >
              About Our School
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[300px] md:h-[500px] lg:h-[600px]">
          <img
            src={schoolImage}
            alt="School"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

    </section>
  );
}