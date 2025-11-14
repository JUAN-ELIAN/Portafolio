import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden relative" // Posición relativa para la insignia
      whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
    >
      {/* Insignia de Tipo de Proyecto */}
      <span className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${project.type === 'dev' ? 'bg-blue-600' : 'bg-gray-600'}`}>
        {project.type.toUpperCase()}
      </span>

      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
