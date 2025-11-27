export interface CivilProject {
    id: number;
    title: string;
    description: string;
    details: {
        location: string;
        material: string;
        year: string;
    };
    imageUrl: string;
}

export const civilProjects: CivilProject[] = [
    {
        id: 1,
        title: "Puente Atirantado del Centenario",
        description: "Diseño estructural y supervisión de obra para puente de gran luz.",
        details: {
            location: "Madrid, España",
            material: "Hormigón Pretensado",
            year: "2023"
        },
        imageUrl: "/images/civil/bridge.jpg" // Placeholder
    },
    {
        id: 2,
        title: "Torre Residencial SkyView",
        description: "Cálculo de cimentaciones profundas y estructura sismorresistente.",
        details: {
            location: "Ciudad de México",
            material: "Acero y Concreto",
            year: "2022"
        },
        imageUrl: "/images/civil/tower.jpg" // Placeholder
    },
    {
        id: 3,
        title: "Presa Hidroeléctrica El Valle",
        description: "Modelado hidrológico y diseño de cortina de gravedad.",
        details: {
            location: "Antioquia, Colombia",
            material: "Hormigón Compactado",
            year: "2024"
        },
        imageUrl: "/images/civil/dam.jpg" // Placeholder
    }
];
