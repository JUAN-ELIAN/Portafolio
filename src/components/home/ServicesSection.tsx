import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../animations/itemVariants';
import { containerVariants } from '../../animations/containerVariants';
import { services } from '../../data/services';
import ServiceCard from '../shared/ServiceCard';

const ServicesSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-purple-300 to-fuchsia-300 py-20 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">
          Servicios
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
