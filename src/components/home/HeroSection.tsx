import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../animations/itemVariants';
import { containerVariants } from '../../animations/containerVariants';

const HeroSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-indigo-300 to-violet-300 text-gray-900 py-20 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto text-center">
        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-4">
          Ingenio Full-Stack
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg">
          Del concepto al código, donde la ingeniería civil se encuentra con el desarrollo de software para construir soluciones innovadoras.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
