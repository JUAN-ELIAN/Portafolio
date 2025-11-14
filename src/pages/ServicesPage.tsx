import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/pageTransitions';
import ServicesSection from '../components/home/ServicesSection';

const ServicesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      <ServicesSection />
    </motion.div>
  );
};

export default ServicesPage;
