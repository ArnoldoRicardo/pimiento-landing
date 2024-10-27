import React from 'react';
import { FaCode, FaMobile, FaCloud, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: <FaCode className="h-12 w-12 text-red-600" />,
      title: "Web Development",
      description: "Custom web applications and responsive websites built with cutting-edge technologies."
    },
    {
      icon: <FaMobile className="h-12 w-12 text-red-600" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: <FaCloud className="h-12 w-12 text-red-600" />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure implementation and management."
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-red-600" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your business processes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software solutions tailored to your specific needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;