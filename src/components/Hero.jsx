// import schoolImage from "../assets/SchoolImage.jpg";
// import { useNavigate } from "react-router-dom";


// export default function Hero() {

//     const navigate=useNavigate()
//   return (
//     <section className="relative w-full h-[90vh] min-h-[600px] flex items-center">

//       {/* Background Image */}
//       <img
//         src={schoolImage}
//         alt="School"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

//         <p className="text-yellow-400 tracking-widest text-sm mb-3">
//           WELCOME TO
//         </p>

//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           EDHAA <br /> PUBLIC SCHOOL
//         </h1>

//         <p className="max-w-xl text-gray-200 mb-6 text-lg">
//           Nurturing young minds with knowledge, values and compassion to build a better tomorrow.
//         </p>

//         {/* BUTTONS */}
//         <div className="flex gap-4 flex-wrap">
//           <button onClick={()=>navigate('/NewsAndEvenets')} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-medium transition">
//             Explore More →
//           </button>

//           <button onClick={()=>navigate('/Academics')}  className="bg-white/90 hover:bg-white text-black px-6 py-3 rounded-md font-medium transition">
//             About Our School
//           </button>
//         </div>

//       </div>

//       {/* Bottom Info Bar */}
//       <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white py-4">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">

//           <div>
//             <p className="font-semibold text-yellow-400">Quality Education</p>
//             <p className="text-gray-300">Modern learning</p>
//           </div>

//           <div>
//             <p className="font-semibold text-yellow-400">Experienced Faculty</p>
//             <p className="text-gray-300">Expert teachers</p>
//           </div>

//           <div>
//             <p className="font-semibold text-yellow-400">Modern Campus</p>
//             <p className="text-gray-300">Smart classrooms</p>
//           </div>

//           <div>
//             <p className="font-semibold text-yellow-400">Discipline</p>
//             <p className="text-gray-300">Strong values</p>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }






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