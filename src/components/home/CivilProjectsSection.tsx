import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../animations/itemVariants';

const CivilProjectsSection = () => {
  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-pink-300 to-rose-300 text-center relative overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold mb-4">Proyectos de Ingeniería Civil</h2>
      <p className="text-lg text-gray-600">Próximamente: Proyectos destacados del mundo de la ingeniería.</p>
      {/* ProjectCards will go here */}
    </motion.section>
  );
};

export default CivilProjectsSection;
