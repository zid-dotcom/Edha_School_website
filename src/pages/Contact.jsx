import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50">

      {/* HEADER (MINIMAL STYLE - DIFFERENT) */}
      <section className="text-center py-14">
        <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We’d love to hear from you
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-900"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-900"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center">

          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6">
            Feel free to contact us for admissions, queries, or any information about our school.
          </p>

          <div className="space-y-4 text-gray-700">

            <div>
              <p className="font-medium">📍 Address</p>
              <p className="text-sm text-gray-500">
                Kozhikode, Kerala, India
              </p>
            </div>

            <div>
              <p className="font-medium">📞 Phone</p>
              <p className="text-sm text-gray-500">
                +91 98765 43210
              </p>
            </div>

            <div>
              <p className="font-medium">✉️ Email</p>
              <p className="text-sm text-gray-500">
                info@edhaaschool.com
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* MAP SECTION */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">

          <iframe
            title="map"
            src="https://www.google.com/maps?q=kozhikode&output=embed"
            className="w-full h-[300px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>
      </section>

    </div>
  );
}