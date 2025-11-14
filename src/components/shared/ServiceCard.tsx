import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../types/Service';
import { FaCode, FaRulerCombined, FaTasks } from 'react-icons/fa';

interface ServiceCardProps {
  service: Service;
}

const iconMap: { [key: string]: React.ElementType } = {
  FaCode,
  FaRulerCombined,
  FaTasks,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-6 text-center"
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
    >
      <Icon className="text-4xl text-gray-800 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
