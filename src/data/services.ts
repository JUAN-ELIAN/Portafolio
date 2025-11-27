export interface SubService {
  name: string;
  description?: string;
}

export interface ServiceArea {
  id: string;
  type: "digital" | "civil" | "management";
  title: string;
  description: string;
  subServices: SubService[];
}

export const servicesData: ServiceArea[] = [
  {
    id: "digital",
    type: "digital",
    title: "Soluciones Digitales",
    description: "Desarrollo de software a medida y arquitecturas modernas.",
    subServices: [
      { name: "Desarrollo Web Full-Stack", description: "React, Node.js, Next.js" },
      { name: "Aplicaciones Móviles", description: "React Native, iOS & Android" },
      { name: "Arquitectura Cloud", description: "AWS, Azure, Scalable Systems" }
    ]
  },
  {
    id: "civil",
    type: "civil",
    title: "Ingeniería Civil",
    description: "Cálculo estructural y diseño de infraestructuras.",
    subServices: [
      { name: "Cálculo Estructural", description: "Hormigón, Acero, Madera" },
      { name: "Modelado BIM", description: "Revit, Navisworks, Digital Twins" },
      { name: "Gestión de Obra", description: "Planificación y Control de Costes" }
    ]
  },
  {
    id: "management",
    type: "management",
    title: "Gestión de Proyectos",
    description: "Metodologías ágiles y dirección técnica.",
    subServices: [
      { name: "Dirección Técnica", description: "Liderazgo de equipos multidisciplinares" },
      { name: "Metodologías Ágiles", description: "Scrum, Kanban, Lean" },
      { name: "Consultoría Tecnológica", description: "Transformación digital estratégica" }
    ]
  }
];
