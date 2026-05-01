import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import schoolImage from "../assets/SchoolImage.jpg";
import axios from "axios";
import { AppContext } from "../context/Appcontext";

export default function Activities() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const { backendURL } = useContext(AppContext);

  const defaultActivityData = {
    title: "Co-Curricular \n Life at Edhaa",
    description: "Education extends beyond four walls. Our structured activities build character, resilience, and leadership skills in alignment with ICSE mandates.",
    image: null,
    spotlight: {
      title: "Scout & Guides",
      description: "The Bharat Scouts and Guides unit is dedicated to developing the physical, intellectual, emotional, and social potentials of young people. Regular camps and community service build lifelong civic responsibility.",
      image: schoolImage
    },
    activities: [
      { title: "Sports & Athletics", description: "Physical education is a mandatory part of our curriculum. Students participate in inter-house and inter-school sports tournaments, promoting physical fitness, discipline, and teamwork.", icon: "Trophy" },
      { title: "Art & Craft", description: "Structured art education is provided to nurture creativity and fine motor skills. Annual exhibitions are held to showcase the artistic achievements of our students.", icon: "Palette" },
      { title: "Cultural Exchange", description: "Various programs are organized to enhance interaction and promote mutual understanding of different cultural traditions and values across regions.", icon: "Users" },
      { title: "Clubs & Committees", description: "Students are encouraged to join specific academic clubs (Science, IT, Literature) to organize exhibitions, seminars, and peer-learning sessions.", icon: "Monitor" },
      { title: "Annual Events", description: "Formal celebration of national festivals, the School Annual Day, and formal talent hunts are organized to provide a stage for artistic performance.", icon: "Music" }
    ],
    events: [
      { date: "15 Aug", title: "Independence Day & March Past" },
      { date: "05 Sep", title: "Teachers' Day Special Assembly" },
      { date: "14 Nov", title: "Children's Day & Cultural Fest" },
      { date: "Dec 2025", title: "Inter-House Sports Meet" }
    ],
    stats: [
      { value: "150+", label: "Projects Annually" },
      { value: "100%", label: "Participation" }
    ]
  };

  const [activityData, setActivityData] = useState(defaultActivityData);
  const [loading, setLoading] = useState(true);

  const renderIcon = (iconName) => {
    if (!iconName || typeof iconName !== "string") return <Icons.Trophy className="w-6 h-6" />;

    // Convert to PascalCase to match Lucide export names (e.g., "calendar-days" -> "CalendarDays")
    const formattedName = iconName
      .split(/[-_ ]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const IconComponent = Icons[formattedName] || Icons[iconName] || Icons.Trophy;
    return <IconComponent className="w-6 h-6" />;
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get(`${backendURL}/activity/get`);
        const data = res.data;
        let fetchedData = [];
        if (Array.isArray(data) && data.length > 0) {
          fetchedData = data;
        } else if (data && Array.isArray(data.activity) && data.activity.length > 0) {
          fetchedData = data.activity;
        } else if (data && Array.isArray(data.activities) && data.activities.length > 0) {
          fetchedData = data.activities;
        } else if (data && Array.isArray(data.data) && data.data.length > 0) {
          fetchedData = data.data;
        }
        
        if (fetchedData.length > 0) {
          const mainDoc = fetchedData[0];
          const allActivities = fetchedData.flatMap(doc => Array.isArray(doc.activities) ? doc.activities : []);
          const allEvents = fetchedData.flatMap(doc => Array.isArray(doc.events) ? doc.events : []);
          const allStats = fetchedData.flatMap(doc => Array.isArray(doc.stats) ? doc.stats : []);

          setActivityData({
            title: mainDoc.title || defaultActivityData.title,
            description: mainDoc.description || defaultActivityData.description,
            image: mainDoc.image || defaultActivityData.image,
            spotlight: mainDoc.spotlight || defaultActivityData.spotlight,
            activities: allActivities.length > 0 ? allActivities : defaultActivityData.activities,
            events: allEvents.length > 0 ? allEvents : defaultActivityData.events,
            stats: allStats.length > 0 ? allStats : defaultActivityData.stats,
          });
        } else if (!Array.isArray(data) && data.title) {
          setActivityData({
            title: data.title || defaultActivityData.title,
            description: data.description || defaultActivityData.description,
            image: data.image || defaultActivityData.image,
            spotlight: data.spotlight || defaultActivityData.spotlight,
            activities: Array.isArray(data.activities) && data.activities.length > 0 ? data.activities : defaultActivityData.activities,
            events: Array.isArray(data.events) && data.events.length > 0 ? data.events : defaultActivityData.events,
            stats: Array.isArray(data.stats) && data.stats.length > 0 ? data.stats : defaultActivityData.stats,
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, [backendURL]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium tracking-wide">Preparing Activities...</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className={`relative py-32 md:py-40 flex items-center justify-center text-center overflow-hidden ${activityData.image ? 'bg-neutral-900' : 'bg-primary-900'}`}>
        {activityData.image ? (
          <>
            <img src={activityData.image} alt="Activities Cover" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </>
        ) : (
          <>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-primary-800 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-blue-600 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
          </>
        )}
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-20 max-w-4xl px-4">
          <span className="text-primary-300 font-bold tracking-widest uppercase text-sm mb-6 block">Beyond the Classroom</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 whitespace-pre-line">
            {activityData.title}
          </h1>
          <p className="text-xl text-neutral-100 leading-relaxed max-w-2xl mx-auto">
            {activityData.description}
          </p>
        </motion.div>
      </div>

      {/* Asymmetrical Activities Grid */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Spotlight Card (Spans 2 columns on lg) */}
          <motion.div variants={fadeUp} className="lg:col-span-2 relative bg-neutral-900 text-white p-10 md:p-14 overflow-hidden group">
            <img src={activityData.spotlight?.image || schoolImage} alt={activityData.spotlight?.title || "Spotlight"} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="relative z-20 h-full flex flex-col justify-end">
              <Icons.Shield className="w-16 h-16 text-primary-300 mb-8" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{activityData.spotlight?.title || "Spotlight"}</h3>
              <p className="text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-md">
                {activityData.spotlight?.description || ""}
              </p>
            </div>
          </motion.div>

          {/* Standard Cards */}
          {activityData.activities.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white border border-neutral-200 p-10 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed flex-1">{item.description || item.desc}</p>
              <div className="mt-8 flex items-center text-primary-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <Icons.ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Activity Calendar Spotlight */}
      <div className="bg-primary-50 py-24 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Academic Year 2025-26</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">Activity Calendar</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              Our comprehensive calendar ensures students balance their rigorous academic schedules with creative, physical, and cultural pursuits throughout the year.
            </p>
            
            <div className="space-y-6 mb-10">
              {activityData.events.map((event, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-white shadow-sm border border-neutral-100 hover:border-primary-300 transition-colors">
                  <div className="bg-primary-100 text-primary-800 font-bold px-4 py-2 text-center min-w-[90px] rounded-sm">
                    {event.date}
                  </div>
                  <div className="font-bold text-neutral-800 text-lg">{event.title}</div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                const printWindow = window.open("", "_blank");
                const content = `
                  <html>
                    <head>
                      <title>Activity Calendar - Edhaa School</title>
                      <style>
                        body { font-family: system-ui, -apple-system, sans-serif; padding: 50px; color: #1a1a1a; line-height: 1.6; }
                        .header { text-align: center; margin-bottom: 50px; border-bottom: 4px solid #1e3a8a; padding-bottom: 20px; }
                        h1 { color: #1e3a8a; font-size: 28px; margin-bottom: 10px; }
                        .description { color: #666; font-size: 16px; max-width: 600px; margin: 0 auto; }
                        .calendar-title { font-size: 22px; color: #1e3a8a; margin-top: 40px; margin-bottom: 20px; font-weight: bold; }
                        .event-list { width: 100%; border-collapse: collapse; }
                        .event-item { border-bottom: 1px solid #eee; padding: 15px 0; display: flex; align-items: center; }
                        .event-date { font-weight: 800; color: #2563eb; width: 120px; font-size: 16px; }
                        .event-title { font-size: 18px; color: #333; font-weight: 600; }
                        .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }
                      </style>
                    </head>
                    <body>
                      <div class="header">
                        <h1>EDHAA SCHOOL</h1>
                        <p>Academic Year 2025-26</p>
                      </div>
                      <div class="calendar-title">Activity Calendar</div>
                      <p class="description">${activityData.description}</p>
                      <div style="margin-top: 40px;">
                        ${activityData.events.map(e => `
                          <div class="event-item">
                            <div class="event-date">${e.date}</div>
                            <div class="event-title">${e.title}</div>
                          </div>
                        `).join("")}
                      </div>
                      <div class="footer">
                        © 2026 Edhaa School. All Rights Reserved. Generated dynamically from the school website.
                      </div>
                      <script>
                        window.onload = function() { window.print(); window.onafterprint = function() { window.close(); }; }
                      </script>
                    </body>
                  </html>
                `;
                printWindow.document.write(content);
                printWindow.document.close();
              }}
              className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary-700 hover:shadow-primary-600/30 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Icons.FileText className="w-5 h-5" /> 
              Download Full PDF
            </button>
          </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-6 opacity-10"></div>
            <div className="bg-white p-10 md:p-14 shadow-2xl rounded-3xl relative z-10 border border-neutral-100">
              <h4 className="text-2xl font-bold text-primary-900 mb-8 border-b border-neutral-200 pb-4">Our Impact</h4>
              <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                Edhaa's activity program is designed to create well-rounded individuals capable of taking on future challenges with confidence and creativity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {activityData.stats.map((stat, i) => (
                  <div key={i} className="bg-neutral-50 p-6 text-center rounded-xl border border-neutral-100">
                    <div className="text-3xl font-black text-primary-600 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}