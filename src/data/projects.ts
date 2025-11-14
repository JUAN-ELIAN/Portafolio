import { Project } from '../types/Project';

// Nota: Las imágenes deben estar en la carpeta `public/images/`
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A modern web application for data visualization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project-alpha.png', // Ruta corregida
    type: 'dev',
  },
  {
    id: 2,
    title: 'Bridge Construction',
    description: 'Structural design and analysis of a suspension bridge.',
    technologies: ['AutoCAD', 'SAP2000', 'Concrete'],
    imageUrl: '/images/bridge-construction.png', // Ruta corregida
    type: 'civil',
  },
];
