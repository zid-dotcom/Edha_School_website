import React from 'react'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonials'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Heart, Shield, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary-600" />,
    title: "Global Curriculum",
    description: "Our curriculum is designed to meet international standards, ensuring students are prepared for global challenges."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary-600" />,
    title: "Modern Facilities",
    description: "State-of-the-art labs, libraries, and sports complexes that foster holistic development."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary-600" />,
    title: "Safe Environment",
    description: "24/7 security and a nurturing atmosphere where every child feels valued and protected."
  },
  {
    icon: <Heart className="w-6 h-6 text-primary-600" />,
    title: "Dedicated Faculty",
    description: "Experienced educators who are passionate about mentoring the next generation of leaders."
  }
]

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Features Section */}
      <section className="section-padding bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Why choose EDHAA?
              </h2>
              <p className="text-lg text-neutral-600">
                We combine academic rigor with character building, providing an environment where students can truly discover their potential.
              </p>
            </div>
            <button 
              onClick={() => navigate("/AboutUs")}
              className="group flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full blur-[100px] opacity-50"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to shape your child's future?
              </h2>
              <p className="text-primary-100 text-lg mb-10">
                Join EDHAA Public School today and give your child the foundation they need to succeed in life.
              </p>
              <button 
                onClick={() => navigate("/Contact")}
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg"
              >
                Start Admission Process
              </button>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
    </div>
  )
}

export default Home
