import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../../animations/containerVariants';
import { itemVariants } from '../../animations/itemVariants';
import { projects } from '../../data/projects';
import ProjectCard from '../shared/ProjectCard';

const DevProjectsSection = () => {
  const devProjects = projects.filter((project) => project.type === 'dev');

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-fuchsia-300 to-pink-300 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">
          Proyectos de Desarrollo de Software
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {devProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DevProjectsSection;
