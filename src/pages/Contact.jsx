import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Printer, User, ShieldAlert, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-neutral-50 font-sans overflow-hidden">
      
      {/* Contact Hero & Form Layout */}
      <div className="relative bg-primary-900 pt-32 pb-48 lg:pb-64">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400 via-primary-900 to-primary-900"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">Get in Touch</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-primary-200 max-w-2xl mx-auto">
            Whether you have a question about admissions, academic programs, or anything else, our team is ready to answer all your questions.
          </motion.p>
        </div>
      </div>

      {/* Floating Contact Cards & Form */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 lg:-mt-48 relative z-20 mb-24">
        <div className="grid lg:grid-cols-5 gap-8">
          
          <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:col-span-2 space-y-6">
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-5 border border-neutral-100">
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0"><MapPin className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-primary-900 text-lg mb-2">Visit Us</h4>
                <p className="text-neutral-600 leading-relaxed">EDHAA PUBLIC SCHOOL<br/>Survey No. 45/2, Whitefield Main Road,<br/>Bengaluru, Karnataka - 560066</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-5 border border-neutral-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0"><Phone className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-primary-900 text-lg mb-2">Call Us</h4>
                <p className="text-neutral-600 mb-1">+91 80 4123 5678</p>
                <p className="text-neutral-600">+91 98450 12345</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-5 border border-neutral-100">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0"><Mail className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-primary-900 text-lg mb-2">Email Us</h4>
                <p className="text-neutral-600 break-all">info@edhaapublicschool.edu.in</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-3 bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-neutral-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-3xl font-bold text-primary-900 mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-neutral-700 block mb-2">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-4 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-bold text-neutral-700 block mb-2">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-4 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-neutral-700 block mb-2">Your Message</label>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} required className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-4 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30 w-full sm:w-auto flex items-center justify-center gap-2">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Directory of Officers (Card Grid instead of Table) */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Administration</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-900">Directory of Officers</h3>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Smt. Mahalakshmi N Reddy", role: "Secretary", phone: "+91 80 4123 5678", email: "secretary@edhaapublicschool.edu.in" },
              { name: "Shri. Thrilok S", role: "Director", phone: "+91 80 4123 5679", email: "director@edhaapublicschool.edu.in" },
              { name: "Dr. Rajesh Kumar", role: "Principal", phone: "+91 80 4123 5680", email: "principal@edhaapublicschool.edu.in" },
              { name: "Mr. Anand Verma", role: "Admin Officer", phone: "+91 98450 12345", email: "admin@edhaapublicschool.edu.in" }
            ].map((officer, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-primary-900 text-lg mb-1">{officer.name}</h4>
                <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-6">{officer.role}</p>
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>{officer.phone}</p>
                  <p className="break-all">{officer.email}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Map & Grievance Split */}
      <div className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 h-[500px]">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1065449704046!2d77.72898717596006!3d12.964972587349781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453443831!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-red-50 p-10 md:p-14 rounded-3xl border border-red-100">
            <div className="flex items-center gap-4 mb-8 border-b border-red-200 pb-6">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-1">Grievance Redressal</h3>
                <p className="text-red-700 text-sm font-medium">Safe, transparent, and fair resolution.</p>
              </div>
            </div>
            <p className="text-red-900/80 leading-relaxed mb-8">
              EDHAA Public School is committed to providing a safe environment. If you have any grievances regarding academic or administrative matters, please reach out directly to our Grievance Redressal Committee.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 mb-8">
              <h4 className="font-bold text-red-900 mb-4">Grievance Officer Contact</h4>
              <div className="space-y-2 text-neutral-700">
                <p><span className="font-bold">Officer:</span> Dr. Rajesh Kumar (Principal)</p>
                <p><span className="font-bold">Email:</span> grievance@edhaapublicschool.edu.in</p>
                <p><span className="font-bold">Phone:</span> +91 80 4123 5680</p>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
              Submit an Online Grievance
            </button>
          </motion.div>

        </div>
      </div>

    </div>
  );
}