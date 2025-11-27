import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/pageTransitions';
import HeroSection from '../components/home/HeroSection';
import PurposeSection from '../components/home/PurposeSection';
import ServicesSection from '../components/home/ServicesSection';
import SoftwareProjectsSection from '../components/home/SoftwareProjectsSection';
import CivilProjectsSection from '../components/home/CivilProjectsSection';
import ClientsSection from '../components/home/ClientsSection';
import SkillsSection from '../components/home/SkillsSection';
import FloatingContactButton from '../components/shared/FloatingContactButton';
import SpiralBackground from '../components/shared/SpiralBackground';

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <SpiralBackground />
      <HeroSection />
      <PurposeSection />
      <ServicesSection staticMode={true} />
      <SoftwareProjectsSection />
      <CivilProjectsSection />
      <ClientsSection />
      <SkillsSection />
      <FloatingContactButton />
    </motion.div>
  );
};

export default HomePage;
