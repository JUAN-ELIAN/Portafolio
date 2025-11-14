import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/pageTransitions';
import HeroSection from '../components/home/HeroSection';
import PurposeSection from '../components/home/PurposeSection';
import ServicesSection from '../components/home/ServicesSection';
import DevProjectsSection from '../components/home/DevProjectsSection';
import CivilProjectsSection from '../components/home/CivilProjectsSection';
import ClientsSection from '../components/home/ClientsSection';
import SkillsSection from '../components/home/SkillsSection';

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <HeroSection />
      <PurposeSection />
      <ServicesSection />
      <DevProjectsSection />
      <CivilProjectsSection />
      <ClientsSection />
      <SkillsSection />
    </motion.div>
  );
};

export default HomePage;
