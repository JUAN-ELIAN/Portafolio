import { Project } from '../types/Project';

// Importar imágenes de la Sección 2
import img1 from '../assets/images/Seccion2/1.png';
import img2 from '../assets/images/Seccion2/2.png';
import img3 from '../assets/images/Seccion2/3.png';
import img4 from '../assets/images/Seccion2/4.png';
import img5 from '../assets/images/Seccion2/5.png';
import img6 from '../assets/images/Seccion2/6.png';
import img7 from '../assets/images/Seccion2/7.png';
import img8 from '../assets/images/Seccion2/8.png';
import img9 from '../assets/images/Seccion2/9.png';
import img10 from '../assets/images/Seccion2/9.1.png'; // Usando 9.1 como 10
import img11 from '../assets/images/Seccion2/11.png';
import img12 from '../assets/images/Seccion2/12.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A modern web application for data visualization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project-alpha.png',
    type: 'dev',
  },
  {
    id: 2,
    title: 'Bridge Construction',
    description: 'Structural design and analysis of a suspension bridge.',
    technologies: ['AutoCAD', 'SAP2000', 'Concrete'],
    imageUrl: '/images/bridge-construction.png',
    type: 'civil',
  },
];

export interface PurposeItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export const purposeData: PurposeItem[] = [
  { id: 1, imageUrl: img1, title: "Fundamentos", description: "El inicio de todo: la base sólida sobre la que se construye el conocimiento." },
  { id: 2, imageUrl: img2, title: "Estructura", description: "Diseñando el esqueleto de soluciones robustas y escalables." },
  { id: 3, imageUrl: img3, title: "Conexión", description: "Uniendo puntos dispares para crear sistemas cohesivos." },
  { id: 4, imageUrl: img4, title: "Análisis", description: "Profundizando en los datos para encontrar la verdad oculta." },
  { id: 5, imageUrl: img5, title: "Diseño", description: "La forma sigue a la función: estética industrial y funcional." },
  { id: 6, imageUrl: img6, title: "Desarrollo", description: "Escribiendo el código que da vida a las ideas." },
  { id: 7, imageUrl: img7, title: "Ingeniería", description: "Aplicando principios físicos al mundo digital." },
  { id: 8, imageUrl: img8, title: "Innovación", description: "Buscando nuevas formas de resolver viejos problemas." },
  { id: 9, imageUrl: img9, title: "Integración", description: "Fusionando el hormigón con el silicio." },
  { id: 10, imageUrl: img10, title: "Optimización", description: "Refinando cada proceso para la máxima eficiencia." },
  { id: 11, imageUrl: img11, title: "Despliegue", description: "Llevando las soluciones al mundo real." },
  { id: 12, imageUrl: img12, title: "Impacto", description: "El resultado final: valor tangible y duradero." },
];
