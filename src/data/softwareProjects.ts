import { Project } from '../types/Project';

export interface SoftwareProject extends Project {
    dominantColor: string;
    repoUrl?: string;
    demoUrl?: string;
}

export const softwareProjects: SoftwareProject[] = [
    {
        id: 101,
        title: "Neon City Dashboard",
        description: "Panel de control futurista para gestión de datos IoT en tiempo real.",
        technologies: ["React", "Three.js", "WebSocket", "Tailwind"],
        imageUrl: "/images/projects/dashboard.png", // Placeholder
        type: "dev",
        dominantColor: "#0ea5e9", // Sky Blue
        repoUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: 102,
        title: "Neural Network Visualizer",
        description: "Herramienta interactiva para visualizar procesos de aprendizaje profundo.",
        technologies: ["Python", "D3.js", "TensorFlow", "Flask"],
        imageUrl: "/images/projects/neural.png", // Placeholder
        type: "dev",
        dominantColor: "#8b5cf6", // Violet
        repoUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: 103,
        title: "EcoStruct BIM Platform",
        description: "Plataforma SaaS para colaboración en modelos BIM sostenibles.",
        technologies: ["Vue.js", "Forge API", "Node.js", "MongoDB"],
        imageUrl: "/images/projects/bim.png", // Placeholder
        type: "dev",
        dominantColor: "#10b981", // Emerald
        repoUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: 104,
        title: "CryptoAlgo Trader",
        description: "Bot de trading algorítmico con backtesting y visualización de métricas.",
        technologies: ["Rust", "React", "PostgreSQL", "Docker"],
        imageUrl: "/images/projects/crypto.png", // Placeholder
        type: "dev",
        dominantColor: "#f59e0b", // Amber
        repoUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: 105,
        title: "CyberSecurity Audit Tool",
        description: "Suite automatizada para pentesting y análisis de vulnerabilidades.",
        technologies: ["Go", "React", "Linux", "Shell"],
        imageUrl: "/images/projects/security.png", // Placeholder
        type: "dev",
        dominantColor: "#ef4444", // Red
        repoUrl: "https://github.com",
        demoUrl: "https://demo.com"
    }
];
