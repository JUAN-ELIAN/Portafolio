import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../animations/itemVariants';

const ClientsSection = () => {
  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-rose-300 to-slate-300 text-center relative overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold mb-4">Proyectos Realizados y Clientes</h2>
      <p className="text-lg text-gray-600">"Del concepto al código, construyendo soluciones tangibles."</p>
      {/* Client logos or project symbols will go here */}
    </motion.section>
  );
};

export default ClientsSection;
