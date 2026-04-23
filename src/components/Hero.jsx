import schoolImage from "../assets/SchoolImage.jpg";
import { useNavigate } from "react-router-dom";


export default function Hero() {

    const navigate=useNavigate()
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center">

      {/* Background Image */}
      <img
        src={schoolImage}
        alt="School"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <p className="text-yellow-400 tracking-widest text-sm mb-3">
          WELCOME TO
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          EDHAA <br /> PUBLIC SCHOOL
        </h1>

        <p className="max-w-xl text-gray-200 mb-6 text-lg">
          Nurturing young minds with knowledge, values and compassion to build a better tomorrow.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap">
          <button onClick={()=>navigate('/NewsAndEvenets')} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-medium transition">
            Explore More →
          </button>

          <button onClick={()=>navigate('/Academics')}  className="bg-white/90 hover:bg-white text-black px-6 py-3 rounded-md font-medium transition">
            About Our School
          </button>
        </div>

      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">

          <div>
            <p className="font-semibold text-yellow-400">Quality Education</p>
            <p className="text-gray-300">Modern learning</p>
          </div>

          <div>
            <p className="font-semibold text-yellow-400">Experienced Faculty</p>
            <p className="text-gray-300">Expert teachers</p>
          </div>

          <div>
            <p className="font-semibold text-yellow-400">Modern Campus</p>
            <p className="text-gray-300">Smart classrooms</p>
          </div>

          <div>
            <p className="font-semibold text-yellow-400">Discipline</p>
            <p className="text-gray-300">Strong values</p>
          </div>

        </div>
      </div>

    </section>
  );
}