import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

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
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white pt-20">
      
      {/* HEADER */}
      <section className="bg-neutral-900 text-white pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-900 via-neutral-900 to-neutral-900 opacity-80"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Let's start a <br/> conversation.</h1>
          <p className="text-xl text-neutral-300">
            Have questions about admissions or want to learn more about our school? We're here to help.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-20 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden flex flex-col lg:flex-row"
        >
          
          {/* CONTACT INFO */}
          <div className="lg:w-2/5 bg-primary-50 p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-primary-100/50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-200 rounded-full blur-[80px] opacity-60"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <motion.div whileHover={{ x: 5 }} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Our Campus</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      EDHAA Public School,<br/>
                      Kozhikode, Kerala,<br/>
                      India - 673001
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone Number</h3>
                    <p className="text-neutral-600 text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary-600 flex items-center justify-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email Address</h3>
                    <p className="text-neutral-600 text-sm">
                      info@edhaaschool.com
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="rounded-2xl overflow-hidden h-56 lg:h-48 bg-neutral-200 border border-white/50 shadow-inner">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=kozhikode&output=embed"
                  className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:w-3/5 p-8 md:p-12 lg:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Send a Message</h2>
            <p className="text-neutral-500 mb-10 text-sm md:text-base">Fill out the form below and our admissions team will get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all text-neutral-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all text-neutral-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-700">Message</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all resize-none text-neutral-900"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-primary-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md shadow-primary-500/20 mt-4"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>

        </motion.div>
      </section>

    </div>
  );
}