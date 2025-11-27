export interface Skill {
    id: number;
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'design';
    icon: string; // En un caso real, podría ser un componente SVG o una URL
}

export const skills: Skill[] = [
    { id: 1, name: "React", category: "frontend", icon: "⚛️" },
    { id: 2, name: "TypeScript", category: "frontend", icon: "ts" },
    { id: 3, name: "Next.js", category: "frontend", icon: "N" },
    { id: 4, name: "Tailwind", category: "frontend", icon: "🌊" },
    { id: 5, name: "Three.js", category: "frontend", icon: "3D" },
    { id: 6, name: "Node.js", category: "backend", icon: "🟢" },
    { id: 7, name: "Python", category: "backend", icon: "🐍" },
    { id: 8, name: "PostgreSQL", category: "backend", icon: "🐘" },
    { id: 9, name: "Docker", category: "tools", icon: "🐳" },
    { id: 10, name: "Git", category: "tools", icon: "g" },
    { id: 11, name: "Figma", category: "design", icon: "🎨" },
    { id: 12, name: "Blender", category: "design", icon: "🟧" },
];
