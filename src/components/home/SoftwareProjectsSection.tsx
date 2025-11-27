import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { softwareProjects, SoftwareProject } from '../../data/softwareProjects';

// Componente Wrapper para cada tarjeta de Software
const StackedSoftwareProject = ({
    project,
    index,
    total,
    scrollYProgress
}: {
    project: SoftwareProject;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) => {
    // Lógica de Apilamiento (Idéntica a CivilProjectsSection)
    const stackingEnd = 0.85;
    const step = stackingEnd / (total - 1 || 1);

    const enterStart = Math.max(0, (index - 1) * step);
    const enterEnd = index * step;

    const finalTopOffset = 10 + (index * 2);

    const y = useTransform(
        scrollYProgress,
        [enterStart, enterEnd],
        index === 0 ? [`${finalTopOffset}vh`, `${finalTopOffset}vh`] : ["120%", `${finalTopOffset}vh`]
    );

    const nextEnterStart = index * step;
    const nextEnterEnd = (index + 1) * step;

    const scale = useTransform(
        scrollYProgress,
        [nextEnterStart, nextEnterEnd],
        [1, 0.95]
    );

    const opacity = useTransform(
        scrollYProgress,
        [enterStart, enterStart + 0.05],
        index === 0 ? [1, 1] : [0, 1]
    );

    return (
        <motion.div
            className="absolute top-0 left-0 right-0 mx-auto w-full max-w-5xl"
            style={{
                y,
                scale: index === total - 1 ? 1 : scale,
                opacity,
                zIndex: index
            }}
        >
            <Link to="/projects" className="block">
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-[60vh] flex flex-col md:flex-row group cursor-pointer hover:border-slate-700 transition-colors">

                    {/* Imagen / Visualización (Izquierda) */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-black">
                        {/* Efecto de brillo con el color dominante */}
                        <div
                            className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                            style={{ background: `radial-gradient(circle at center, ${project.dominantColor}, transparent 70%)` }}
                        />

                        <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs border-r border-slate-800">
                            &lt;CODE_PREVIEW: {project.title.replace(/\s+/g, '_').toUpperCase()} /&gt;
                        </div>
                    </div>

                    {/* Información (Derecha) */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                        {/* Decoración de borde superior con color dominante */}
                        <div
                            className="absolute top-0 left-0 w-full h-1"
                            style={{ backgroundColor: project.dominantColor, opacity: 0.5 }}
                        />

                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs text-slate-500">ID: {project.id}</span>
                            <div className="h-px flex-grow bg-slate-800"></div>
                            <span
                                className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded text-slate-900"
                                style={{ backgroundColor: project.dominantColor }}
                            >
                                DEV
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            {project.title}
                        </h3>

                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tecnologías (Tags) */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex gap-4 mt-auto pt-6 border-t border-slate-800">
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                    GitHub
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-white hover:text-green-400 transition-colors flex items-center gap-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const SoftwareProjectsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animación de Salida Global (85% - 100%)
    const scale = useTransform(scrollYProgress, [0.85, 1], [1, 0.8]);
    const rotateX = useTransform(scrollYProgress, [0.85, 1], [0, 15]);
    const y = useTransform(scrollYProgress, [0.85, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);
    const backgroundColor = useTransform(scrollYProgress, [0.85, 1], ["#0f172a", "#1e293b"]);

    return (
        <section ref={containerRef} className="relative h-[450vh] bg-slate-900" style={{ perspective: '1000px' }}>

            {/* CONTENEDOR STICKY */}
            <motion.div
                className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start"
                style={{
                    scale,
                    rotateX,
                    y,
                    opacity,
                    backgroundColor,
                    transformOrigin: "center bottom"
                }}
            >
                {/* Encabezado Fijo */}
                <div className="absolute top-0 left-0 w-full z-50 pt-32 pb-8 text-center bg-gradient-to-b from-black/80 to-transparent">
                    <Link to="/projects" className="inline-block group">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl mb-2 cursor-pointer group-hover:text-blue-400 transition-colors select-text"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Proyectos de Software
                        </motion.h2>
                    </Link>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto drop-shadow-md select-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Innovación digital y arquitecturas escalables.
                    </motion.p>
                </div>

                {/* Área de Proyectos (Desplazada hacia abajo para respetar el título) */}
                <div className="relative w-full h-full flex items-center justify-center mt-32 md:mt-40">
                    {softwareProjects.map((project, index) => (
                        <StackedSoftwareProject
                            key={project.id}
                            project={project}
                            index={index}
                            total={softwareProjects.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>

            </motion.div>
        </section>
    );
};

export default SoftwareProjectsSection;
