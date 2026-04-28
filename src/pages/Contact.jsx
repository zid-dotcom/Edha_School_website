import { useState } from "react";
import { MapPin, Phone, Mail, Printer, User, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("contact");
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
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "contact":
        return (
          <div className="p-0 grid md:grid-cols-2">
            {/* Contact Details */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col gap-6 bg-white">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-neutral-100 p-2 border border-neutral-200 text-primary-600 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 text-sm mb-1 uppercase tracking-wider">Address</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    EDHAA PUBLIC SCHOOL<br />
                    Survey No. 45/2, Whitefield Main Road,<br />
                    Bengaluru, Karnataka - 560066
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-neutral-100 p-2 border border-neutral-200 text-primary-600 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 text-sm mb-1 uppercase tracking-wider">Phone Number</h3>
                  <p className="text-sm text-neutral-600">+91 80 4123 5678, +91 98450 12345</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-neutral-100 p-2 border border-neutral-200 text-primary-600 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-800 text-sm mb-1 uppercase tracking-wider">Email Address</h3>
                  <p className="text-sm text-neutral-600">info@edhaapublicschool.edu.in</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-neutral-200">
                <button 
                  onClick={() => window.print()}
                  className="flex items-center gap-2 text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors uppercase tracking-wider"
                >
                  <Printer className="w-4 h-4" /> Print Contact Details
                </button>
              </div>
            </div>

            {/* Simple Form typical of institutional feedback sections */}
            <div className="p-6 bg-neutral-50">
              <h3 className="font-bold text-primary-800 text-sm mb-4 uppercase tracking-wider border-b border-neutral-300 pb-2">Feedback / Enquiry Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-600">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-600">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-600">Message / Enquiry <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary-600 text-white px-5 py-2 text-sm font-bold uppercase hover:bg-primary-700 transition-colors border border-primary-800 shadow-sm"
                >
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        );

      case "directory":
        return (
          <div className="p-6 bg-white">
            <h3 className="font-bold text-primary-800 text-sm mb-4 uppercase tracking-wider border-b border-neutral-300 pb-2">Directory of Officers</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-neutral-100 text-primary-800 text-sm border-b border-neutral-300">
                    <th className="p-3 font-bold border-r border-neutral-300">Name</th>
                    <th className="p-3 font-bold border-r border-neutral-300">Designation</th>
                    <th className="p-3 font-bold border-r border-neutral-300">Contact Number</th>
                    <th className="p-3 font-bold">Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 text-sm">
                    <td className="p-3 border-r border-neutral-200 font-bold text-primary-700">Smt. Mahalakshmi N Reddy</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">Secretary</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">+91 80 4123 5678</td>
                    <td className="p-3 text-neutral-600">secretary@edhaapublicschool.edu.in</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 text-sm">
                    <td className="p-3 border-r border-neutral-200 font-bold text-primary-700">Shri. Thrilok S</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">Director</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">+91 80 4123 5679</td>
                    <td className="p-3 text-neutral-600">director@edhaapublicschool.edu.in</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 text-sm">
                    <td className="p-3 border-r border-neutral-200 font-bold text-primary-700">Dr. Rajesh Kumar</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">Principal</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">+91 80 4123 5680</td>
                    <td className="p-3 text-neutral-600">principal@edhaapublicschool.edu.in</td>
                  </tr>
                  <tr className="border-b border-neutral-200 hover:bg-neutral-50 text-sm">
                    <td className="p-3 border-r border-neutral-200 font-bold text-primary-700">Mr. Anand Verma</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">Admin Officer</td>
                    <td className="p-3 border-r border-neutral-200 text-neutral-600">+91 98450 12345</td>
                    <td className="p-3 text-neutral-600">admin@edhaapublicschool.edu.in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "map":
        return (
          <div className="p-6 bg-white flex flex-col gap-4">
            <h3 className="font-bold text-primary-800 text-sm uppercase tracking-wider border-b border-neutral-300 pb-2">School Location Map</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Find us easily using the interactive map below. Our campus is situated in the prominent educational hub of Whitefield, Bengaluru.
            </p>
            <div className="w-full h-[400px] border-4 border-neutral-200 bg-neutral-100 flex items-center justify-center relative">
              {/* Google Maps embed iframe pointing to Whitefield Bengaluru */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1065449704046!2d77.72898717596006!3d12.964972587349781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708453443831!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        );

      case "grievance":
        return (
          <div className="p-6 bg-white">
            <div className="flex items-center gap-3 border-b border-neutral-300 pb-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-primary-800 text-sm uppercase tracking-wider">Grievance Redressal</h3>
            </div>
            
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              EDHAA Public School is committed to providing a safe, transparent, and fair environment. If you have any grievances or complaints regarding academic or administrative matters, please reach out to our dedicated Grievance Redressal Committee.
            </p>
            
            <div className="bg-neutral-50 border border-neutral-200 p-5 mb-6">
              <h4 className="font-bold text-primary-800 text-sm mb-3 border-b border-neutral-200 pb-2">Grievance Officer Contact</h4>
              <div className="flex items-start gap-4 mb-2">
                <User className="w-4 h-4 text-primary-600 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-sm text-neutral-800">Dr. Rajesh Kumar (Principal)</p>
                  <p className="text-sm text-neutral-600">grievance@edhaapublicschool.edu.in</p>
                  <p className="text-sm text-neutral-600">+91 80 4123 5680</p>
                </div>
              </div>
            </div>

            <h4 className="font-bold text-primary-800 text-sm mb-3">Online Grievance Submission</h4>
            <form onSubmit={(e) => { e.preventDefault(); alert("Grievance registered. The officer will contact you shortly."); }} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-600">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" required className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-600">Role <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500">
                    <option value="">Select Role</option>
                    <option value="parent">Parent / Guardian</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff Member</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-neutral-600">Detailed Description of Grievance <span className="text-red-500">*</span></label>
                  <textarea rows="5" required className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500 resize-none" />
                </div>
                <button type="submit" className="bg-red-600 text-white px-5 py-2 text-sm font-bold uppercase hover:bg-red-700 transition-colors border border-red-800 shadow-sm">
                  Register Grievance
                </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  const menuItems = [
    { id: "contact", label: "Contact Details" },
    { id: "directory", label: "Directory of Officers" },
    { id: "map", label: "School Location Map" },
    { id: "grievance", label: "Grievance Redressal" },
  ];

  return (
    <div className="bg-neutral-50 font-sans pb-10 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary-700 py-6 px-4 border-b border-primary-800">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white uppercase tracking-wider">Contact Us</h1>
            <p className="text-primary-200 text-sm mt-1 font-medium">Home / Contact Us</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-0">
          
        {/* Left Sidebar Menu */}
        <div className="md:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800">
                    Contact Menu
                </div>
                <div className="flex flex-col text-sm font-bold text-primary-800">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`p-3 text-left border-b border-neutral-200 transition-colors ${
                          activeTab === item.id 
                            ? "bg-neutral-50 border-l-4 border-primary-600" 
                            : "hover:bg-neutral-50 border-l-4 border-transparent"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-9 flex flex-col gap-6">
            <div className="bg-white border border-neutral-200 shadow-sm">
                <div className="bg-neutral-100 text-primary-800 px-4 py-3 font-bold uppercase text-sm border-b border-neutral-300">
                    {menuItems.find(i => i.id === activeTab)?.label}
                </div>
                
                {renderContent()}

            </div>
        </div>
      </div>
    </div>
  );
}