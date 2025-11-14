import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../../animations/itemVariants';
import SkillBadge from '../shared/SkillBadge';
import {
  FaReact,
  FaNodeJs,
  FaProjectDiagram,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiAutodesk,
} from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: FaReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'AutoCAD', icon: SiAutodesk },
    { name: 'Project Management', icon: FaProjectDiagram },
  ];

  return (
    <motion.section
      className="py-20 px-4 bg-slate-300 text-center relative overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold mb-4">Habilidades y Fortalezas</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;