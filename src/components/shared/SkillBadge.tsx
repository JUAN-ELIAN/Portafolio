import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  icon: IconType;
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon: Icon, name }) => {
  return (
    <motion.div
      className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg"
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
    >
      <Icon className="text-4xl text-gray-800 mr-4" />
      <span className="text-lg font-semibold">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
