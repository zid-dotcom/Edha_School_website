// export default function Testimonial() {
//   const testimonials = [
//     {
//       name: "Aarav N",
//       role: "Parent",
//       message:
//         "EDHAA Public School has transformed my child’s learning experience. The teachers are highly supportive and caring.",
//     },
//     {
//       name: "Meera K",
//       role: "Student",
//       message:
//         "The environment here is very friendly and motivating. I enjoy learning and participating in activities.",
//     },
//     {
//       name: "Rahul P",
//       role: "Parent",
//       message:
//         "Excellent academics and discipline. The school focuses on both education and character building.",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* TITLE */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-blue-900 mb-2">
//             What People Say
//           </h2>
//           <p className="text-gray-500">
//             Hear from our students and parents
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-3 gap-6">

//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
//             >
//               {/* MESSAGE */}
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 “{item.message}”
//               </p>

//               {/* USER */}
//               <div>
//                 <h4 className="font-semibold text-blue-900">
//                   {item.name}
//                 </h4>
//                 <span className="text-xs text-gray-400">
//                   {item.role}
//                 </span>
//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }









export default function Testimonial() {
  const testimonials = [
    {
      text: "EDHAA Public School helped my child grow academically and personally.",
      name: "Aarav N",
      role: "Parent",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Amazing teachers and a very friendly environment for learning.",
      name: "Meera K",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "The school focuses on discipline and overall development.",
      name: "Rahul P",
      role: "Parent",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      text: "I love the activities and modern classrooms here.",
      name: "Anjali S",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: "Best school experience with great support from teachers.",
      name: "Vishnu K",
      role: "Parent",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      text: "Very inspiring and motivating atmosphere.",
      name: "Neha R",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
    },
  ];

  const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" },
  ];

  const renderCard = (t, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 hover:shadow-md rounded-xl p-5 w-[320px] shrink-0 transition"
    >
      {/* ⭐ Stars */}
      <div className="flex mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
        “{t.text}”
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src={t.image}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-blue-900">{t.name}</p>
          <p className="text-xs text-gray-400">{t.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scrollReverse 20s linear infinite;
        }
      `}</style>

      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <div className="text-center mb-10">
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-blue-900 mt-3">
              What Our Students & Parents Say
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Real experiences from our school community
            </p>
          </div>

          {/* SCROLL ROWS */}
          <div className="space-y-6">
            {rows.map((row, idx) => (
              <div key={idx} className="relative overflow-hidden">

                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

                <div className={`flex gap-6 ${row.className}`}>
                  {[...testimonials.slice(row.start, row.end),
                    ...testimonials.slice(row.start, row.end)
                  ].map(renderCard)}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}